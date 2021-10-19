import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ClickedService from './components/ClickedService/ClickedService';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/faqs">
              <FAQs></FAQs>
            </Route>

            <PrivateRoute path="/clickedservice/:id">
              <ClickedService></ClickedService>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
