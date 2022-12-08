import React,{useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

// import required modules
import { Pagination,Navigation,Scrollbar, A11y} from "swiper";

// Import Swiper styles
import '../Slider/employement.css'
import "swiper/swiper.min.css";
import 'swiper/modules/navigation/navigation.min.css';
import "swiper/modules/pagination/pagination.min.css";
import karakoram from '../../assets/images/employment1.png'
import bedfortshire from '../../assets/images/employment2.png'
import bedfortshire1 from '../../assets/images/employement3.png'
import london from '../../assets/images/employement4.png'


// import "./styles.css";

export default function Employement() {
SwiperCore.use([Autoplay]);
const [{openPop,disableScroll},setPopupState]=useState({
  openPop:false,
  disableScroll:false
})
 disableScroll?document.body.style.overflow="hidden":document.body.style.overflow="visible"
 
  return (
    <div className="uni-container"  id='portfolio'>
         <div className="headings">
        <span>jobs</span>
        <h2>Employment History</h2>
      </div>
      <div className="learn-more-popup" style={openPop?{visibility:"visible"}:{visibility:"hidden"}}>
           <div className="popup">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium vero inventore dolorem, voluptatibus exercitationem iste debitis praesentium at, quo voluptatem porro beatae veritatis, soluta tempore corporis? Eveniet, enim! Neque.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium vero inventore dolorem, voluptatibus exercitationem iste debitis praesentium at, quo voluptatem porro beatae veritatis, soluta tempore corporis? Eveniet, enim! Neque.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium vero inventore dolorem, voluptatibus exercitationem iste debitis praesentium at, quo voluptatem porro beatae veritatis, soluta tempore corporis? Eveniet, enim! Neque.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium vero inventore dolorem, voluptatibus exercitationem iste debitis praesentium at, quo voluptatem porro beatae veritatis, soluta tempore corporis? Eveniet, enim! Neque.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium vero inventore dolorem, voluptatibus exercitationem iste debitis praesentium at, quo voluptatem porro beatae veritatis, soluta tempore corporis? Eveniet, enim! Neque.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium vero inventore dolorem, voluptatibus exercitationem iste debitis praesentium at, quo voluptatem porro beatae veritatis, soluta tempore corporis? Eveniet, enim! Neque.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium vero inventore dolorem, voluptatibus exercitationem iste debitis praesentium at, quo voluptatem porro beatae veritatis, soluta tempore corporis? Eveniet, enim! Neque.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium vero inventore dolorem, voluptatibus exercitationem iste debitis praesentium at, quo voluptatem porro beatae veritatis, soluta tempore corporis? Eveniet, enim! Neque.
            </p>
           <div className="close" onClick={()=>setPopupState({openPop:false})}>
            <div></div>
            <div></div>
           </div>
           </div>
         </div>

      <Swiper 
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      //   navigation
      slidesPerView={3} 
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={true}
      speed={500}
      
  

      breakpoints={{
        200: {
          width: 576,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 1,
        },
        800: {
          width:800,
          slidesPerView:2,
        },
        900: {
          width: 900,
          slidesPerView: 2,
        },
        1400:{
          width:1400,
          slidesPerView:3
        }
      }}

      className="mySwiper">
         
      
      <SwiperSlide>
        <div className="uni-wrapper">
            <div className="image">
                <img src={karakoram} alt="" />
                <div className="overlay-learn-more">
                  <button onClick={()=>setPopupState({openPop:true,disableScroll:true})}>learn more</button>
                </div>
            <div className="overlay">
                <div className="uni-name">
                    <h3>Karakoram International University</h3>
                </div>
                <div className="position">
                    <span>Lecturer</span>
                </div>
                <div className="extras">
                    <span>March 2006 – September 2014 <br />
                      Jan 2019 to date</span>
                      <span className="home">
                        home base:
                      </span>
                      <span>gilgit-baltistan</span>
                </div>
            </div>
            </div>
         </div>
        
        </SwiperSlide>
      
      <SwiperSlide>
        <div className="uni-wrapper">
            <div className="image">
                <img src={bedfortshire} alt="" />
                <div className="overlay-learn-more">
                  <button onClick={()=>setPopupState({openPop:true,disableScroll:true})}>learn more</button>
                </div>
            <div className="overlay">
                <div className="uni-name">
                    <h3>University of Bedfordshire</h3>
                </div>
                <div className="position">
                    <span>Visiting Lecturer</span>
                </div>
                <div className="extras">
                    <span> February 2016- Feb 2018</span>
                      <span className="home">
                        home base:
                      </span>
                      <span>Luton UK</span>
                </div>
            </div>
            </div>
         </div>
        </SwiperSlide>
      
        <SwiperSlide>
        <div className="uni-wrapper">
            <div className="image">
                <img src={bedfortshire1} alt="" />
                <div className="overlay-learn-more">
                  <button onClick={()=>setPopupState({openPop:true,disableScroll:true})}>learn more</button>
                </div>
            <div className="overlay">
                <div className="uni-name">
                    <h3>University of Bedfordshire</h3>
                 
                </div>
                <div className="position">
                    <span>Research Assistant (RA)</span>
                </div>
                <div className="extras">
                    <span> March 2015- Jan 2016</span>
                      <span className="home">
                        home base:
                      </span>
                      <span>Luton UK</span>
                </div>
            </div>
            </div>
         </div>
        </SwiperSlide>
      
        <SwiperSlide>
        <div className="uni-wrapper">
            <div className="image">
                <img src={london} alt="" />
                <div className="overlay-learn-more">
                  <button onClick={()=>setPopupState({openPop:true,disableScroll:true})}>learn more</button>
                </div>
            <div className="overlay">
                <div className="uni-name">
                    <h3>London School of Science</h3>
                </div>
                <div className="position">
                    <span>Visiting Lecturer</span>
                </div>
                <div className="extras">
                    <span>January 2015- December 2018</span>
                      <span className="home">
                        home base:
                      </span>
                      <span>gilgit-baltistan</span>
                </div>
            </div>
            </div>
         </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );

}
