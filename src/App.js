import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ReviewForm from './Components/ReviewForm/ReviewForm';

function App() {
    return (
        <div>
            <Router>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/review' element={<Review />} />
                    <Route path='/inventory' element={<Inventory />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route
                        path='/reviewform'
                        element={
                            <PrivateRoute>
                                <ReviewForm />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/placeorder'
                        element={
                            <PrivateRoute>
                                <PlaceOrder />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/login' element={<Login />} />
                </Routes>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
