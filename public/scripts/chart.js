google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Arrived at least 15 minutes earlier', 0.12],
    ['Arrived 15 minutes before start - on time', 0.33],
    ['Arrived several minutes after start', 0.2],
    ['Was more than 10 minutes late', 0.07],
    ['Did not arrive at all', 0.28]
  ]);

  var options = { title:'Cinema screenings attendence (2023)',
                 backgroundColor: 'none',
                 colors: ['#02a8f3', '#ffdf00', '#e81e63', '#53d8d8', '#b0bbbf'],
                 fontName: `'Roboto Mono', monospace`,
                 'pieSliceBorderColor': '#f5f5f5',
                 'pieSliceBorderWidth': '100',
                 'titleTextStyle': {
                    color: '#f5f5f5',
                    fontName: `'Montserrat', sans-serif`,
                    fontSize: '20'
                 },
                 pieHole: 0.5,
                 annotations: { 
                    textStyle: 
                    {
                        color: '#f5f5f5', 
                        fontName: `'Montserrat', sans-serif`,
                        padding: '10px'
                    }
                }
};

  var chart = new google.visualization.PieChart(document.getElementById('chart-div'));
  chart.draw(data, options);
}