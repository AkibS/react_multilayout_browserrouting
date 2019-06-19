import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import LoginLayoutRoutes from './loginLayoutRoutes';
import AppLayoutRoutes from './appLayoutRoutes';

const publicPath = '/testapp/';

var layoutAssignments = {
    '/': LoginLayoutRoutes,
    '/signup': LoginLayoutRoutes,
    '/dashboard': AppLayoutRoutes,
    '/profiles': AppLayoutRoutes
}

var layoutPicker = function (props) {
    var Layout = layoutAssignments[props.location.pathname];
    return Layout ? <Layout /> : <pre>bad route</pre>;
};

class RouteTemplate extends React.Component {
    render() {
        return (
            <Router basename={publicPath}>
                <Route path="*" render={layoutPicker} />
            </Router>
        );
    }
}

export default RouteTemplate;