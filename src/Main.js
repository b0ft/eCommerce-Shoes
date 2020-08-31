import React from 'react'
import image1 from './1.webp'

function Main() {
    return(
        <section className="main">
            <div>
                <span className="category-gender">Men's</span>
                <span className="category-gender">Women's</span>
            </div>
            <div className="products-grid">
                <div className="product">
                    <div className="img-container">
                        <img className="product-img" src={image1} alt="" />
                        <span className="add-to-cart">Add to cart</span>
                    </div>
                    <h2>The Royale Blanco White</h2>
                    <h4>Rp400.000</h4>
                </div>
                <div className="product">
                    <div className="img-container">
                        <img className="product-img" src={image1} alt="" />
                        <span className="add-to-cart">Add to cart</span>
                    </div>
                    <h2>The Royale Blanco White</h2>
                    <h4>Rp400.000</h4>
                </div>
                <div className="product">
                    <div className="img-container">
                        <img className="product-img" src={image1} alt="" />
                        <span className="add-to-cart">Add to cart</span>
                    </div>
                    <h2>The Royale Blanco White</h2>
                    <h4>Rp400.000</h4>
                </div>
                <div className="product">
                    <div className="img-container">
                        <img className="product-img" src={image1} alt="" />
                        <span className="add-to-cart">Add to cart</span>
                    </div>
                    <h2>The Royale Blanco White</h2>
                    <h4>Rp400.000</h4>
                </div>
                <div className="product">
                    <div className="img-container">
                        <img className="product-img" src={image1} alt="" />
                        <span className="add-to-cart">Add to cart</span>
                    </div>
                    <h2>The Royale Blanco White</h2>
                    <h4>Rp400.000</h4>
                </div>
            </div>
        </section>
    )
}

export default Main