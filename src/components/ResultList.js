import React from 'react';
import ResultCard from './ResultCard'

export default function ResultList(){
    return (
        <>
            <h3>List of results</h3>
            <ul>
                <li>
                    <ResultCard />
                </li>
            </ul>
        </>
    )
}