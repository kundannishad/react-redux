import React from "react";
function Home(props) {
    console.log(props)
    return (
        <div>

            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img alt="Hello" src="https://rukminim1.flixcart.com/image/312/312/l3hmwsw0/mobile/l/k/q/-original-imagehzbaw2wugme.jpeg?q=70" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>

                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home