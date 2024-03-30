import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';



const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: '/watch',
      element: <WatchPage />
    },
    {
      path: '/demo',
      element: <>
        <Demo /><Demo2 />
      </>
    },
  ]
}]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
        {/**
       * 
      Head
      Body
       - Sidebar
         - MenuItems
       - MainContainer
         - Buttonslist
         - VideoContainer
           - VideoCard
      */}
      </div>
    </Provider>
  );
};

export default App;
