import React, { Component } from "react";

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styled";

export class ImageGallery extends Component {
    state= {

    }

    render() {
        
        return(
            <ImageGalleryList>   
                <ImageGalleryItem/>
            </ImageGalleryList>   
        )
    }
    
}

