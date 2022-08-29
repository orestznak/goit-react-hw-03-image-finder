import React, {Component} from "react";
import './SearchForm.module.css';

export class SearchForm extends Component {
   state = {
    searchQuery: "",
   }

   handleSearchQueryChange = e =>{
    this.setState({serchQuery: e.currentTarget.value.toLowerCase()})
   }

   handleSubmit = e => {
    e.preventDefault();

    if(this.state.searchQuery.trim() === "") {
        return;
    }
    this.props.onSubmit(this.state.searchQuery)

    this.setState({searchQuery: ""});
   }
   

   render() {
    return(
        <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="button" >
                <span className="button-label">Search</span>
            </button>

            <input
            className="input"
            name="searchQuery"
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleSearchQueryChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            
            />
        </form>
    )
   }
}