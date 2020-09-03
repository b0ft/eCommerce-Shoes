import React from 'react'

class Overlay extends React.Component {

    render() { 
        return (
            this.props.totalToPay === 0 ? 
            <div className={`overlay ${this.props.isOpenned !== true && "invisible"}`}>
                <span className="close-button" onClick={this.props.handleCloseOverlay}>X</span><br />
                <h1 className="title">Your cart is currently empty.</h1> 
            </div>
            : 
            <div className={`overlay ${this.props.isOpenned !== true && "invisible"}`}>
                <span className="close-button" onClick={this.props.handleCloseOverlay}>X</span><br />
                <h1 className="title">Your Cart</h1>
                <div className="cart-container">
                    <h4 className="cart-title">Products</h4>
                    <h4 className="cart-title">Name</h4>
                    <h4 className="cart-title">Price</h4>
                    <h4 className="cart-title">Quantity</h4>
                    <h4 className="cart-title">Remove</h4>
                    <h4 className="cart-title">Total</h4>
                    {this.props.products.map(item => {
                        return(
                            item.inCart && 
                                <>
                                    <img className="cart-img" src={require(`${item.img}`)} alt="" />
                                    <h5>{item.title}</h5>
                                    <h5>Rp{item.price.toLocaleString("id-ID")}</h5>
                                    <h5><span className="up" onClick={() => this.props.handleClickUp(item.id)}>&uarr;</span><br/><br/>{item.count}<br/><br/><span className="down" onClick={() => this.props.handleClickDown(item.id)}>&darr;</span></h5>
                                    <span className="remove" onClick={() => this.props.handleClickRemove(item.id)}>Remove</span>
                                    <h5>Rp{item.total.toLocaleString('id-ID')}</h5>
                                    
                                </> 
                        )
                    })}
                </div>
                <div className="cart-footer">
                    <span className="clear-button" onClick={this.props.handleClearCart}>Clear Cart</span><br /><br />
                    <span className="total-cart">Total : Rp{this.props.totalToPay.toLocaleString('id-ID')}</span>
                </div>
            </div>
        )
    }
}

export default Overlay