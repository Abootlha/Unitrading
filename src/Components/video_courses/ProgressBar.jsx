import React from 'react'
import { useState, useEffect } from 'react';

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const [clickedTitles, setClickedTitles] = useState(new Set());
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        // Load progress from localStorage when component mounts
        const savedProgress = localStorage.getItem('progress');
        if (savedProgress) {
            setProgress(parseFloat(savedProgress));
        }
    }, []);

    useEffect(() => {
        // Update progress value for display
        setProgressValue(Math.round(progress));
    }, [progress]);


    const handleClick = (title) => {
    
        if (!clickedTitles.has(title)) {
           
            if (progress < 100) {
           
                const newProgress = progress + 100 / titles.length;
                setProgress(Math.min(newProgress, 100));
    
         
                localStorage.setItem('progress', newProgress.toString());
    
        
                const newClickedTitles = new Set(clickedTitles);
                newClickedTitles.add(title);
                setClickedTitles(newClickedTitles);
    
                navigate(route);
            }
        }
    };
  return (
    <div>
        <progress max="100" style={{width: '100%'}} value={progress}></progress>
            <div>{progressValue}% Completed</div>

            <style>
                
        {`
        progress {
            height: 5px; /* Adjust the height as needed */
            border-radius: 5px;
        }
        
        progress::-webkit-progress-bar {
            background-color: #C5C5C5;
        }
        progress::-webkit-progress-value {
            background-color: #0B86FF;
        }
        `}
    </style>
    </div>
  )
}

export default ProgressBar