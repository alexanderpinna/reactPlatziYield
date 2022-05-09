import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/app';

//ReactDOM.render(<App />, document.getElementById('app'));

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="Home" />);