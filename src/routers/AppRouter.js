import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";


import dashboardPage from '../components/Dashboard';
import addExpensePage from '../components/addExpense';
import editExpensePage from '../components/editExpense';
import helpPage from '../components/help';
import notFoundPage from '../components/notFound';
import Header from '../components/Header';
  

  

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/" component={dashboardPage} exact={true}/>
            <Route path="/create" component={addExpensePage}/>
            <Route path="/edit" component={editExpensePage}/>
            <Route path="/help" component={helpPage}/>
            <Route component={notFoundPage}/> 
          </Switch>
          </div>
        </BrowserRouter>
    )

};

export default AppRouter;