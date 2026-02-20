import './Searchbar.css'
import { Component } from 'react'

export default class Searchbar extends Component {
    state = {
        filter: ''
    }

    handelCheng = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        this.props.infoFilter(this.state.filter)
    }

    render() {
        console.log(this.state.filter)
        return (
            <>
                <header className="Searchbar">
                    <form className="SearchForm" onSubmit={this.handelSubmit}>
                        <button type="submit" className=".SearchForm-button">
                            <span className="button-label">Search</span>
                        </button>

                        <input
                            className="SearchForm-input"
                            type="text"
                            autoComplete="off"
                            autofocus
                            placeholder="Search images and photos"
                            name='filter'
                            onChange={this.handelCheng}
                        />
                    </form>
                </header>
            </>
        )
    }
}

