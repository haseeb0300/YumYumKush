import React, { Component } from 'react';
import './App.css';
import AppNavigation from '../pages/navigation/AppNavigation';

import { Provider } from 'react-redux';
import store from '../store/store';

 
import '../assets/styles/base/_style.scss'
import '../assets/styles/base/_header.scss'
import '../assets/styles/base/_dashboard.scss'










class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}
export default App;