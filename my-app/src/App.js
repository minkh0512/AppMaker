import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './routes/Home';
import CardMatchingGame from './routes/CardMatchingGame';

const App = () =>{
  return <Router>
    <Switch>
      <Route path="/CardMatchingGame">
        <CardMatchingGame />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;
