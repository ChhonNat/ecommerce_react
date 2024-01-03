import React from 'react';

const CarouiselProductDetail = (props) => {
    const {
        imgs
    } = props;

    return (
        <div className="col-md-7 mt-4">
            <div id="productCarouselImage" className="carousel slide">
                <div className="carousel-inner">
                    {
                        imgs?.map((item, index) => {
                            const { id, img, alt } = item;
                            return (
                                <div key={id ?? index} className={index == 0 ? "carousel-item active" : "carousel-item"}>
                                    <img src={img} className="d-block w-100" alt={alt} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="carousel-indicators">
                    {
                        imgs?.map((item, index) => {
                            const { id, img, alt } = item;
                            return (
                                // <button key={id ?? index} type="button" data-bs-target="#productCarouselImage" data-bs-slide-to="4" aria-label="Slide 5">
                                <button
                                    key={id ?? index}
                                    type="button"
                                    data-bs-target="#productCarouselImage"
                                    data-bs-slide-to={index}
                                    className={index == 0 ? "active" : ""}
                                    aria-current={index == 0 && "true"}
                                    aria-label={`Slide ${id}`}
                                >
                                    <img src={img} className="d-block w-100" alt={alt} />
                                </button>
                            )
                        })
                    }
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#productCarouselImage" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#productCarouselImage" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    )
}

export default CarouiselProductDetail;