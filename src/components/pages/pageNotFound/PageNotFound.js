import React from 'react';
import pageImage from './../../../assets/pageNotFound/273799-P5XL31-715.jpg';

const PageNotFound = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${pageImage})`,
                    height: "100vh",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
            </div>
        </>
    )
}

export default PageNotFound;