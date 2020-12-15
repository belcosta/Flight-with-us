import React from 'react'
import "./NoResults.css"
import {GoStop} from "react-icons/go"

export default function NoResults() {
    return (
        <div className="noResults">
            <h1 style={{color: "red", fontSize: "100px"}}><GoStop/></h1>
            <h1>Sorry, there is no flight available in this route... </h1>
 <p>Please, make a new search.</p>
 </div>
    )
}
