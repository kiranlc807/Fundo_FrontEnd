// import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginForm from './component/Login';
import SignupForm from './component/Signup';
import DashboardLayout from './component/DashBoardLayout';
import Notes from './component/Notes';
import ArchiveContainer from './component/ArchiveContainer';
import TrashContainer from './component/TrashContainer';


function App() {

  const AppRoute = createBrowserRouter([
    {
      path: '/',
      element: <LoginForm />,
      // errorElement:
    },
    {
      path: '/signup',
      element: <SignupForm />
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children:[
        {path: "notes", index: true,element: <Notes />},
        {path: "archive", element: <ArchiveContainer/>},
        {path: "trash", element: <TrashContainer/>}
      ]
    }
  ])
  return (<RouterProvider router={AppRoute} ></RouterProvider>);
}

export default App;
