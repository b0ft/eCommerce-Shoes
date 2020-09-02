import React from 'react'

class Main extends React.Component {

    // handleClickCategory(e) {
    //     const men = document.getElementById("men")
    //     const women = document.getElementById("women")
    //     const womenProduct = women.classList.contains("women-product")
    //     const products  = document.querySelectorAll(".product")
    //     const arrayProducts = Array.from(products)
    //     // const product = arrayProducts.map( prod => {
    //     //     return prod.classList.contains('men-product')
    //     // })
    //     if(e.target.id === "men") {
    //         men.classList.add('active')
    //         women.classList.remove('active')
    //         arrayProducts.map( prod => {
    //             prod.classList.contains('women-product') ? prod.classList.add('invisible') : prod.classList.remove('invisible')
    //         })
    //     } else {
    //         women.classList.add('active')
    //         men.classList.remove('active')
    //         arrayProducts.map( prod => {
    //             prod.classList.contains('men-product') ? prod.classList.add('invisible') : prod.classList.remove('invisible')
    //         })
    //     }
    // }
 
    render() {
        // const {id, title, img, price, inCart} = this.props.products
        // console.log(this.props.products)
        return(
            <main>
                {/* <div className="men-women">
                    <span onClick={this.handleClickCategory} className="category-gender active" id="men">Men's</span>
                    <span onClick={this.handleClickCategory} className="category-gender" id="women">Women's</span>
                </div> */}
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