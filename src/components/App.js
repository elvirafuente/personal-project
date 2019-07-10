import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './Header';
import Main from './Main';
// import Decoration from './Decoration'

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Decoration /> */}
        <div className="page__container">
          <Header />
          <Main />
        </div>
      </Fragment>

    )
  }
}

export default App;
