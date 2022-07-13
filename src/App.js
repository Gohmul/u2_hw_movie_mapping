import './styles/App.css'
import movieArray from './data/movies.json'
import Movie from './components/Movie.jsx'
import Genre from './components/Genre.jsx'
const App = () => {

  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className='movies'>
        {movieArray.map((movie, index) => (
          <div>
            <Movie
            title={movie.title}
            overview={movie.overview}
            releasedate={movie.release_date}
            poster={movie.poster_path}
            />
            {movie.genres.map((genre, index) => (
              <Genre genre={genre.name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
