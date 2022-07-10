import { useEffect, useState } from "react";

const MoviesList = () => {
  return(
    <div className="movies_wrap">
      <ul className="list">
        11111111
      </ul>
    </div>
  )
}

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(()=>{
    getMovies();
  },[])

  return(
    <div>
      {loading ? <p>Loading...</p> : <MoviesList />}
    </div>
  )
}

export default Movie;