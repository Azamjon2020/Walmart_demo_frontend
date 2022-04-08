import React from "react";
import "./HeaderCarousel.css";
import { IoGrid } from "react-icons/io5";
import { MdOutlineGridView } from "react-icons/md";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import { Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper";
import { headerSliderText } from "../../data/NavbarData";
SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation]);

function HeaderCarousel() {
  return (
    <div className="headerCarousel">
      <div className="headerCarouselNav">
        <button>
          <IoGrid /> <span>Sacramento Supercenter</span>
        </button>
        <p>|</p>
        <button>
          <MdOutlineGridView />
          <span>Sacramento, 95829</span>
        </button>
      </div>
      <div className="headerCarouselWrapper">
        <Swiper
          className="headerSwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {headerSliderText?.map((headerText, index) => (
            <SwiperSlide key={index}>
              <div
                className="sliderHeader"
                style={{
                  backgroundImage: `url(${headerText.bgImg})`,
                }}
              >
                <div className="sliderHeaderText">
                  <h1>{headerText.heading}</h1>
                  <p>{headerText.text}</p>
                  <button>Shop now</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeaderCarousel;
