import { Route, Switch, Redirect } from 'react-router-dom';
import Cart from './Cart';
import ItemsList from './ItemsList';

function Routes() {
    return (
        <Switch>
            <Route exact path="/cart"><Cart /></Route>
            <Route exact path="/"><ItemsList /></Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;