import React from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/index.scss';
import { store } from './app/store';
import { Provider } from 'react-redux';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App tab="home" />
    </Provider>, 
)
