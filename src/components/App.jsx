import React, {PureComponent} from "react";

import { SearchBar } from "./SearchBar/SearchBar";
import { Box } from "./Box";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";

import { getPictures } from "service/api";


export class App extends PureComponent {
  state = {
    page: 1,
    searchQuery: null,
    response: [],
    isLoading: false,
    showModal: null,
  }
  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ isLoading: true });
      const receivedPictures = await getPictures(searchQuery, page);
      this.setState(prevState => {
        return { response: [...prevState.response, ...receivedPictures] };
      });
      this.setState({ isLoading: false });
    }
  }

  onClickShowModal = (url, name) => {
    this.setState({ showModal: { url, name } });
  };

  onClickCloseModal = () => {
    this.setState({ showModal: null });
  };

  increasePage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  

  handleFormSubmit = searchQuery =>{
    if (this.state.searchQuery !== searchQuery) {
      this.setState({ response: [], searchQuery });
    }
    this.setState({ searchQuery });
  }
  
  render() {
    const { response, isLoading, showModal } = this.state;
    return(
  
      <Box 
        display="grid"
        gridTemplateColumns="1fr"
        gridGap="16px"
        paddingBottom="24px">

        <SearchBar onSubmit={this.handleFormSubmit}/>
        <ImageGallery>
        {response &&
            response.map(({ id, webformatURL, tags, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  onClickShowModal={this.onClickShowModal}
                  key={id}
                  originalUrl={largeImageURL}
                  url={webformatURL}
                  name={tags}
                />
              );
            })}

        </ImageGallery>

        {isLoading && <Loader />}
        {response.length > 0 && <Button loadMore={this.increasePage} />}

        {showModal && (
          <Modal
            closeModal={this.onClickCloseModal}
            url={showModal.url}
            name={showModal.name}
          />
        )}


      </Box>
  
    )
  
  }
};
