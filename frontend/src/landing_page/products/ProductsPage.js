import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductsPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media/image/kite.png"
        productName="Kite"
        productDescription="Kite is a sleek investment and trading platform built for modern times and sensibilities. Ground breaking innovations presented with excellent usability, investing in the stock markets has never been this easy. Really."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
       imageURL="media/image/console.png"
        productName="Console"
        productDescription="The central dashbord for your Zerodha account. Gain insight into your trades and investment with in-depth reports and visualizations.
      "
      learnMore=""
      
      />
       <LeftSection
        imageURL="media/image/coin.png"
        productName="Coin"
        productDescription="Buy derect mutual funds online, commission-free, delivered derectly to your Demat account. Enjoy the investment exprience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
       <RightSection
        imageURL="media\image\kiteconnect.png"
        productName="Kite connect API"
        productDescription="Build powerful trading platforms and expriences with our super simple HTTP/JSON APIs. if you are a startup, build your investment app and showcase it to our clientbase"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
       <LeftSection
        imageURL="media/image/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grsp, collection of stock market lessons with in depth coverage and illustration. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

<p className="text-center mt-5">Want to know more
  about our technology stack? Check out the Zerodha.tech clog.
</p>
      <Universe />
    </div>
  );
}

export default ProductsPage;
