import React, { useEffect } from 'react';
import './BeginerGuideToTrading.css';

function BeginerGuideToTrading() {
  useEffect(() => {
    // Function provided by the script
    (function(w,d,t,h,l,b,p,o,a,m){
      w['TraducationFxObject']=o;
      w[o]=w[o]||function(){
        w[o].h=h;w[o].b=b;return (w[o].q=w[o].q||[]).push(arguments)
      };
      a=d.createElement(t),
      m=d.getElementsByTagName(t)[0];
      a.async=1;a.src=h+l+'?b='+b+'&amp;p='+p.join(',');
      a.crossorigin='use-credentials';
      m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://embedder.traducationfx.com/','embedder.js','Y0UT3D8srRZ',['modal'],'TraducationFX');

    TraducationFX('settings', 'configure', {
      langCode: 'en',
      traderStateKey: 'eP7gFXypBzC'
    });
    TraducationFX('book', 'configure', {
      containerId: 'beginners-ebooks',
      bookSlug: 'beginners-guide-to-trading'
    });
    TraducationFX('book', 'embed');
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  return (
    <>
      {/* <AuthenticatedHeader /> */}
      <div className='text'>
            <h1 className='beginners-ebooks'>Beginner's Guide to Trading eBook</h1>
        </div>
        
        <div>
            <div id="beginners-ebooks" className='ebooks'>
            </div>
        </div>
    </>
  );
}

export default BeginerGuideToTrading;
