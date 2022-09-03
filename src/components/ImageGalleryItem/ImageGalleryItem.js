import React from "react";
import { GalleryItem,ImageItem } from "./ImageGalleryItem.styled";
import PropTypes from "prop-types"

export const ImageGalleryItem = ({
        onClickShowModal,
        url,
        name,
        originalUrl,
    }) => {
        function onClickHandler() {
            onClickShowModal(originalUrl, name);
        } 

    return(
        <GalleryItem onClick={onClickHandler}>
            <ImageItem src={url} alt={name} />
        </GalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClickShowModal: PropTypes.func.isRequired,
    originalUrl: PropTypes.string.isRequired,
  };