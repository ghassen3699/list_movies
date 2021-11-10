import React, { Component } from 'react'
import {getMovie } from '../services/fakemovie';


class Movie extends Component {
    state = {
        movies : getMovie()
    };
    
    deleteMethod = (movie) =>{
        const movies = this.state.movies.filter(m => m._id != movie._id);
        this.setState({movies});
    };

    
    render(){
        if (this.state.movies.length === 0) {
            return <p>There are no movies in the databases.</p>;
        }
        else {
            return(
                <>
                <p>Showing {this.state.movies.length} movies in the database.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentaRate}</td>
                                <td><button onClick={ () => this.deleteMethod(movie) } className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>)
                        )}
                        
                    </tbody>
                </table>
                </>
            )
        }
    }
}

export default Movie ;