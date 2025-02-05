import React from 'react';
import '../styles/GridMovies.css';

function GridCard(props) {
    if (props.actor) {
        return(
            <div className="col-1">
                <div className="actor-card">
                    <ul className="list-group">                     
                        <li key={props.id} >
                            <img alt={props.original_title} src={props.image}/>
                        </li>
                        <span>{props.actor}</span>
                        <br/>
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
        <div className="col-1">
            <div className="movie-card" >
                <ul className="list-group-movie">
                    <li key={props.id} >
                        <a href={`/movie/${props.movieId}`}>
                            <img alt="img" src={props.image}/>
                        </a>
                    </li>
                    <label>{props.title}</label>
                </ul>
                
            </div>
        </div>
    )
    }
    
}

export default GridCard
