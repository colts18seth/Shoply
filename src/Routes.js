import { Route, Switch, Redirect } from 'react-router-dom';
import Cart from './Cart';
import ItemDetails from './ItemDetails';
import ItemsList from './ItemsList';

function Routes() {
    return (
        <Switch>
            <Route exact path="/"><ItemsList /></Route>
            <Route exact path="/cart"><Cart /></Route>
            <Route exact path="/products/:id"><ItemDetails /></Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;