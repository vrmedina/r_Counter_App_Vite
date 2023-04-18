import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    // StrictMode is a tool for highlighting potential problems in an application.
    // Like Fragment, StrictMode does not render any visible UI.
    // It activates additional checks and warnings for its descendants.
    <StrictMode>
        <HelloWorldApp />
    </StrictMode>
);
