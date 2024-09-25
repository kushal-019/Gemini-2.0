import React, { useContext } from 'react'
import "./MainComp.css"
import { assets } from "../../assets/assets/"
import { GeminiContext } from '../../Context/context'

const MainComp = () => {

  const { input, setInput, recentInput, loading, showResult, resultData, onSent ,setrecentInput ,setPrevInputs }
    = useContext(GeminiContext);

    const searchSample=async(value)=>{
      setPrevInputs(prev=>[...prev ,value ])
      setrecentInput(value);
      onSent(value);
    }

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">


        {
          !showResult ?
            <>
              <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div onClick={()=>searchSample("Suggest some beautifull places to see on a upcoming road trip")} className="card" >
                  <p>Suggest some beautifull places to see on a upcoming road trip </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div onClick={()=>searchSample("Briefly summarise this concept : Urban Planning")}  className="card" >
                  <p>Briefly summarise this concept : Urban Planning</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card" onClick={()=>searchSample("Brainstrom team bonding activities for our work retreat")}>
                  <p>Brainstrom team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div onClick={()=>searchSample("improve the readability of the following code")} className="card">
                  <p>improve the readability of the following code </p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>

            : <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentInput}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {
                  loading ? <div className="loader">
                    <hr/><hr/><hr/>
                  </div>
                    : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                }

              </div>
            </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter prompt text here' name="" id="" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {
                input ? 

                <img src={assets.send_icon} onClick={() => onSent()} alt="" />
                : null
              }
            </div>

          </div>
          <p className="bottom-info">
            Gemini can make mistakes. Check important info.
          </p>
        </div>
      </div>

    </div>
  )
}

export default MainComp
