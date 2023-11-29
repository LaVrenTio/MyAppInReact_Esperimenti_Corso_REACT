

import { useState } from "react";

function PersonCard({name,lastname,cf,phone,imgUrl}){

  
    const [count,setCount]=useState(0);

    
    return(
        <div className="card flex-row space-x-10 bg-zinc-950 rounded-md">
            <div>

            <img  className="w-auto  rounded-md" src={imgUrl} alt=""></img>
            </div>
           
            <div className=" flex flex-row overflow-hidden ">
                <h2 className="max-w-full overflow-hidden overflow-ellipsis ">{name}</h2>
                <h2 className="max-w-full overflow-hidden overflow-ellipsis">{lastname}</h2>
            </div>
        
            <div className=" flex flex-row space-x-3 justify-items-stretch ">
                
            <h3 className=" flex flex-row space-x-3 justify-items-stretch ">
                {cf}</h3>
                <h3>{phone}</h3>
            </div>        
        </div>
    );
}
export default PersonCard;