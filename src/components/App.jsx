import React, {Component} from "react";
import './App.module.css'

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";


export class App extends Component {
  state = {

  }
  
  render() {
    return(
  
      <div>
        <Searchbar/>
        <ImageGallery/>

      </div>
  
    )
  
  }
};
