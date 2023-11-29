

function Card({isPolluted,name,IsAmazing,isVisited,title,imgUrl,children}){

 const eValuetionLabel=IsAmazing? "Mi è piaciuta un sacco":" Not my cup of Tea";


    return(
        <div className="card flex-wrap space-x-10 bg-zinc-950 rounded-md ">
            <div>
            <img className="w-auto  rounded-md" src={imgUrl} alt=""></img>
            </div>
                <div className=" flex flex-col ">
                    <h2 className="text-xl font-bold ">
                        {name}
                    </h2>
                    <p className=" text-xs font-thin "> 
                       {children}
                    </p>
                    {/* bellissimo modo per verificare lo stato della città inseirsco un opeatore ternario e in base alla risposta mimostra
                    l'html corretto. */}
                   <div> {isVisited? <span className="text-center text-sm" >&#x2705; Visitata</span> :   <span className="text-center  text-sm" >&#x274C; Non Ancora Visitata</span>}</div>
                    {/* un altro modo per ottenere lo stesso risultato di sopra ma non all'interno dell'html è questo */}
                   <div> <span>{isVisited? eValuetionLabel : "     "}</span></div>
                    {/* altro modo super fico molto usato è con operatore && da non intendersi come and ma come Seè vera La prima e allora 
                    ecco la seconda...guarda l'esempio se la città NON è inquinata mostro qualcosa altrimenti no */}
                    <div className="inquinata m-auto" >
                        {!isPolluted && <span style={{backgroundColor:"green"}}>Città Non inquinata</span>}
                        {isPolluted && <span style={{backgroundColor:"red"}}>Città  inquinata</span>}
                    </div>
                </div>
        </div>
    );
}

export default Card;