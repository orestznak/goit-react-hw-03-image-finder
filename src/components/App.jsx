import React, {Component} from "react";

import { SearchBar } from "./SearchBar/SearchBar";
import { Box } from "./Box";
// import { ImageGallery } from "./ImageGallery/ImageGallery";


export class App extends Component {
  state = {
    searchQuery: "",
  }
  handleFormSubmit = searchQuery =>{
    this.setState({searchQuery});
  }
  
  render() {
    return(
  
      <Box 
        display="grid"
        gridTemplateColumns="1fr"
        gridGap="16px"
        paddingBottom="24px">

        <SearchBar onSubmit={this.handleFormSubmit}/>
        {/* <ImageGallery/> */}

      </Box>
  
    )
  
  }
};
