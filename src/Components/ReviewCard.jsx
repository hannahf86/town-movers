// DATA
import reviewData from "./ReviewData";

// REACT SLICK
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ICONS
import { HiMiniStar } from "react-icons/hi2";

const ReviewCard = () => {
  const styles = {
    cardContainer:
      "bg-white border border-4 border-accent rounded-md w-4/5 m-auto my-2 p-2",
    review: "text-center font-bold text-accent text-lg lg:text-sm md:text-base",
    name: "text-black/80 font-bold mt-2",
  };

  // slider
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div id="review-card">
      <Slider {...settings}>
        {reviewData?.map((review) => (
          <div key={review.id} className={styles.cardContainer}>
            <div>
              <h4 className={styles.review}>&quot;{review.review}&quot;</h4>
            </div>

            <div className="flex flex-col items-center mt-4">
              <div className="flex justify-between ">
                <HiMiniStar size={25} className="text-attention" />
                <HiMiniStar size={25} className="text-attention" />
                <HiMiniStar size={25} className="text-attention" />
                <HiMiniStar size={25} className="text-attention" />
                <HiMiniStar size={25} className="text-attention" />
              </div>
              <div>
                <p className={styles.name}>{review.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCard;
