import React from "react";
import "../Awards/Awards.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from 'swiper';

// import required modules
import SwiperCore,{Pagination,Navigation,Scrollbar, A11y,} from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/effect-flip/effect-flip.min.css";
import 'swiper/modules/navigation/navigation.min.css';
import "swiper/modules/pagination/pagination.min.css";
import award_icon from '../../assets/icons/award1.png'

export default function Awards() {
    SwiperCore.use([Navigation, Pagination]);
  return (
    <div  className="wrapper-awards">
        <div className="heading">
            <h2>awards</h2>
        </div>
        <Swiper
        pagination={{type:'progressbar'}}
        navigation={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
       slidesPerView={3} 
       speed={100}
       spaceBetween={1} 
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={true}
     

      breakpoints={{
        200: {
          width: 576,
          slidesPerView: 1,
        
        },
        900: {
          width:900,
          slidesPerView: 2,
        },
        1400:{
            width:1400,
            slidesPerView:3
          }
      }}

        
        >



       <SwiperSlide className="slide">
        <div className="award" id="awards">
            <span className="year">
                2007
            </span>
            <div className="icon">
             <img src={award_icon} alt="" />
            </div>
            <div className="content">
                <span>
              national academy of higher education
                </span>
                <p>in recognition of having attended staff developement course</p>
                <p className="location">( held at karakoram international university )</p>
            </div>
        </div>
       </SwiperSlide>
       <SwiperSlide className="slide">
        <div className="award">
            <span className="year">
                2014
            </span>
            <div className="icon">
             <img src={award_icon} alt="" />
            </div>
            <div className="content">
                <span>
             PTS certificate of attendance
                </span>
                <p>for attendence in university of bedfordshire proffessional teaching scheme (PTS)
                    introduction to teaching and learning session.
                    </p>
            </div>
        </div>
       </SwiperSlide>
       <SwiperSlide className="slide">
        <div className="award">
            <span className="year">
                2016
            </span>
            <div className="icon">
             <img src={award_icon} alt="" />
            </div>
            <div className="content">
                <span>
               summer research conference
                </span>
                <p>best research poster : audience choice</p>
                <p>effect of oonline and offline factors on impulse buying behaviour of millennium generation</p>
            </div>
        </div>
       </SwiperSlide>
       <SwiperSlide className="slide">
        <div className="award">
            <span className="year">
                2016
            </span>
            <div className="icon">
             <img src={award_icon} alt="" />
            </div>
            <div className="content">
                <span>
               NVIVO 10
                </span>
                <p>workshop of attendance & completion</p>
                <p>trainer: pasty a clarke</p>
            </div>
        </div>
       </SwiperSlide>
       <SwiperSlide className="slide">
        <div className="award">
            <span className="year">
                2019
            </span>
            <div className="icon">
             <img src={award_icon} alt="" />
            </div>
            <div className="content">
                <span>british council</span>
                <p>
            attendance DICE fellowship training of facilitators (ToF)
            in islamabad
                </p>
            </div>
        </div>
       </SwiperSlide>





        </Swiper>
      
    </div>
  )
}

