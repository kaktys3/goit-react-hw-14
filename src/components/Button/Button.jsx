import './Button.css'
import { Component } from 'react'

export default class Button extends Component {

    render() {
        const { load, none } = this.props
        return (
        <>
            <div className='Button-Box' style={none != '' ? {display: 'flex'} : {display: 'none'}}>
                <button onClick={load} className='Button'>Load more</button>
            </div>
        </>

        )
    }
}

