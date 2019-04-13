
const DEFAULT_WIDTH = 460;
const DEFAULT_HEIGHT = 418;

const GRID_LINES = 6;
const BOTTOM_SPACING = 80;

const AREA_CENTER = 1;
const AREA_BOTTOM = 2;
const AREA_BOTTOM_PREVIEW = 3;
const AREA_LEFT = 4;

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

export default class Chart {
    constructor({
      id,
      width = DEFAULT_WIDTH,
      height = DEFAULT_HEIGHT,
      data,
    }, parentElement) {
      const { columns, colors, names, types } = data;
      const properColumns = {};
      columns.forEach(columnData => {
        const [name, ...data] = columnData;
        properColumns[name] = data;
      })
      const props = {
        id,
        width,
        height,
        parentElement,
        columns: properColumns,
        colors,
        names,
        types,
        xRange: [50, 100],
      };
      this.props = props;
      this.points = {};
      this.mouse = {x: 0, y: 0, down: false, downLeft: false, downRight: false};
    }

    init() {
      const { id, parentElement, width, height } = this.props; 
      if (!id || !parentElement) {
          return false;
      }

      const element = document.createElement('canvas');
      element.setAttribute('id', id);

      const scale = window.devicePixelRatio;
      if (width) {
        element.style.width = width + 'px';
        element.width = width * scale;
      }
      if (height) {
        element.style.height = height + 'px';
        element.height = height * scale;
      }
      if (element.getContext) {
        const ctx = element.getContext('2d');
        this.ctx = ctx;
        this.element = element;
        parentElement.appendChild(element);
        
        //ctx.translate(0.5, 0.5);
        ctx.scale(scale, scale);
        this.render();

        document.addEventListener('mousemove', (e) => this.mouseMove(e), false);
        document.addEventListener('mousedown', (e) => this.mouseDown(e), false);
        document.addEventListener('mouseup', (e) => this.mouseUp(e), false);
        //element.addEventListener('mouseout', (e) => this.mouseUp(e), false); 
      } else {
        // canvas-unsupported code here
      }
    }

    render() {
      console.log(this.props.xRange);
      this.ctx.save();
      this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
      this.points = {};
      //this.renderGrid();
      this.renderBottomLabels();
      this.renderLines();
      this.renderSideLabels();

      this.renderPreview();
      this.ctx.restore();
    }

    renderGrid() {
      const ctx = this.ctx;

      const sizeWidth = ctx.canvas.clientWidth;
      const sizeHeight = ctx.canvas.clientHeight;
      const startY = sizeHeight - BOTTOM_SPACING;
      const distance = startY / GRID_LINES;
      ctx.beginPath();
      for (let i = 0; i < GRID_LINES; ++i) {
        const pos = Math.floor(i * distance);
        ctx.moveTo(0, startY - pos); 
        ctx.lineTo(sizeWidth, startY - pos);
      }
      ctx.strokeStyle = 'lightgray';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    renderBottomLabels() {
      const {x:xPoints} = this.getPoints();
      const ctx = this.ctx;

      const [[x1,y1], [x2,y2]] = this.getAreaPos(AREA_BOTTOM);

      const width = x2-x1;

      const X_DISTANCE = 100;
      let count = width / X_DISTANCE;
      count = count - count%4;
      const points = xPoints.length;
      const pointsInterval = Math.floor(points / count);
      const pointsDistance = width / count;
      const startX = pointsDistance / 2;
      const startY = y1 + 20;
      const options = { month: 'short', day: 'numeric' };
      for (let i = pointsInterval, j = 0; i < xPoints.length - 1; i += pointsInterval, ++j) {
        const time = xPoints[i];
        ctx.fillText(dateConverter(time), Math.floor(startX+pointsDistance*j), startY);
      }
    }

    renderSideLabels() {
      const ctx = this.ctx;

      const [[x1,y1], [x2,y2]] = this.getAreaPos(AREA_LEFT);
      const maxY = this.getMaxY();

      ctx.strokeStyle = 'rgba(111, 111, 111, 0.1)';
      ctx.lineWidth = 1;

      const height = y2-y1;
      const width = x2-x1;
      const pointsDistance = height / maxY;
      const linesDistance = height / GRID_LINES;
    
      ctx.beginPath();
      for (let i = 0; i < GRID_LINES; ++i) {
        const pos = y2 - i * linesDistance;
        ctx.moveTo(0, pos); 
        ctx.lineTo(width, pos);
        ctx.fillText(Math.floor(i*linesDistance/pointsDistance), 0, Math.floor(pos - 10));
      }
      ctx.stroke();
    }

    renderLines(isPreview = false) {
      const ctx = this.ctx;
      const { colors } = this.props;

      const {x:xPoints, ...yPoints} = this.getPoints(isPreview);
      const [[x1,y1], [x2,y2]] = this.getAreaPos(isPreview ? AREA_BOTTOM_PREVIEW : AREA_CENTER);


      const width = x2-x1;
      const height = y2-y1;
      const pointsDistance = width / (xPoints.length - 1);
      const startY = y2;
      const maxY = this.getMaxY(isPreview);
      const pointsYDistance = height / maxY;

      ctx.lineWidth = 2.5;
      Object.keys(yPoints).forEach(yName => {
        const line = yPoints[yName];
        ctx.beginPath();
        ctx.strokeStyle = colors[yName];
        line.forEach((y, i) => {
          if (!i) {
            ctx.strokeStyle = colors[y];
            ctx.moveTo(Math.floor(i*pointsDistance), Math.floor(startY-y*pointsYDistance));
            return;
          }
          ctx.lineTo(Math.floor(i*pointsDistance), Math.floor(startY-y*pointsYDistance));
        });
        ctx.stroke();
      });
    }

    renderPreview() {
      this.renderLines(true);
      this.renderPreviewSelection();
    }

    renderPreviewSelection() {
      const ctx = this.ctx;
      const [[x1,y1],[x2,y2]] = this.getAreaPos(AREA_BOTTOM_PREVIEW);
      const { xRange } = this.props;
      const [xBegin, xEnd] = xRange;

      const rel = (x2-x1)/100;

      const x1Res = x1 + xBegin*rel;
      const x2Res = xEnd*rel + x1;
      const y1Res = y1;
      const y2Res = y2;
      ctx.fillStyle = 'rgb(234,234,245, 0.95)';
      ctx.fillRect(x1Res, y1Res-10, 5, y2Res-y1Res+10);
      ctx.fillRect(x2Res - 5, y1Res-10, 5, y2Res-y1Res+10);
      ctx.fillRect(x1Res, y1Res-10, x2Res-x1Res, 2);
      ctx.fillRect(x1Res, y2Res-2, x2Res-x1Res, 2);

      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      //ctx.fillRect(x1Res+5, y1Res-8, x2Res-x1Res-10, y2Res-y1Res+6);
      this.selectionPos = [[x1Res, y1Res],[x2Res, y2Res]];

      ctx.fillStyle = 'rgba(246,249,251,0.5)';
      ctx.fillRect(x1,y1-10,x1Res,y2-y1+10);
      ctx.fillRect(x2Res,y1-10,x2,y2-y1+10);
    }

    getMaxY(isPreview = false) {
      const {x, ...yPoints} = this.getPoints(isPreview);
      let max = 0;
      Object.values(yPoints).forEach(values => {
        const newMax = Math.max(...values);
        if (max < newMax) {
          max = newMax;
        }
      });
      return max;
    }

    getPoints(isPreview = false) {
      if (this.points[isPreview]) {
        return this.points[isPreview];
      }
      const { xRange, columns } = this.props;
      let { x: xPoints, ...yPoints } = columns;

      if (!isPreview && !xRange != [0, 100]) {
        const [xBegin, xEnd] = xRange;
        const xPointsMultiplier = xPoints.length / 100
        const start = Math.floor(xBegin*xPointsMultiplier);
        const end = Math.floor(xEnd*xPointsMultiplier);
        xPoints = xPoints.slice(start, end);

        const yPointsKeys = Object.keys(yPoints);
        for (let i = 0; i < yPointsKeys.length; ++i) {
          yPoints[yPointsKeys[i]] = yPoints[yPointsKeys[i]].slice(start, end);
        }
      }

      const points = { x: xPoints, ...yPoints };
      this.points[isPreview] = points;
      return points
    }

    getAreaPos(area) {
      const ctx = this.ctx;
      const sizeWidth = ctx.canvas.clientWidth;
      const sizeHeight = ctx.canvas.clientHeight;
      switch(area) {
        case AREA_CENTER:
          return [
            [0, 0],
            [sizeWidth, sizeHeight - BOTTOM_SPACING]
          ];
        case AREA_BOTTOM:
          return [
            [0, sizeHeight - BOTTOM_SPACING],
            [sizeWidth, sizeHeight]
          ];
        case AREA_BOTTOM_PREVIEW:
          return [
            [0, sizeHeight - BOTTOM_SPACING/2],
            [sizeWidth, sizeHeight]
          ];
        case AREA_LEFT:
          return [
            [0, 0],
            [sizeWidth, sizeHeight - BOTTOM_SPACING]
          ];
      }
    }

    mouseDown( event ){
      if (this.mouse.down) {
        return;
      }
      const x = event.pageX - this.element.offsetLeft;
      const y = event.pageY - this.element.offsetTop;
      
      const [[x1,y1],[x2,y2]] = this.selectionPos;
      if (x < x1 || x > x2 || y < y1 || y > y2) {
        return;
      }
      if (Math.abs(x - x1) <= 5) {
        this.mouse.down = 'left';
      } else if (Math.abs(x - x2) <= 5) {
        this.mouse.down = 'right';
      } else {
        this.mouse.down = 'center';
      }
      this.mouse.x = x;
      this.mouse.y = y;
    }

    mouseUp( event ){
      this.mouse.down = false;
      console.log('mouse up');
    }

    mouseMove ( event ){
      if (!this.mouse.down) {
        return;
      }
      const x = event.pageX - this.element.offsetLeft;
      const y = event.pageY - this.element.offsetTop;
      const toLeft = this.mouse.x > x;   
      const movePoints = this.mouse.x - x; 
      const [[x1,y1],[x2,y2]] = this.getAreaPos(AREA_BOTTOM_PREVIEW);
      const rel = (x2-x1)/100;
      const newXRangeDiff = toLeft ? Math.floor(movePoints/rel) : Math.ceil(movePoints/rel);
      if (!newXRangeDiff) {
        return;
      }
      this.mouse.x = x;
      this.mouse.y = y;
      const [xBegin, xEnd] = this.props.xRange;
      const xRangeDistance = this.mouse.down === 'center' ? xEnd - xBegin : 0;
    

      let newXRangeLeft = xBegin;
      let newXRangeRight = xEnd;
      if (this.mouse.down === 'center') {
        if (toLeft && xBegin === 0) {
          return;
        }
        if (!toLeft && xEnd === 100) {
          return;
        }
        const newXRange = toLeft ? xBegin - newXRangeDiff : xEnd - newXRangeDiff;
        if (toLeft && newXRange < xBegin) {
          console.log('Move to left ' + newXRange + ' ' + xBegin);
          newXRangeLeft = newXRange;
          newXRangeRight = xRangeDistance ? newXRange + xRangeDistance : xEnd;
        } else if (!toLeft && newXRange > xEnd) {
          console.log('Move to right ' + newXRange + ' ' + xEnd);
          newXRangeLeft = xRangeDistance ? newXRange - xRangeDistance : xBegin;
          newXRangeRight = newXRange;
        } else {
          return;
        }
        if (newXRangeLeft < 0) {
          newXRangeLeft = 0;
          newXRangeRight = newXRangeLeft + xRangeDistance;
        }
        if (newXRangeRight > 100) {
          newXRangeRight = 100;
          newXRangeLeft = newXRangeRight - xRangeDistance;
        }
      } else {
        newXRangeLeft = this.mouse.down === 'left' ? (xBegin - newXRangeDiff) : xBegin;
        newXRangeRight = this.mouse.down === 'right' ? (xEnd - newXRangeDiff) : xEnd;

        if (newXRangeRight - newXRangeLeft < 20) {
          return;
          console.log('norm to 20');
          if (toLeft) {
            newXRangeRight = newXRangeLeft + 20;
          } else {
            newXRangeLeft = newXRangeRight - 20;
          }
        }
      }

      if (newXRangeLeft < 0) {
        return;
        console.log('norm to 0');

        newXRangeLeft = 0;
      }
      if (newXRangeRight > 100) {
        return;
        console.log('norm to 100');

        newXRangeRight = 100;
      }
      if (newXRangeLeft !== xBegin || newXRangeRight !== xEnd) { 
        console.log(newXRangeLeft, newXRangeRight);
        this.props.xRange = [newXRangeLeft, newXRangeRight];
        window.requestAnimationFrame(this.render.bind(this));
      }
    }
};

function dateConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var month = MONTHS[a.getMonth()];
  var date = a.getDate();
  return month + ' ' + date;
}