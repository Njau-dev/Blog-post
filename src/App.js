import './App.css';
// import TextControlsExample from './bootstrap';
import Form from './Components/Create';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Components/Home';
import Contact from './Components/Contacts';
// import NewsLetter from './footer';
import BlogDetails from './Components/Blogdetails';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Navbar />
      
        <div>
        <Switch>
          
        
          <Route exact path="/">
              <Home/>
          </Route>

          <Route exact path="/Create" >
              {/* <TextControlsExample /> */}
              <Form />
          </Route>
              
          <Route exact path="/Contact">
            <Contact />
          </Route>
            
          <Route path="/Blog-details/:id">
              <BlogDetails/>
          </Route>
            
          </Switch>
          
          {/* <NewsLetter /> */}
        </div>
        
      </div>
    </Router>

  );
}

export default App;
