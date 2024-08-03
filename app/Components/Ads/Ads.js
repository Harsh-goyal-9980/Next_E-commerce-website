import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://img.freepik.com/free-photo/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai_188544-10148.jpg" },
    { url: "https://img.freepik.com/free-photo/headphones-displayed-against-dark-background_157027-4466.jpg?size=626&ext=jpg&ga=GA1.1.2096817775.1722057367&semt=sph" },
    { url: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039340.jpg?size=626&ext=jpg&ga=GA1.1.2096817775.1722057367&semt=sph" },
    
];
const Ads = () => {
    return (
        <>
            <div className='p-10 bg-gray-300'>
                <div>
                    <SimpleImageSlider
                        width={1450}
                        height={720}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
            </div>
        </>
    );

}

export default Ads

