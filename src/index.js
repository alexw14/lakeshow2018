import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './resources/css/app.css';
import Routes from './routes';
import ScrollToTop from './components/ui/scroll-to-top';
import { firebase } from './firebase';

const App = (props) => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes {...props} />
      </ScrollToTop>
    </BrowserRouter>
  )
}

firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(<App user={user} />, document.getElementById('root'));
})

