import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "../../assets/svg/quote.svg";
import stars from "../../assets/svg/5-stars-slider-fill.svg";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};
const TestimonialCard = () => {
  return (
    <div className="border-1 border-zinc-400 mx-3 rounded-2xl bg-[#FAFBFC] min-h-100 p-4 flex flex-col justify-between">
      <div className="flex flex-col space-y-8">
        <img src={quote} alt="" width={45} />
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl">Intelligent CV 247</h3>
          <p className="text-lg">
            Intelligent CV 247, is my main place to create an efficient resume
            for my future employment. it makes things easier because at times,
            it can take me hours to create one.
          </p>
        </div>
      </div>

      <div>
        <span>Olademeji A.</span>
        <img src={stars} alt="" />
        <span>2 Weeks ago</span>
      </div>
    </div>
  );
};
const Testimonial = () => {
  return (
    <section className=" bg-linear-120 from-[#eee] to-[#EBF2F0] min-h-150 py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        Job seekers love our resume builder
      </h2>

      <Slider {...settings}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Slider>
    </section>
  );
};

export default Testimonial;
