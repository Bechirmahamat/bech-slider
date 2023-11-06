import React, { useEffect } from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";
const Slider = ({ data }) => {
    const [active, setActive] = useState(0);

    const nextItem = () => {
        setActive(() => (active + 1) % data.length);
    };
    const prevItem = () => {
        setActive(() => (active - 1 + data.length) % data.length);
    };

    useEffect(() => {
        const id = setTimeout(() => {
            nextItem();
        }, 3000);
        return () => clearTimeout(id);
    }, [active]);
    return (
        <div className="slider-container">
            {data.map((item, itemIndex) => {
                return (
                    <article
                        key={itemIndex}
                        className="slider"
                        style={{
                            transform: `translateX(${
                                (itemIndex - active) * 100
                            }%)`,
                            opacity: itemIndex != active ? "0" : "1",
                            visibility:
                                itemIndex != active ? "hidden" : "visible",
                        }}
                    >
                        <div className="img-container">
                            <img src={item.image} alt="" />
                        </div>
                        <h3 className="name  text-prime">{item.name}</h3>
                        <h4 className="title">{item.title}</h4>
                        <p className="text">{item.quote}</p>
                        <FaQuoteRight className="quote" />
                    </article>
                );
            })}

            <FaArrowLeft className="prev-btn" onClick={prevItem} />
            <FaArrowRight className="next-btn" onClick={nextItem} />
        </div>
    );
};

export default Slider;
