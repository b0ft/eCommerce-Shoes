import React from 'react'

class Navbar extends React.Component {
    // componentDidMount() {
    //     const nav = document.querySelector(".nav")
    //     const sticky = nav.offsetTop
    //     window.onscroll = () => {
    //         window.pageYOffset > sticky ? nav.classList.add("sticky") : nav.classList.remove("sticky")
    //     }
    // }

    render() {
        return(
            <nav className="nav">
                <div className="mini-nav">
                    Title
                </div>
                <div className="mini-nav"  onClick={this.props.handleClickOverlay}>
                    Cart
                </div>
            </nav>
        )
    }
    

}

export default Navbar