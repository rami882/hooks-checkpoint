import React from 'react'

const Moviedescreption = (props) => {
    console.log(props)
    let movie = props.movies.find(el=> el.name === props.match.params.name)
    console.log(movie)
    return (
        <div>
        <h1 style={{color:"white"}}>Movie Trailer: {movie.name} </h1>
        <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  
          width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        </div>
    
    )
}

export default Moviedescreption
