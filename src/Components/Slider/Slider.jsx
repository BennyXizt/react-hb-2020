import React, {useState, useEffect} from "react";
import './Slider.css'

function Slider(props) {
  const sliderArrange = props.slide
  const [slider, setSlider] = useState(sliderArrange[0]);
  useEffect(() => {
    let interval = setInterval(() => {
      if (sliderArrange.indexOf(slider) !== sliderArrange.length - 1) {
        setSlider(sliderArrange[sliderArrange.indexOf(slider) + 1]);
      } else setSlider(sliderArrange[0]);
    }, 1000);

    return () => clearInterval(interval);
  });
  return (
    <div
      className="wbox_slider"
      dangerouslySetInnerHTML={{ __html: slider }}
    ></div>
  );
}

export default Slider;
