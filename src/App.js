import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import Home from './Home';
//import About from './About';
import  Header from './common/Navbar/Header';
/*  Register Page Componenet Import */
import  Register from './components/Register/Register';
import Username from './components/Register/Username';
import Password from './components/Register/Password';
import Profile from './components/Register/Profile';
import Recovery from './components/Register/Recovery';
import Reset from './components/Register/Reset';
import PageNotFound from './components/Register/PageNotFound';
import  Carousel  from './components/carousel/Carousel';

/**  Root Routes  **/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Username></Username>
  },
  {
    path: '/Register',
    element: <Register></Register>
  },
  {
    path: '/Password',
    element: <Password></Password>
  },
  {
    path: '/Profile',
    element: <Profile></Profile>
  },
  {
    path: '/Recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/Reset',
    element: <Reset></Reset>
  },
  {
    path: '/*',
    element: <PageNotFound></PageNotFound>
  },
]);

function App() {
  return (
   <>
  <Router>
      <Header />
      <Carousel />
        <Routes>
          <Route path='/Register' exact> 
          
          </Route>
        </Routes>
    </Router>
   <main>
        <RouterProvider router={router}></RouterProvider>
   </main>
    
   
   <h1 className="text-3xl font-bold underline"> Hello </h1>
   </> 
  );
}

export default App;
