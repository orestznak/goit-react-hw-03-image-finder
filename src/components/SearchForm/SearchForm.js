import React, {Component} from "react";
import { FormSearch,Button,ButtonLabel,Input } from "./SearchForm.styled";
export class SearchForm extends Component {
   state = {
    searchQuery: "",
   }

   handleSearchQueryChange = e =>{
    this.setState({searchQuery: e.currentTarget.value.toLowerCase()})
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
        <FormSearch onSubmit={this.handleSubmit}>
            <Button type="submit">
                <ButtonLabel>Search</ButtonLabel>
            </Button>

            <Input
            className="input"
            name="searchQuery"
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleSearchQueryChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            
            />
        </FormSearch>
    )
   }
}