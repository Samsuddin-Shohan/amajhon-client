import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';

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
                </Switch>
            </Router>
        </div>
    );
}

export default App;
