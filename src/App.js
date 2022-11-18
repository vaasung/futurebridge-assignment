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
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
