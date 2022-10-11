import React from 'react'
import company from '../assets/company.json'
import Lottie from "react-lottie"

function Home() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: company,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div id="home-page">
            <div className='row'>
                <div id="text-area" className="col-lg-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum reprehenderit, ut quod illum molestias maiores quibusdam eos nesciunt autem distinctio at. Itaque eveniet possimus nemo neque, impedit dolorem consectetur officiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe architecto libero in perferendis provident velit cupiditate quasi harum dolorum, laudantium aliquam ea ipsum tempora iste magni! Magni dicta iure officia! lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique aliquid dolorem saepe facilis quidem deleniti iure commodi doloribus reprehenderit in odit cupiditate asperiores, voluptate voluptatum, voluptatibus illum? Ratione, facilis.</div>
                <div id="lottie" className="col-lg-6">
                    <Lottie options={defaultOptions}
                        height={650}
                        width={600}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home