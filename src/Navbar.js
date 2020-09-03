import React from 'react'

class Navbar extends React.Component {
    componentDidMount() {
        
        const header = document.querySelector(".nav")
        const sticky = header.offsetTop
        
        const scrollFixed = () => {
            window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky")
        }
        window.onscroll = function() {scrollFixed()}
    }

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