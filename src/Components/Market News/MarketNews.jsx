import React, { useEffect } from 'react';
// import './MarketNews.js'
import './marketnews.css'
import AuthenticatedHeader from '../Header/AuthenticatedHeader.jsx'

function MarketNews() {
   
  useEffect(() => {
    // Call the provided function when the component mounts
    (function(w, d, t, h, l, b, p, o, a, m) {
        w['TraducationFxObject'] = o;
        w[o] = w[o] || function() {
            w[o].h = h;
            w[o].b = b;
            return (w[o].q = w[o].q || []).push(arguments)
        };
        a = d.createElement(t);
        m = d.getElementsByTagName(t)[0];
        a.async = 1;
        a.src = h + l + '?b=' + b + '&p=' + p.join(',');
        a.crossorigin = 'use-credentials';
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://embedder.traducationfx.com/', 'embedder.js', 'Y0UT3D8srRZ', ['modal'], 'TraducationFX');

    TraducationFX('settings', 'configure', {
        langCode: 'en',
        traderStateKey: 'eP7gFXypBzC'
    });

    TraducationFX('articles', 'configure', {
        containerId: 'market-news',
        category: 'marketNews',
        hideSnippets: false
    });

    TraducationFX('articles', 'embed');

    TraducationFX('plugin.modal.articleLocked', 'configure', {
        body: 'Upgrade to gain access.',
        primaryButton: {
            text: 'Upgrade',
            link: '/#packages'
        }
    });
}, []); 

  return (
    <>
    
    {/* <AuthenticatedHeader/> */}
    
    <div className='text'>
            <h1 className='text-market'>Market News</h1>
        </div>
        
        <div>
            <div id="market-news" className='market'>
            </div>
        </div>
    
    
    </>
  )
}

export default MarketNews