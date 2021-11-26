import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import ShowBlogs from './ShowBlogs';
import Create from './Create'
import BlogDetails from './BlogDetails';
import { BrowserRouter as Routeur , Route , Switch } from 'react-router-dom';

function App() {
  return (
    <Routeur>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blogs">
            <ShowBlogs  />
          </Route>
          <Route path="/create">
            <Create  />
          </Route>
          <Route  path="/blogs/:id">
            <BlogDetails />
          </Route>

        </Switch>
      </div>
    </Routeur>

  );
}

export default App;
