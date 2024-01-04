import React from 'react';
import CountItem from '../../product-detail/CountItem';
import './CardProductOrder.css';

const CardProductOrder = (props) => {
    const {
        link,
        img,
        alt,
        title,
        date,
        price,
        shipping,
        count,
        increment,
        decrement
    } = props;
    
    return (
        <>
            <div className="card">
                <a href={link ?? "#"}>
                    <img className="img" src={img ?? ""} alt={alt ?? ""} />
                </a>
                <div className="textBox">
                    <div className="textContent">
                        <a href='#' className="h1">{title ?? "Title"}</a>
                        <span className="span">{date ?? "Jan/5/23"}</span>
                    </div>
                    <p className="p">US{price ?? "$0"}</p>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}
                    >
                        <div className="shipping">{shipping ?? "shiping..."}</div>
                        <div>
                            <CountItem
                                decrement={decrement}
                                count={count}
                                increment={increment}
                                styleCount={{
                                    height: '42px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}
                            />
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProductOrder;