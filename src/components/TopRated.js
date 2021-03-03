import React, { Component } from 'react';
import axios from 'axios';

const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=fa75b26c24267f9f093f0967d4af43ed'; 

class TopRated extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topmovie: [],
            errorMessage: ''
        }
    }
    
    componentDidMount() {
      axios.get(topRatedUrl)
      .then(response => {
          console.log(response)
          this.setState({ topmovie: response.data.results })
      }).catch(error => {
          console.log(error);
          this.setState({ errorMessage: 'Error retrieving data' })
      })
    }

    render() {
        const { topmovie } = this.state
      return (
          <div className="container">
            <h2 className="top_rate">Top Rated Movies</h2>
            <div className="row">
                {topmovie.map((topmovie,i) => {
                return(
                    <div className="col s12 m6 l3">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={`https://image.tmdb.org/t/p/w200/${topmovie.poster_path}`} alt={topmovie.title}/>
                            </div>
                            <div className="card-content">
                                <h6 className="">{topmovie.title}</h6>
                                <h6 className="">{topmovie.release_date.substring(0, 4)}</h6>
                            </div>
                        </div>
                    </div>
                )
                })}     
            </div>
          </div>
      )
    }
}

export default TopRated;