import React, { useEffect } from "react";
import "./image-slideshow.styles.css";



const ImageSlide = ({side}) => {
    const delay = 5000;
    const images= side ==='leftSide' 
    ? ['restaurant-ux', 'restaurant', 'food-cover1', 'food-cover2', 'food-cover3']
    : side === 'rightSide' ? ['restaurant', 'food-cover1', 'food-cover2', 'food-cover3', 'restaurant-ux']
    : null
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
      
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
            resetTimeout();
        };
      }, [index]);
    return (
        <div id="slideshow" style={{userSelect:'none'}}>
            <div className="slideshow-slider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {
                    images.map((img,idx) => 
                        <div key={idx} className="slide">
                            <img src={require(`../../Media/images/site_images/${img}.png`)} alt="image-place" loading="lazy"/>
                        </div>
                    )
                }
            </div>
            {/* <div className="slideshowDots">
                {images.map((_, idx) => (
                <div key={idx} 
                    onClick={() => setIndex(idx)}
                    className={`slideshowDot ${index === idx ? "active" : ""}`}>
                         <FontAwesomeIcon icon={faVolleyball} />
                </div>
                ))}
            </div> */}
        </div>
    )
}
 export default ImageSlide;


