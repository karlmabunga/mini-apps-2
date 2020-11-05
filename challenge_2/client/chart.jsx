import React from 'react';
import Chartjs from 'chart.js';

class ChartDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.displayChart = this.displayChart.bind(this);
  }

  displayChart() {
    const { data, labels } = this.props
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chartjs(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: labels,
          datasets: [{
              label: 'BTC',
              backgroundColor: 'blue',
              borderColor: 'blue',
              data: data
          }]
      },

      // Configuration options go here
      options: {}
  });
  }

  render() {
    return(
      <div>
      {this.displayChart()}
    </div>
    )
  }
};

export default ChartDisplay;
