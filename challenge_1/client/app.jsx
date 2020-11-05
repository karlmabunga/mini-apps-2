import React from 'react';
import Search from './search.jsx';
import Events from './events.jsx';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      category: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }
  handleChange(event) {
    this.setState({search: event.target.value});
  }
  handleCategory(event) {
    this.setState({category: event.target.value});
  }
  handleSubmit(event) {
    const { search, category } = this.state;
    // alert('A name was submitted: ' + this.state.search);
    event.preventDefault();
    axios.get(`/events?${category}=${search}&_limit=20`)
      .then((res) => {
        this.setState({
          data: res.data
        })
      })
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleCategory={this.handleCategory}/>
        { data ? <Events data={data} /> : null}
      </div>
    )
  }
}

export default App;
