import React, { useContext, useEffect, useState } from 'react'
import "./SideBar.css";
import { assets } from "../../assets/assets/"
import { GeminiContext } from '../../Context/context';

const SideBar = () => {

  const [extended, setExtended] = useState(false);
  const {prevInputs , onSent,setrecentInput ,newChat } = useContext(GeminiContext);

  const recentClickHandler=async(value)=>{
    setrecentInput(value);
     await onSent(value);
  }
  
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtended((prev)=>!prev)} src={assets.menu_icon} alt="" />
        <div className="new-chat" onClick={()=>newChat()}>
          <img src={assets.plus_icon} alt="" />
          {
            extended ? <p>New Chat</p> : null
          }
        </div>
        {
          extended ?
            <div className="recent">
              <p className="recent-title">Recent</p>
              <div className='recent-entriesparent'>
              {
                prevInputs.map((item , index)=>{
                  return (
                    <div onClick={()=>recentClickHandler(item)} className='recent-entry' key={index}>
                        <img src={assets.message_icon} alt="" />
                        <p>{item.slice(0,15)}...</p>
                    </div>
                  )
                })
              }
            </div>
        </div>
            : null
        }
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {
            extended ?
              <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {
            extended ?
              <p>Activity</p> : null}

        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ?
            <p>Settings</p>
            : null}
        </div>
      </div>
    </div>
  )
}

export default SideBar
