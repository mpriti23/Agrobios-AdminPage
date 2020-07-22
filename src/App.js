import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App1 from './Components/Dashboard';
import App2 from './Components/AddNew';
import App3 from './Components/Transaction';
import AppLogin from './Components/login';
import App4 from './Components/NewSalesEntry';
import App5 from './Components/Receipt';
import App6 from './Components/NewReceipt';
import App7 from './Components/Edit';
import {withRouter} from "react-router";

function App() {
    return (
        <Router>
            <Route exact path={['/', '/login']} component={withRouter(AppLogin)}/>
            <Route path={'/Dashboard'} component={withRouter(App1)}/>
            <Route path={'/AddNew'} component={withRouter(App2)}/>
            <Route path={'/Edit'} component={withRouter(App7)}/>
            <Route path={'/Transaction'} component={withRouter(App3)}/>
            <Route path={'/NewSalesEntry'} component={withRouter(App4)}/>
            <Route path={'/Receipt'} component={withRouter(App5)}/>
            <Route path={'/NewReceipt'} component={withRouter(App6)}/>
           
        </Router>

    );
}

export default App;