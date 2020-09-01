import React from 'react'
import image1 from './1.webp'

class Main extends React.Component {

    handleClickCategory(e) {
        const men = document.getElementById("men")
        const women = document.getElementById("women")
        const womenProduct = women.classList.contains("women-product")
        const products  = document.querySelectorAll(".product")
        const arrayProducts = Array.from(products)
        // const product = arrayProducts.map( prod => {
        //     return prod.classList.contains('men-product')
        // })
        if(e.target.id === "men") {
            men.classList.add('active')
            women.classList.remove('active')
            arrayProducts.map( prod => {
                prod.classList.contains('women-product') ? prod.classList.add('invisible') : prod.classList.remove('invisible')
            })
        } else {
            women.classList.add('active')
            men.classList.remove('active')
            arrayProducts.map( prod => {
                prod.classList.contains('men-product') ? prod.classList.add('invisible') : prod.classList.remove('invisible')
            })
        }
    }

    handleClickAddCart(e) {
        const addToCartButton = document.querySelector('.add-to-cart')
        console.log(e.target)
    }
 
    render() {
        return(
            <section className="main">
                <div className="men-women">
                    <span onClick={this.handleClickCategory} className="category-gender active" id="men">Men's</span>
                    <span onClick={this.handleClickCategory} className="category-gender" id="women">Women's</span>
                </div>
                <div className="products-grid">
                    <div className="product men-product">
                        <div className="img-container">
                            <img className="product-img" src={image1} alt="" />
                            <span className="add-to-cart" onClick={this.handleClickAddCart}>Add to cart</span>
                        </div>
                        <h2>The Royale Blanco White</h2>
                        <h4>Rp400.000</h4>
                    </div>
                    <div className="product men-product">
                        <div className="img-container">
                            <img className="product-img" src={image1} alt="" />
                            <span className="add-to-cart" onClick={this.handleClickAddCart}>Add to cart</span>
                        </div>
                        <h2>The Royale Blanco White</h2>
                        <h4>Rp400.000</h4>
                    </div>
                    <div className="product men-product">
                        <div className="img-container">
                            <img className="product-img" src={image1} alt="" />
                            <span className="add-to-cart" onClick={this.handleClickAddCart}>Add to cart</span>
                        </div>
                        <h2>The Royale Blanco White</h2>
                        <h4>Rp400.000</h4>
                    </div>
                    <div className="product women-product invisible">
                        <div className="img-container">
                            <img className="product-img" src={image1} alt="" />
                            <span className="add-to-cart" onClick={this.handleClickAddCart}>Add to cart</span>
                        </div>
                        <h2>The Royale Blanco White</h2>
                        <h4>Rp400.000</h4>
                    </div>
                    <div className="product women-product invisible">
                        <div className="img-container">
                            <img className="product-img" src={image1} alt="" />
                            <span className="add-to-cart" onClick={this.handleClickAddCart}>Add to cart</span>
                        </div>
                        <h2>The Royale Blanco White</h2>
                        <h4>Rp400.000</h4>
                    </div>
                </div>
            </section>
        )
    }
}

export default Main