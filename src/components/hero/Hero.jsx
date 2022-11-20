
import "./hero.css"
const Hero = ({ imgSrc }) => {
    return (
        <div className='hero'>
            <img src={imgSrc} alt="travel" className='hero-img' />
            <h1 className='hero-title'>Travel made simple.</h1>
        </div>
    )
}

export default Hero