import React from 'react'

class Main extends React.Component {
    render() {
        return(
            <main>
                <h1 className="title-main">Our Products</h1>
                <div className="products-grid">
                    {this.props.products.map(item => {
                        return(<div className="product">
                            <div className="img-container">
                                <img className="product-img" src={require(`${item.img}`)} alt="" />
                                <span className="add-to-cart" onClick={() => this.props.handleClickAddToCart(item.id)}>{item.inCart ? "In Cart" : "Add to Cart"}</span>
                            </div>
                            <h2>{item.title}</h2>
                            <h4>Rp{item.price.toLocaleString("id-ID")}</h4>
                        </div>)
                    })}
                </div>
            </main>
        )
    }
}

export default Main