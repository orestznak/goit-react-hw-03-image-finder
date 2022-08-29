import React, {Component} from "react";
import './App.module.css'

// import { Searchbar } from "./Searchbar/Searchbar";
// import { ImageGallery } from "./ImageGallery/ImageGallery";
import { SearchForm } from "./SearchForm/SearchForm";


export class App extends Component {
  state = {
    searchQuery: "",
  }
  handleFormSubmit = searchQuery =>{
    this.setState({searchQuery});
  }
  
  render() {
    return(
  
      <div>
        <SearchForm onSubmit={this.handleFormSubmit}/>
        {/* <ImageGallery/> */}

      </div>
  
    )
  
  }
};
