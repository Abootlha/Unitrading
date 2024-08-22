import React, { useEffect } from 'react';
import './AdvancedGuideToTrading.css'

function AdvancedGuideToTrading() {
    useEffect(() => {
        // Define the function to call
        function initializeTraducationFX() {
            (function(w,d,t,h,l,b,p,o,a,m){
                w['TraducationFxObject']=o;
                w[o]=w[o]||function(){
                w[o].h=h;w[o].b=b;return (w[o].q=w[o].q||[]).push(arguments)};a=d.createElement(t),
                m=d.getElementsByTagName(t)[0];a.async=1;a.src=h+l+'?b='+b+'&amp;p='+p.join(',');
                a.crossorigin='use-credentials';m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://embedder.traducationfx.com/','embedder.js','Y0UT3D8srRZ',['modal'],'TraducationFX');

            TraducationFX('settings', 'configure', {
                langCode: 'en',
                traderStateKey: 'eP7gFXypBzC'
            });

            TraducationFX('book', 'configure', {
                containerId: 'advanced-ebooks',
                bookSlug: 'advanced-guide-to-trading'
            });

            TraducationFX('book', 'embed');
        }

        // Call the function when the component mounts
        initializeTraducationFX();

        // Clean up function (if necessary)
        return () => {
            // Any cleanup code here
        };
    }, []);
  return (
    <>

        <div className='text'>
            <h1 className='advanced-ebooks'>Advanced Guide to Trading eBook</h1>
        </div>
        
        <div>
            <div id="advanced-ebooks" className='ebooks'>
            </div>
        </div>
    </>
  ); 
}

export default AdvancedGuideToTrading