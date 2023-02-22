import React, { useState,useEffect } from "react";
import axios from "axios";

const Search = ()=>{

    const [term,setTerm]=useState('react');
    const  [result,setResult]=useState([]);
    console.log(result)
    useEffect(()=>{
        const search=async ()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term,
                },
            });
            setResult(data.query.search);
        };
        search();
    },[term]);
    const renderdResult = result.map((results)=>{
        return(
            <div key={results.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {results.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:results.snippet}}></span>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>SEARCH</label>
                    <input 
                    value={term}
                    onChange={(e)=>{setTerm(e.target.value)}}
                    className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
            {renderdResult}
            </div>
        </div>
        
    );
};

export default Search ;