import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Overlay from './Overlay'
import './App.css'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
        isOpenned: false
    }

    this.handleClickOverlay = this.handleClickOverlay.bind(this)
  }

  handleClickOverlay() {
    //   this.setState( prevState => {
    //       this.state.isOpenned = !prevState.isOpenned
    //   })
    this.setState(prevState => {
        return this.state.isOpenned = !prevState.isOpenned
    })
  }

  render() {
    return (
      <div>
        <Navbar handleClickOverlay={this.handleClickOverlay}/>
        <Header />
        <Main />
        <Footer />
        <Overlay isOpenned={this.state.isOpenned}/>
      </div>
    )
  }
}

export default App
