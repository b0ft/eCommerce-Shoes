import React from 'react'
// import image1 from './1.webp'

class Overlay extends React.Component {
    componentDidMount() {
        const component = document.querySelector('.overlay')
        // component.classList.add('invisible')
        // console.log(this.props.isOpenned)
        // this.props.isOpenned != true ? component.classList.add('invisible') : null
        // if(this.props.isOpenned != true){
        //     console.log('tes')
        // }
    }
    render() { 
        return (
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
                {/* </div>
                <div className="main-overlay"> */}
                    {/* <div className="cart-item">
                        <img className src={image1} alt="" />
                    </div> */}
                    {this.props.products.map(item => {
                        return(
                            item.inCart && 
                                <>
                                    <img className="cart-img" src={require(`${item.img}`)} alt="" />
                                    <h5>{item.title}</h5>
                                    <h5>Rp{item.price.toLocaleString("id-ID")}</h5>
                                    <h5><span className="up">&uarr;</span><br/>{item.count}<br/><span className="down">&darr;</span></h5>
                                    <span className="remove" onClick={() => this.props.handleClickRemove(item.id)}>Remove</span>
                                    <h5> {item.total} </h5>
                                </> 
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Overlay