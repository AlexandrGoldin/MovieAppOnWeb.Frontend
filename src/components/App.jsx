import React from 'react';
import Filters from './Filters/Filters';
import MovieList from './Movies/MovieList';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      filters: {
        sortColumn: "rating"
      },
      page: 1
    };
  }

  onChangeFilters = event => {
    const newFilters = {
      ...this.state.filters,
      [event.target.name]: event.target.value
    };
    this.setState({
      filters: newFilters
    });
    console.log(event.target.name, event.target.value);
  };

  onChangePage = page =>{
    this.setState({
      //page: page
      page
    });
  };

  render() {
    const { filters, page } = this.state;
    return (
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-4'>
            <div className='card' style={{ width: "100%" }}>
              <div className='card-body'>
                <h3>Фильтры:</h3>
                <Filters
                  page={page}
                  filters={filters}
                  onChangeFilters={this.onChangeFilters}
                  onChangePage={this.onChangePage}
                />
              </div>
            </div>
          </div>
          <div className='col-8'>
            <MovieList filters={filters}
             page={page}
             onChangePage={this.onChangePage}/>
          </div>
        </div>
      </div>
    );
  }
}
