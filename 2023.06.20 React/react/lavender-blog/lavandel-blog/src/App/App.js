import './App.css';

import Login from '../Login/Login';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
//


function App() {
  const routes = useSelector((state) => state.blogRoutes.routes);
  let appRouter = createBrowserRouter([
    {path:"/login",element:<><Navigation/> <Login/></> }, 
    {path:"/home/",element: <><Navigation/><Home/></> },
    {path:"/",element: <><Navigation/><Home/></> }, 
    ...routes
  ]);  
  return (
    <RouterProvider router={appRouter} /> 
  );
}

export default App;
