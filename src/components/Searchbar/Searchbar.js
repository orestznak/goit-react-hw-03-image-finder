import React from "react"
import { SearchBarHeader } from "./SearchBar.styled"
import { SearchForm } from "components/SearchForm/SearchForm"

export const SearchBar = ({onSubmit}) => {
    return(
    <SearchBarHeader>
        <SearchForm onSubmit={onSubmit}/>
        
    </SearchBarHeader>
    )
}