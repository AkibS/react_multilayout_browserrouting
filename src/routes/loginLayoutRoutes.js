import React from 'react';
import LoginLayout from '../layouts/loginLayout'
import Login from '../containers/login'
import SignUp from '../containers/signup'

import { Route, Switch } from 'react-router';

class LoginLayoutRoutes extends React.Component {
    render() {
        return (
            <div>
                <LoginLayout>
                    <Switch>
                        <Route path="/signup" component={SignUp} />
                        <Route path="/" component={Login} />
                    </Switch>
                </LoginLayout>
            </div>
        );
    }
}

export default LoginLayoutRoutes; 