import React from 'react';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainor from './components/MainContainor';
import WatchPage from './components/WatchPage';

const approuter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainor />
    },
    {
      path: "/watch",
      element: <WatchPage/>
    }
  ]

}])

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  );
}

export default App;
