import React from 'react'

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className='container mt-5'>
           <div className='row'>
                <div className='col-6 p-5'>
                    <img src={imageURL} alt={productName}/>
                </div>

                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div>
                        {tryDemo && (
                            <a 
                              href={tryDemo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{marginRight: "20px"}}
                            >
                                Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        )}

                        {learnMore && (
                            <a 
                              href={learnMore} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                                Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        )}
                    </div>

                    <div className='mt-3'>
                        {googlePlay && (
                            <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                                <img src="media/image/googlePlayBadge.svg" alt="Google Play"/>
                            </a>
                        )}
                        {appStore && (
                            <a href={appStore} target="_blank" rel="noopener noreferrer">
                                <img src="media/image/appstoreBadge (1).svg" alt="App Store"/>
                            </a>
                        )}
                    </div>
                </div>
           </div>
        </div>
     );
}

export default LeftSection;