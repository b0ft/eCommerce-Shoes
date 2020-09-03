import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Overlay from './Overlay'
import { storeProducts } from './data'
import './App.css'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            isOpenned: false,
            products: storeProducts,
            totalToPay: 0
        }
        this.handleCloseOverlay = this.handleCloseOverlay.bind(this)
        this.handleClickOverlay = this.handleClickOverlay.bind(this)
        this.handleClickAddToCart = this.handleClickAddToCart.bind(this)
        this.handleClickRemove = this.handleClickRemove.bind(this)
        this.handleClickUp = this.handleClickUp.bind(this)
        this.handleClickDown = this.handleClickDown.bind(this)
        this.handleClearCart = this.handleClearCart.bind(this)
    }

    handleClickOverlay() {
        this.setState({
            isOpenned: true
        })
    }

    handleClickAddToCart(id) {
        this.setState(prevState => {

            const newProducts = prevState.products.map(item =>{
                if(item.inCart === true)
                    return item
                else if(item.id === id) {
                    item.inCart = true
                    item.count = 1
                    item.total = item.price * item.count
                    prevState.totalToPay += item.total
                }
                return item
            })
            return {
                products: newProducts
            }
        })
    }

    handleCloseOverlay() {
        this.setState({
            isOpenned: false
        })
    }

    handleClickRemove(id) {
        this.setState(prevState => {
            const newProducts = prevState.products.map(item =>{
                if(item.id === id) {
                    item.inCart = false
                    item.count = 0
                    prevState.totalToPay -= item.total
                }
                return item
            })
            return {
                products: newProducts
            }
        })
    }

    handleClickUp(id) {
        this.setState(prevState => {
            const newProducts = prevState.products.map(item =>{
                if(item.id === id) {
                    item.count += 1
                    item.total = item.price * item.count
                    prevState.totalToPay += item.price
                }
                return item
            })
            return {
                products: newProducts
            }
        })
    }

    handleClickDown(id) {
        this.setState(prevState => {
            const newProducts = prevState.products.map(item =>{
                if(item.id === id) {
                    if(item.count > 1){
                        item.count -= 1
                        item.total = item.price * item.count
                        prevState.totalToPay -= item.price
                    }
                }
                return item
            })
            return {
                products: newProducts
            }
        })
    }

    handleClearCart() {
        this.setState(() => {
            const newProducts = this.state.products.map(item =>{
                item.inCart = false
                item.count = 0
                this.setState({
                    totalToPay : 0
                })
                return item
            })
            return {
                products: newProducts
            }
        })
    }

    render() {
        return (
        <div>
            <Navbar handleClickOverlay={this.handleClickOverlay}/>
            <Header />
            <Main handleClickAddToCart={this.handleClickAddToCart} products={this.state.products}/>
            <Footer />
            <Overlay 
                isOpenned={this.state.isOpenned} 
                handleCloseOverlay={this.handleCloseOverlay}
                products={this.state.products}
                handleClickRemove={this.handleClickRemove}
                handleClickUp={this.handleClickUp}
                handleClickDown={this.handleClickDown}
                totalToPay={this.state.totalToPay}
                handleClearCart={this.handleClearCart}
            />
        </div>
        )
    }
}

export default App
