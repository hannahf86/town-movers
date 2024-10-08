// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { HiMiniStar } from "react-icons/hi2";

// COMPONENTS
import ReviewCard from "../Components/ReviewCard";

// IMAGES
import logo from "../Assets/logo.webp";

const Landing = () => {
  const styles = {
    background: "bg-white pt-20 h-full w-full ",
    title: "text-accent text-6xl text-center mb-12 mt-4 px-2",
    subtitle: "text-black text-3xl text-center mb-4 px-2",
    tagline: "text-black text-center text-xl",
    button:
      "bg-attention text-black font-bold text-center text-base px-8 py-3 my-3 rounded-md hover:outline outline-4 outline-offset-4 outline-attention hover:text-accent mb-12",
  };

  return (
    <div id="landing" className={styles.background}>
      {/* PAGE TITLE */}
      <div className="container">
        <img src={logo} alt="logo" className="w-32 mx-auto pt-6" />
        <h1 className={styles.title}>
          TOWN 2 TOWN <h1 className="text-attention">MOVERS</h1>
        </h1>
        <h2 className={styles.subtitle}>Man with a van service</h2>
        <div className="container flex justify-between px-8 mb-8 md:px-52 lg:px-60 xl:px-96">
          <HiMiniStar size={40} className="text-attention" />
          <HiMiniStar size={40} className="text-attention" />
          <HiMiniStar size={40} className="text-attention" />
          <HiMiniStar size={40} className="text-attention" />
          <HiMiniStar size={40} className="text-attention" />
        </div>

        {/* REVIEW CARD */}
        <div className="p-6">
          <ReviewCard />
        </div>

        {/* CALL TO ACTION */}
        <div className="flex justify-center ">
          <Link to="/contact">
            <button className={styles.button}>Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
