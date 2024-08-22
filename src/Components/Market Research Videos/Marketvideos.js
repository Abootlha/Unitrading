
(function(w,d,t,h,l,b,p,o,a,m){w['TraducationFxObject']=o;w[o]=w[o]||function(){
w[o].h=h;w[o].b=b;return (w[o].q=w[o].q||[]).push(arguments)};a=d.createElement(t),
m=d.getElementsByTagName(t)[0];a.async=1;a.src=h+l+'?b='+b+'&p='+p.join(',');a.crossorigin='use-credentials';m.parentNode.insertBefore(a,m)
})(window,document,'script','https://embedder.traducationfx.com/','embedder.js','Y0UT3D8srRZ',['modal'],'TraducationFX');

TraducationFX('settings', 'configure', {
    langCode: 'en'
    , traderStateKey: 'eP7gFXypBzC'
});
TraducationFX('marketResearchVideos', 'configure', {
    containerId: 'market-videos'
});
TraducationFX('marketResearchVideos', 'embed');
TraducationFX('plugin.modal.marketResearchVideoLocked', 'configure', {
    body: 'Upgrade to gain access.',
    primaryButton: {
    	text: 'Upgrade',
    	link: '/#packages'
    }
});
