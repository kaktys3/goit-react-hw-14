import './ImageGallery.css'
import { Component, Children } from 'react'

export default class ImageGallery extends Component {
    render() {
        const { children } = this.props
        return (
            <>
                <ul className="ImageGallery">
                    {children}
                </ul>
            </>
        )
    }
}

