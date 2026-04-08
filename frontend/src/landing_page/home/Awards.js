import React from 'react'
function Awards () {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                  <img src='media/image/largestBroker.svg' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to volumes in India daily by tranding and investing in:</p>
                    <diV className='row'>
                        <div className='col-6'>
                             <ul>
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                             </ul>
                        </div>
                        <div className='col-6'>
                               <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                             </ul>
                        </div>
                      <img src='\media\image\pressLogos.png'nstyle={{width:"90%"}} />
                    </diV>
                </div>
            </div>
        </div>
     );
}

export default Awards;