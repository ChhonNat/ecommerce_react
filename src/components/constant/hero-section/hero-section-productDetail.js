import React from 'react';
import './hero.css';


const HeroSectionProductDetail = (props) => {
    const {
        backGround,
        title
    } = props;
    return (
        <main className="content_title">
            <div className="wrapper">
                <div className="background">
                    <img src={backGround} alt="" />
                </div>
                <div className="container-xl title text-center">
                    <h1>{title ?? "Title"}</h1>
                </div>
            </div>
        </main>
    );
};

export default HeroSectionProductDetail;
