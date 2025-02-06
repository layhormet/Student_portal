import React from "react";
interface CardFromProps {
    title:string;
    
}
const CardFrom:  React.FC<CardFromProps> = ({title}) =>{
    return(
        <button className="bg-[#1B0D6C] text-white px-4 py-2 rounded-r-[20px] ">
            <h2 className="text-center">{title}</h2>
        </button>
    )
}
export default CardFrom;