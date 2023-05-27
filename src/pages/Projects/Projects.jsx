// import "./projects.scss";
// import React from "react";
// import Slider from "react-slick";
// import One from "../../assets/photos/ordi-mobile (1).png";
// import Two from "../../assets/photos/ordi-mobile (1).png";
// import Three from "../../assets/photos/ordi-mobile (1).png";
// import Four from "../../assets/photos/ordi-mobile (1).png";
// import Five from "../../assets/photos/ordi-mobile (1).png";
// import Six from "../../assets/photos/ordi-mobile (1).png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// export default function Projects() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // responsive: [
//     //   {
//     //     breakpoint: 1024,
//     //     settings: {
//     //       slidesToShow: 4,
//     //       slidesToScroll: 1,
//     //       infinite: true,
//     //       dots: true,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 425,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 3,
//     //       initialSlide: 2,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 320,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 2,
//     //     },
//     //   },
//     // ],
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <img className="slide-image" src={One} alt="" />
// 		  {/* <a href="#">Github</a>
// 		  <a href="#">Visiter</a> */}
//         </div>
//         <div>
//           <img className="slide-image" src={Two} alt="" />
//         </div>
//         <div>
//           <img className="slide-image" src={Three} alt="" />
//         </div>
//         <div>
//           <img className="slide-image" src={Four} alt="" />
//         </div>
//         <div>
//           <img className="slide-image" src={Five} alt="" />
//         </div>
//         <div>
//           <img className="slide-image" src={Six} alt="" />
//         </div>
//       </Slider>
//     </div>
//   );
// }
import "./projects.scss";
import React from "react";
import Slider from "react-slick";
import One from "../../assets/photos/ordi-mobile (1).png";
import Two from "../../assets/photos/ordi-mobile (1).png";
import Three from "../../assets/photos/ordi-mobile (1).png";
import Four from "../../assets/photos/ordi-mobile (1).png";
import Five from "../../assets/photos/ordi-mobile (1).png";
import Six from "../../assets/photos/ordi-mobile (1).png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="slide-image" src={One} alt="" />
        </div>
        <div>
          <img className="slide-image" src={Two} alt="" />
        </div>
        <div>
          <img className="slide-image" src={Three} alt="" />
        </div>
        <div>
          <img className="slide-image" src={Four} alt="" />
        </div>
        <div>
          <img className="slide-image" src={Five} alt="" />
        </div>
        <div>
          <img className="slide-image" src={Six} alt="" />
        </div>
      </Slider>
    </div>
  );
}
