import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/Home.page';
import LoginPage from './pages/LoginPage/Login.page';
import RegisterPage from './pages/RegisterPage/Register.page';
import ResumePage from "./pages/ResumePage/Resume.page";
import ErrorPage from './pages/ErrorPage/Error.page';
import Header from './components/Header/Header.component';
import Container from './components/Container/Container.component';
import pathHistory from "./pathHistory";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Container>
            <Router history={pathHistory}>
                <Switch>
                    <Route exact={true} path='/' component={HomePage}/>
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                    <Route path='/resume' component={ResumePage}/>
                    <Route path='*' component={ErrorPage}/>
                </Switch>
            </Router>
        </Container>
    </div>
  );
}

export default App;
