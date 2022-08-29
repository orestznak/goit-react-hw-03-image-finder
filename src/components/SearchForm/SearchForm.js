import React, {Component} from "react";
import './SearchForm.module.css';

export class SearchForm extends Component {
   state = {
    searchQuery: "",
   }

   handleSearchQueryChange = e =>{
    this.setState({serchQuery: e.currentTarget.value.toLowerCase()})
   }
   render() {
    return(
        <form className="SearchForm">
            <button type="submit" className="button">
                <span className="button-label">Search</span>
            </button>

            <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.handleSearchQueryChange}
            />
        </form>
    )
   }
}