import { Component } from 'react';
import AddItem from './AddItem';
import Home from './Home';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './Cart';
import Orders from './Order';

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    
    return (
      <Component
        navigate={navigate}
        {...props}
        />
    );
  };
  
  return Wrapper;
};

class Main extends Component {
    render(){
        return (
            <div>
                <Routes>
                    <Route path='/home' exact element={<Home/>} />
                    <Route path='/addItem' element={<AddItem/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/orders' element={<Orders/>} />
                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            </div>
        )
    }
}

export default withRouter(connect()(Main));