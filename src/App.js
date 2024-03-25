import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
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
}

export default App;
