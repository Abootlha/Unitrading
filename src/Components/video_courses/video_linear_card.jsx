import React from 'react'
import './css/video_linear_card.css'
import { useNavigate } from 'react-router-dom';

function Video_linear_card(props) {
    const navigate = useNavigate();
    const handleRoute=()=>{
        // create route
        const route=props.title.toLowerCase().replace(/\s/g, '-')
        // handle route
        navigate(route);

        if (props.onClick) {
          props.onClick();
      }
    }
  return (
    <div className='video_linear_card' onClick={handleRoute}>
        <img src={props.imgUrl} />
        <p>{props.title}</p>
    </div>
    
  )
}

export default Video_linear_card