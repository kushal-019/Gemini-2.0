import React, { useContext } from 'react'
import "./MainComp.css"
import { assets } from "../../assets/assets/"
import { GeminiContext } from '../../Context/context'

const MainComp = () => {

  const { input, setInput, recentInput, loading, showResult, resultData, onSent }
    = useContext(GeminiContext);



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
                <div className="card">
                  <p>Suggest some beautifull places to see on a upcoming road trip </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p>Briefly summarise this concept : Urban Planning</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>Brainstrom team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
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
                  loading ? <div classNade="loader"></div>
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
              <img src={assets.send_icon} onClick={() => onSent()} alt="" />
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
