import 'normalize.css';
import './styles/main.css';
import Chart from './Chart';
import charts from './chart_data.json';


function parseData() {

}

function main() {
  console.log(charts);
  const chart0 = new Chart({
    id: 'test_chart0',
    data: charts[0],
  }, document.getElementById('root'));
  chart0.init();

  const chart1 = new Chart({
    id: 'test_chart1',
    data: charts[1],
  }, document.getElementById('root'));
  chart1.init();

  const chart2 = new Chart({
    id: 'test_chart2',
    data: charts[2],
  }, document.getElementById('root'));
  chart2.init();

  const chart3 = new Chart({
    id: 'test_chart3',
    data: charts[3],
  }, document.getElementById('root'));
  chart3.init();

  const chart4 = new Chart({
    id: 'test_chart4',
    data: charts[4],
  }, document.getElementById('root'));
  chart4.init();
}

main();