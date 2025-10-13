import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import quote from "../../assets/svg/quote.svg";
import stars from "../../assets/svg/5-stars-slider-fill.svg";

const TestimonialCard = () => {
  return (
    <div className="border border-zinc-300 rounded-2xl bg-[#FAFBFC] min-h-[300px] p-6 flex flex-col justify-between w-[90%] mx-auto sm:w-[95%] md:w-full">
      <div className="flex flex-col space-y-8">
        <img src={quote} alt="quote icon" width={45} />
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Intelligent CV 247
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Intelligent CV 247 is my main place to create an efficient resume
            for my future employment. It makes things easier because at times,
            it can take me hours to create one.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <span className="block font-medium text-gray-800">Olademeji A.</span>
        <img src={stars} alt="rating stars" className="my-2 w-28" />
        <span className="text-sm text-gray-500">2 weeks ago</span>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-r from-[#eee] to-[#EBF2F0] py-12 px-4 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Job seekers love our resume builder
      </h2>

      <div className="max-w-6xl mx-auto w-full relative">
        {/* Swiper navigation buttons */}
        <div className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-[#EA723C] text-white cursor-pointer hover:scale-110 transition-transform">
          <FaChevronLeft />
        </div>
        <div className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-[#EA723C] text-white cursor-pointer hover:scale-110 transition-transform">
          <FaChevronRight />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
