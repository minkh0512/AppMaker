import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <h1 className="title">App List</h1>
      <ul className="list">
        <li className="list-item">
          <Link className="link" to='/CardMatchingGame'>CardMatchingGame</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;