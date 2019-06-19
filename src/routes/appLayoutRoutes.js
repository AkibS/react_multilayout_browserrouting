import React from 'react';
import AppLayout from '../layouts/appLayout';
import Dashboard from '../containers/dashboard'
import Profiles from '../containers/profiles'
import { Route, Switch } from 'react-router';

class AppLayoutRoutes extends React.Component {
    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/profiles" component={Profiles} />
                </Switch>
            </AppLayout>
        );
    }
}

export default AppLayoutRoutes; 