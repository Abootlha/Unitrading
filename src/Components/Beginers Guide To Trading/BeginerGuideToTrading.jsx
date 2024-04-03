import React from 'react'
import './BeginerGuideToTrading.css'
import AuthenticatedHeader from '../Header/AuthenticatedHeader'

function BeginerGuideToTrading() {
  return (
    
    <>

    {/* <AuthenticatedHeader/> */}
        <div className='text'>
            <h1 className='text-ebooks'>Beginner's Guide to Trading eBook</h1>
        </div>

      <div className="trfx-ebook-panel">
        Having trouble viewing? <a href="https://files.traducationfx.com/books/wtcuniversity/en/beginners-guide-to-trading.pdf" target="_blank">Click here</a>
      </div>
      <div className="trfx-ebook-subcontainer">
        <div className="trfx-ebook-wrapper">
          <object data="https://files.traducationfx.com/books/wtcuniversity/en/beginners-guide-to-trading.pdf#view=FitB&amp;toolbar=0&amp;scrollbar=1" type="application/pdf"  className='ebooks'>          
            <embed src="https://files.traducationfx.com/books/wtcuniversity/en/beginners-guide-to-trading.pdf#view=FitB&amp;toolbar=0&amp;scrollbar=1" type="application/pdf" />
          </object>
        </div>
      </div>

    </>
  )
}

export default BeginerGuideToTrading