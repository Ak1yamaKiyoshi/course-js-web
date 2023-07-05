import { Route, 
    BrowserRouter as Router,
    createBrowserRouter,
    RouterProvider, 
} from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<>
            <Navigation/> 
            <Login/>,
        </> 
    }, {
        path:"/home",
        element: <>
        <Navigation/>
        <Home/>,
        </> 
    },

]);
