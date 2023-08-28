import React from "react"

function Search({ onSearch }) {

    function handleChange(e) {
        const searchElement = e.target
        const searchText = searchElement.value
        onSearch(searchText)
    }
    return (
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={handleChange} />
        </div>
    );
}

export default Search;