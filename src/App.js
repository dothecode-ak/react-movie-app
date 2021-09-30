
import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
import './App.scss';
function App() {
  return (
    <div className="App">
       <Router>
         <Header/>
         <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/movie/:imdbID' component={MovieDetail}/>
         <Route component={NotFound}/>
         </Switch>
       <Footer/>
       </Router>
    </div>
  );
}

export default App;
