import React from 'react';

const CountItem = (props) => {
    const {
        decrement,
        count,
        increment,
        styleCount,
        styleBtn,
        styleNum
    } = props;
    return (
        <div
            className={`item_btn_group ${styleCount ?? "mt-4"}`}
            style={styleCount ?? {}}
        >
            <button
                onClick={decrement}
                type="button"
                className={count <= 1 ? "btn btn-light btn_decrease " : "btn btn-light "}
                disabled={count <= 1}
                style={styleBtn ?? {}}
            >
                <i className="bi bi-dash"></i>
            </button>
            <div
                className='p-3 fs-4'
                style={styleNum ?? {}}
            >
                {count}
            </div>
            <button
                onClick={increment}
                type="button"
                className="btn btn-light btn_increase"
                style={styleBtn ?? {}}
            >
                <i className="bi bi-plus-lg"></i>
            </button>
        </div>
    )
}

export default CountItem;