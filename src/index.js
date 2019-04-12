import 'normalize.css';
import './styles/main.css';
import Chart from './Chart';
import charts from './chart_data.json';


function parseData() {

}

function main() {
  console.log(charts);
  const chart1 = new Chart({
    id: 'test_chart',
    data: charts[0],
  }, document.getElementById('root'));
  chart1.init();
}

main();