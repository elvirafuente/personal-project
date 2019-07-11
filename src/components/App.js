import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './Header';
import Main from './Main';
// import Decoration from './Decoration'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      menuDisplayed: false,
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event){
    console.log(event);
    this.setState( prevState => {
      return {
        menuDisplayed: !prevState.menuDisplayed,
      }
    })
  }

  render() {
    const { menuDisplayed } = this.state;
    return (
      <Fragment>
        {/* <Decoration /> */}
        <div className="page__container">
          <Header openMenu={this.openMenu} menuDisplayed={menuDisplayed}/>
          <Main />
        </div>
      </Fragment>

    )
  }
}

export default App;
