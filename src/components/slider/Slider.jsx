
import React from 'react'
import "./slider.css"
import { useInView } from 'react-intersection-observer';

const Slider = ({ imgSrc, title, subTitle, flipped }) => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.4,
    });

    const renderContent = () => {
        if (!flipped) {
            return <>
                <img src={imgSrc} alt="Travel" className='slider-img' />
                <div className="slider-content">
                    <h1 className="slider-title">{title}</h1>
                    <p>{subTitle}</p>
                </div>
            </>
        }
        else {
            return <>
                <div className="slider-content">
                    <h1 className="slider-title">{title}</h1>
                    <p>{subTitle}</p>
                </div>
                <img src={imgSrc} alt="Travel" className='slider-img' />

            </>
        }
    }
    return (
        <div className={inView ? "slider slider-zoom" : "slider"} ref={ref} > {renderContent()}</div >
    )
}

export default Slider