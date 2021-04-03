import React, { useState } from 'react';


const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('')
    const onSubmit = (e) => {
        e.preventDefault(); // to prevent the text in input disappear

        //TODO: make sure we call callback from parent component
        onFormSubmit(term);
    }
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}


export default SearchBar;