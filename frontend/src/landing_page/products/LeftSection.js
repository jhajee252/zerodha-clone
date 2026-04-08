import React from 'react'

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}
) {
    return ( 
        <div className='container mt-5'>
           <div className='row'>
            <div className='col-6 p-5'>
              <img src={imageURL}/>
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href={tryDemo}>tryDemo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft: "89px"}}>learnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='mt-3'>
                   <a href={googlePlay} ><img src="media/image/googlePlayBadge.svg" alt="Google Play"/>
                    
                   </a>
                   <a href={appStore}> <img src="media\image\appstoreBadge (1).svg" alt="App Store"/>
                    
                   </a>
                </div>
            </div>
            
           </div>
        </div>
     );
}

export default LeftSection;