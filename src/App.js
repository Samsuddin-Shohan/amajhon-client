import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path='/'>
                        <Shop></Shop>
                    </Route>
                    <Route path='/shop'>
                        <Shop></Shop>
                    </Route>
                    <Route path='/review'>
                        <Review></Review>
                    </Route>
                    <Route path='/Inventory'>
                        <Inventory></Inventory>
                    </Route>
                    <Route path='/login'>
                        <Login></Login>
                    </Route>
                    <Route path='/register'>
                        <Register></Register>
                    </Route>
                    <PrivateRoute path='/placeorder'>
                        <PlaceOrder></PlaceOrder>
                    </PrivateRoute>
                    <Route path='*'>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
