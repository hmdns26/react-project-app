import React from "react";
import Accordian from "./component/acordian";
import Search from "./component/search";

const App = () =>{
    const items=[
        {
            title:'what is react?',
            content:'React JS is an open-source JavaScript library for building user .'
        },
        {
            title:'what ahppend?',
            content:'it s ok '
        },
        {
            title:'hello world',
            content:'hiihihiih'
        }
    ];
    return <div>
            <Search />
        </div>;
};
export default App;