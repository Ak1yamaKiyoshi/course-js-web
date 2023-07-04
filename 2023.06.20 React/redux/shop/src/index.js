import React from 'react';
import ReactDOM from 'react-dom/client';



import './index.css';
import { 
  BrowserRouter,
  RouterProvider, 
} from 'react-router-dom';
import { router } from './router';
import store from './redux/store';
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// https://react-redux.js.org/tutorials/quick-start