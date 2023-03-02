import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {

    state = { movies:  getMovies()} 

    handleDelete = (movie) =>{
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
    }
    render() { 
        return (
            <React.Fragment>
                <h2 className='h2 m-2'>Showing {this.state.movies.length} movies in the database.</h2>
                <table className="table">
                    <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>  
                                  
                    {
                        this.state.movies.map(movie =>
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td> 
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>                        
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
