import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import quote from "../../assets/svg/quote.svg";
import stars from "../../assets/svg/5-stars-slider-fill.svg";


const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer text-[#EA723C] text-3xl z-10 hover:scale-110 transition-transform hidden lg:block"
  >
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer text-[#EA723C] text-3xl z-10 hover:scale-110 transition-transform hidden lg:block"
  >
    <FaChevronLeft />
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


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
    <section className="bg-gradient-to-r from-[#eee] to-[#EBF2F0] py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Job seekers love our resume builder
      </h2>

      <div className="max-w-6xl mx-auto w-full overflow-hidden">
        <Slider {...settings}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
