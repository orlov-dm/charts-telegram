
const DEFAULT_WIDTH = 460;
const DEFAULT_HEIGHT = 418;

const GRID_LINES = 6;
const BOTTOM_SPACING = 40;

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
      };
      this.props = props;
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
      } else {
        // canvas-unsupported code here
      }
    }

    render() {
      this.renderGrid();
      this.renderBottomLabels();
      this.renderLines();
      this.renderSideLabels();
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
      const { columns } = this.props;
      const { x: xPoints } = columns;
      const ctx = this.ctx;

      const sizeWidth = ctx.canvas.clientWidth;
      const sizeHeight = ctx.canvas.clientHeight;
    
      const X_DISTANCE = 100;
      const count = sizeWidth / X_DISTANCE;

      const points = xPoints.length;
      const pointsInterval = Math.floor(points / count);
      const startY = sizeHeight - 20;
      const pointsDistance = Math.floor(sizeWidth / count);
      const startX = Math.floor(pointsDistance / 2);
      const options = { month: 'short', day: 'numeric' };
      for (let i = pointsInterval, j = 0; i < xPoints.length - 1; i += pointsInterval, ++j) {
        const time = xPoints[i];
        const date = new Date(time);
        ctx.fillText(date.toLocaleDateString(undefined, options), startX+pointsDistance*j, startY);
      }
    }

    renderSideLabels() {
      const ctx = this.ctx;

      const [maxY] = this.getMaxY();

      const sizeHeight = ctx.canvas.clientHeight;
      const startY = sizeHeight - BOTTOM_SPACING;
      ctx.strokeStyle = 'lightgray';
      ctx.lineWidth = 1;

      const pointsYDistance = Math.floor(startY / maxY);
      const gridLinesDistance = Math.floor(startY / GRID_LINES);
      for (let i = 0; i < GRID_LINES; ++i) {
        const pos = Math.floor(i * gridLinesDistance);
        ctx.fillText(i*gridLinesDistance*pointsYDistance, 0, startY - pos - 10);
      }
    }

    renderLines() {
      const ctx = this.ctx;
      const { columns, colors } = this.props;
      let { x: xPoints, ...yPoints } = columns;

      const sizeWidth = ctx.canvas.clientWidth;
      const sizeHeight = ctx.canvas.clientHeight;
      const pointsDistance = Math.floor(sizeWidth / (xPoints.length - 1));
      const startY = sizeHeight - BOTTOM_SPACING;
      const [maxY] = this.getMaxY();
      const pointsYDistance = Math.floor(startY / maxY);

      ctx.lineWidth = 2.5;
      Object.keys(yPoints).forEach(yName => {
        const line = yPoints[yName];
        ctx.beginPath();
        ctx.strokeStyle = colors[yName];
        line.forEach((y, i) => {
          if (!i) {
            ctx.strokeStyle = colors[y];
            return;
          }
          if (i === 1) {
            ctx.moveTo(i*pointsDistance, startY-y*pointsYDistance);
          } else {
            //const x = xPoints[i];
            ctx.lineTo(i*pointsDistance, startY-y*pointsYDistance);
          }
        });
        ctx.stroke();
      });
    }

    getMaxY() {
      let { x: xPoints, ...yPoints } = this.props.columns;
      let max = 0;
      let maxYPoints = null;
      Object.values(yPoints).forEach(values => {
        const newMax = Math.max(...values);
        if (max < newMax) {
          max = newMax;
          maxYPoints = values;
        }
      })
      return [max, maxYPoints];
    }
};