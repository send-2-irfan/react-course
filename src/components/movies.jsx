import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {

    state = { movies:  getMovies()} 
    render() { 
        return (
            <React.Fragment>
                <h2 className='h2 m-2'>Showing {this.state.movies.length} movies in the database.</h2>
                <table class="table">
                    <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    </tr>
                </thead>
                <tbody>  
                                  
                    {
                        this.state.movies.map(movie =>
                            <tr>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>                           
                                </tr>
                        )
                    }
                </tbody>            
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;
