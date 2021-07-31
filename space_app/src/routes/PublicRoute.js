import React from 'react';
import {Route} from 'react-router-dom'

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route component={Component} {...rest} />
    );
};

PublicRoute.propTypes = {

};

export default PublicRoute;