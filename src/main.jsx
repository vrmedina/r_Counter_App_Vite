import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

// Import styles
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    // StrictMode is a tool for highlighting potential problems in an application.
    // Like Fragment, StrictMode does not render any visible UI.
    // It activates additional checks and warnings for its descendants.
    <StrictMode>
        {/* <HelloWorldApp /> */}
        <FirstApp title="Hola Es Titulo"/>
        {/* <CounterApp value={ 1 }/> */}
    </StrictMode>
);
