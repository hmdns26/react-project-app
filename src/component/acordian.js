import React, { useState } from "react";

const Accordian =({items})=>{
    const [activeIndex,setactiveIndex]=useState(null)

    const renderitem = items.map((item,index)=>{
        const active =index===activeIndex ? 'active' : '' ;
        return <div key={item.title}>
            <div 
                onClick={()=>{setactiveIndex(index)}}
                className={`title ${active}`}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`} >
                <p>{item.content}</p>
                
            </div>
        </div>
    });
    return <div className="ui styled accordian" >{renderitem}</div>
};

export default Accordian;