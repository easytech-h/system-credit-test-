import { createStore, combineReducers } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
//import rootReducer from './reducers';
//import AppWrapper from './appWrapper';  
import App from '../App';
import { createRoot } from 'react-dom/client';

const rootReducer = combineReducers({
    
  // Ajoutez vos réducteurs ici
});

const store = createStore(rootReducer);

function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No root element found");
}


createRoot(<AppWrapper />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default AppWrapper;
