import React from 'react'

class Navbar extends React.Component {
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