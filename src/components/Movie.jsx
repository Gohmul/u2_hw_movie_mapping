const Movie = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        
        <p>{props.overview}</p>
        <img src={props.poster} alt="poster" />
        <p>{props.releasedate}</p>
      </div>
    )
  }
  
  export default Movie