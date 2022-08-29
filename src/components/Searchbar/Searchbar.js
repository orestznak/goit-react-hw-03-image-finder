import React from "react"
import './Searchbar.module.css'
import { SearchForm } from "components/SearchForm/SearchForm"

export const Searchbar = ({onSubmit}) => {
    return(
    <header className="Searchbar">
        <SearchForm />
        
    </header>
    )
}