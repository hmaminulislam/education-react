import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Event from './components/Event/Event';
import Home from './components/Home/Home';
import News from './components/News/News';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'courses',
          element: <Courses></Courses>
        },
        {
          path: 'event',
          element: <Event></Event>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },
        {
          path: 'news',
          element: <News></News>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
