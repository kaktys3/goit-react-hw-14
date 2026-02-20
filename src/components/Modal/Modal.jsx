import './Modal.css'
import { Component } from 'react'

export default class Modal extends Component {
    render() {
        const {modalImg} = this.props
        console.log(modalImg.length)
        return (
            <>
                <div className="Overlay" style={modalImg.length > 0 ?  {display: 'flex'} : {display: 'none'}}>
                    <div className="Modal">
                        <img src={modalImg} alt="" />
                    </div>
                </div>
            </>
        )
    }
}

