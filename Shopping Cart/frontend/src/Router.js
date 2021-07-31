import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CartItemContainer from './Componants/CartItemContainer';
import ItemInfo from './Componants/ItemInfo';
import Login from './Componants/Login';
import Signup from './Componants/Signup';
import Home from './Pages/Home';
import SearchItemList from './Pages/SearchItemList';

function Router() {
    return (
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/cart/"><CartItemContainer/></Route>
            <Route path="/search/"><SearchItemList/></Route>
            <Route path="/itemInfo/"><ItemInfo/></Route>
            <Route path="/login/"><Login/></Route>
            <Route path="/signup/"><Signup/></Route>
        </Switch>
    )
}

export default Router;
