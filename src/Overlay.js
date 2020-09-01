import React from 'react'

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
                <span className="close-button">X</span><br />
                <h1>A</h1>
                {console.log(this.props.isOpenned)}
            </div>
        )
    }
}

export default Overlay