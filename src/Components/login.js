import React, {Component} from 'react';
//import logo from './logo.svg';
import './AppLogin.css';

import {Form, FormGroup} from 'reactstrap';
import {Link, Route, BrowserRouter, Switch, Redirect, useHistory} from 'react-router-dom';
import {Select} from 'antd';

const {Option, OptGroup} = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

class AppLogin extends Component {

    loginHandle = () => {

        this.props.history.push('/Dashboard');

    }

    render() {
        return (
            <Form className="App1">
                <h3>Welcome to Admin Control Panel</h3>
                <h2>agrobiosonline.com</h2>
                <h4>BOOK/JOURNAL/MAGAZINE/EPUB SOLUTIONS</h4>
                <br></br>
                <br></br>
                <FormGroup>
                    <form class="line">
                        <div>
                            <label for="login ID">Login ID</label>
                            <input
                                type="text"
                                name="loginid"
                                id="loginid"
                            />
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>

                        <div>


                            <button type="submit" onClick={this.loginHandle}>Login</button>


                        </div>

                    </form>
                    <h5 class="footer1">Admin Control Panel | Licence copy issued to agrobiosonline.com Portal</h5>
                    <h5 class="footer2">ERP Solutions by:AGROBIOS DIGITALS</h5>
                </FormGroup>
            </Form>
        );
    }
}

export default AppLogin;
