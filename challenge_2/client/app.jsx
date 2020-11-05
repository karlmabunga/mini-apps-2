import React from 'react';
import ChartDisplay from './chart.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      labels: [],
    }
  }

  componentDidMount() {
    axios.get('/api/btc/closing')
      .then((res) => {
        const labels = [];
        const data = [];
        for (var key in res.data) {
          labels.push(key)
          data.push(res.data[key])
        }
        this.setState({
          data: data,
          labels: labels,
        })
      })
  }

  render() {
    const { data, labels } = this.state;
    console.log(labels)
    return(
      <div>
      Powered by CoinDesk
      <ChartDisplay data={data} labels={labels} />
    </div>
    )
  }
};

export default App;
