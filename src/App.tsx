import React from 'react';
import styles from './App.module.css';
import { HomePage, SignInPage, RegisterPage, DetailPage } from './pages';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Result } from 'antd';


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route render={()=><Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<Link to="/">Back Home</Link>} /> } />
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
