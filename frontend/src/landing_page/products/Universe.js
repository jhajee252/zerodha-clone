import React from 'react'

function Universe() {
    return ( <div className='container mt-5'>
           <div className='row text-center'>
           <h1>The Zerodha Universe</h1>
           <p>Extend your trading and investment exprience even further with our partner platforms</p>
            
             <div className='col-4 p-3'>
              <img src="media/image/smallcaseLogo.png" style={{width:"45%"}}/>
              <p className='text-small text-muted mt-3'>Thematic ivestment platform</p>
            </div>
             <div className='col-4 p-3'>
              <img src="media/image/streakLogo.png" style={{width:"45%"}}/ >
              <p className='text-small text-muted mt-3'>Algo & strategy platform</p>
            </div>
             <div className='col-4 p-3'>
              <img src="media\image\sensibullLogo.svg" style={{width:"45%"}}/>
              <p className='text-small text-muted mt-3'>Options trading platform</p>
            </div>
            
             <div className='col-4 p-3 mt-5'>
              <img src="media\image\zerodhaFundhouse.png" style={{width:"45%"}}/>
              <p className='text-small text-muted mt-3'>Asset management</p>
            </div>
             <div className='col-4 p-3 mt-5'>
              <img src="media\image\goldenpiLogo.png"/>
              <p className='text-small text-muted mt-3'>Bonds treading platform</p>
            </div>
             <div className='col-4 p-3 mt-5'>
              <img src="media\image\dittoLogo.png"style={{width:"25%"}}/>
              <p className='text-small text-muted mt-3'>insurance</p>
            </div>
             <button className=' p-2 btn btn-primary fs-5 mb-5 '  style={{width:"15%", margin: "0 auto",}}>Signup Now</button>
           </div>
        </div> 
        );
};

export default Universe;