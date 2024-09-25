import { createContext, useState } from "react";
import run from "../Config/Gemini";

export const GeminiContext = createContext();


const GeminiContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentInput, setrecentInput] = useState("");
    const [prevInputs, setPrevInputs] = useState([]);
    const [loading, setloading] = useState(false);
    const [showResult, setShowResult] = useState(false);//weather result fetched or not
    const [resultData, setresultData] = useState(""); // Updating fetched result

    const delayPara = (index, nextWord) => {
        setTimeout(function(){
            setresultData(prev=>prev+nextWord);
        } , 50*index);
    }

    const onSent = async (prompt) => {

        setresultData("");
        setloading(true);
        setShowResult(true);
        setrecentInput(input);

        console.log("Generation Started");

        const response = await run(input);
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }

        newResponse = newResponse.split("*").join("</br>");

        newResponse = newResponse.split(" ");

        for(let i=0;i<newResponse.length ; i++){
            delayPara(i , newResponse[i]+" ");
        }

        // setresultData(newResponse);
        setloading(false);
        setInput("");
        console.log("Generation finished");


    }

    const ContextValue = {
        input, setInput, recentInput, setrecentInput, prevInputs, setPrevInputs, loading, showResult, resultData, onSent,
    }

    return <GeminiContext.Provider value={ContextValue}>{props.children}</GeminiContext.Provider>
}

export default GeminiContextProvider;