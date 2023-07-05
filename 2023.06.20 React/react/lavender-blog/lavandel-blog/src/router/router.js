import { Route, 
    BrowserRouter as Router,
    createBrowserRouter,
    RouterProvider, 
} from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home';

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Login/>,
    }, {
        path:"/home",
        element: <Home/>,
    },

]);
