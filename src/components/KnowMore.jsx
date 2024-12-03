import React from 'react'

const KnowMore = () => {
    const boxImages = [
        {title: "Place an Order!", image: "./order-food 1.png", description: "Place order through our website or Mobile app"},
        {title: "Track Progress", image: "./food 1.png", description: "Your can track your order status with delivery time"},
        {title: "Get your Order!", image: "./order 1.png", description: "Receive your order at a lighting fast speed!"},
    ]
  return (
    <div className='knowMore'>
        <div className="header">
            <p>Know more about us!</p>
            <div className='header-options'>
                <p className='freqQuestion'>Frequent Questions</p>
                <p>Who we are?</p>
                <p>Partner Program</p>
                <p>Help & Support</p>
            </div>
        </div>

        <div className='box'>
            <div className='howWork'>
                <div className='howWorkBtn'>How does Order.UK work?</div>
                <p>What payment methods are accepted?</p>
                <p>Can I track my order in real-time?</p>
                <div>
                    <p>Are there any special discounts or</p>
                    <center>promotions available?</center>
                </div>
                <p>Is Order.UK available in my area?</p>
            </div>
            <div className='processWork'>
                <div className="order-process">
                    {boxImages.map((image, index) => (
                        <div key={index} className="step">
                        <h3>{image.title}</h3>
                        <div className="icon">
                            <img src={image.image} alt={image.title} />
                        </div>
                        <p>{image.description}</p>
                        </div>
                    ))}
                    <div className="description">
                        <p>
                        Order.UK simplifies the food ordering process. Browse through our
                        diverse menu, select your favorite dishes, and proceed to checkout.
                        Your delicious meal will be on its way to your doorstep in no time!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KnowMore