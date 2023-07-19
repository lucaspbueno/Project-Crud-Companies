import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import FormPage from './pages/FormPage';
import TablePage from './pages/TablePage';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/form" component={ FormPage } />
      <Route exact path="/table" component={ TablePage } />
    </Switch>
  );
}

export default App;
