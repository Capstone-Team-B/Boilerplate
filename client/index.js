import React from 'react';
import store from './redux/store/configureStore';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from '../App';
import { config, executeUserCrudOperations } from './utils/userCrud';

config();
executeUserCrudOperations();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    {/* <PersistGate> */}
        <Router>
        <App />
        </Router>
    {/* </PersistGate> */}
  </Provider>
);
