import React from 'react';
import  ReactDOM  from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';
import Welcome from './check/Welcome';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Welcome name="saikumar"></Welcome>
    </React.StrictMode>
    
)