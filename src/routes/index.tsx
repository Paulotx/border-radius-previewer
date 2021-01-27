import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BorderRadius from '../pages/BorderRadius';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={BorderRadius} />
    </Switch>
);

export default Routes;
