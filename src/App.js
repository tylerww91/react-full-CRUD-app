import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth.js';
import Nav from './components/Nav/Nav.js';
import EditPost from './components/Posts/EditPost.js';
import NewPost from './components/Posts/NewPost.js';
import PostList from './components/Posts/PostList.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/posts/edit/:id" component={EditPost} />
        <Route path="/posts/new" component={NewPost} />
        <Route path="/posts" component={PostList} />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
