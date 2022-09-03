import {
    SearchBarSection,
    SearchForm,
    SearchBtn,
    Input,
  } from './SearchBar.styled';
  import { AiOutlineSearch } from 'react-icons/ai';
  import PropTypes from 'prop-types';
  
  export const SearchBar = ({ onSubmit }) => {
    const handleSubmit = e => {
      e.preventDefault();
      const request = e.target.request.value;
      onSubmit(request);
    };
  
    return (
      <SearchBarSection>
        <SearchForm onSubmit={handleSubmit}>
          <SearchBtn type="submit">
            <AiOutlineSearch />
          </SearchBtn>
          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="request"
          ></Input>
        </SearchForm>
      </SearchBarSection>
    );
  };
  
  SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };