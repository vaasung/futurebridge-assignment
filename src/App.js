import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ViewMovie from './Components/View';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/view',
    element: <ViewMovie />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
