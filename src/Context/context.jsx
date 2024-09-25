import { createContext, useState } from "react";
import run from "../Config/Gemini";

export const GeminiContext = createContext();

const GeminiContextProvider =(props)=>{

    const [input ,setInput] = useState("");
    const [recentInput ,setrecentInput] = useState("");
    const [prevInputs ,setPrevInputs] = useState([]);
    const [loading , setloading] = useState(false);
    const [showResult , setShowResult] = useState(false);//weather result fetched or not
    const [resultData , setresultData] = useState(""); // Updating fetched result

    const onSent = async(prompt)=>{

        setresultData("");
        setloading(true);
        setShowResult(true);
        setrecentInput(input);

        console.log("Generation Started");
        
        const response = await run(input);

        console.log(response);

        setresultData(response);
        setloading(false);
        setInput("");
        console.log("Generation finished");


    }

    const ContextValue = {
        input , setInput , recentInput , setrecentInput , prevInputs ,setPrevInputs , loading  , showResult  , resultData  , onSent , 
    }

    return <GeminiContext.Provider value={ContextValue}>{props.children}</GeminiContext.Provider>
}

export default GeminiContextProvider;