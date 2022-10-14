import React, { useEffect } from 'react'
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
                <div id="text-area" className="col-lg-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum reprehenderit, ut quod illum molestias maiores quibusdam eos nesciunt autem distinctio at. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptas dolore perspiciatis eveniet, nisi dignissimos dolorum ex numquam aliquam, at maxime culpa explicabo consequuntur. Quasi eveniet odio eius ipsam dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div id="lottie" className="col-lg-5">
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