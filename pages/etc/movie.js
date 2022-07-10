import MovieComponet from '../../components/etc/movie/Movie';
import { RecoilRoot } from 'recoil';

const Movie = () => {
  return(
    <div className="app-movie">
      <RecoilRoot>
        <MovieComponet />
      </RecoilRoot>
    </div>
  )
}

export default Movie;