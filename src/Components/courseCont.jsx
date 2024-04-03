import React from 'react'
import './css/courseCont.css'
import { useNavigate } from 'react-router-dom';

function CourseCont(props) {
    const navigate = useNavigate();
    const handleRoute=()=>{
        // handle route
        navigate(props.route, {state: {title: props.title}});
    }
  return (
    <>
        <div className='courseCont' onClick={handleRoute}>
            <img  alt='cont image' src={props.imgUrl}/>
            <p>{props.title}</p>
        </div>
    </>
  )
}

export default CourseCont