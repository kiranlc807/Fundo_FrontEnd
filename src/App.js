// import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginForm from './component/Login';
import SignupForm from './component/Signup';


// const AppRoute = createBrowserRouter([
//   {
//     path:'/',
//     element:<LoginForm/>
//   },
//   {
//     path:'/signup',
//     element:<SignupForm/>
//   }
// ])
function App() {
  const AppRoute = createBrowserRouter([
    {
      path:'/',
      element:<LoginForm/>
    },
    {
      path:'/signup',
      element:<SignupForm/>
    }
  ])
  return (<RouterProvider router={AppRoute} ></RouterProvider>);
}

export default App;
