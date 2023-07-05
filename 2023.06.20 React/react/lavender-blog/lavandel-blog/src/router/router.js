import { Route, 
    BrowserRouter as Router,
    createBrowserRouter,
    RouterProvider, 
} from 'react-router-dom';
import Login from '../Login/Login';

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Login/>,
    }, {
        path:"/a",
        element: <></>,
    },

]);
