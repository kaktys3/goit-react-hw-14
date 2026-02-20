import './ImageGalleryItem.css'
import { Component } from 'react'

export default class ImageGalleryItem extends Component {
    render() {
        const {img, modalImg} = this.props

        return (
            <>
                <li className="ImageGalleryItem">
                    <img className='ImageGalleryItem-image' onClick={() => modalImg(img)} src={img} alt="" />
                </li>
            </>
        )
    }
}

