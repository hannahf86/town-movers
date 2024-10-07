/* eslint-disable react/prop-types */

// ICONS
import { FaCheck, FaMobileAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";

// RRD
import { Link } from "react-router-dom";

const Services = () => {
  // STYLES
  const mobileStyles = {
    background: "flex flex-col  relative bg-white pt-28",
    titleContainer: " px-2",
    title: "text-center text-5xl text-accent font-bold tracking-wider mb-8",
    tagline: "text-black my-4 text-center mx-6 font-light text-base",
    cTAContainer:
      "flex flex-col justify-center bg-accent w-full px-6 py-10 my-12",
    cTATitle: "text-white text-xl text-center",
    cTATag: "text-white text-center mt-4 text-md font-light",
    buttonContainer: "flex justify-center mt-4",
    button:
      "bg-attention text-black font-bold text-center text-base px-8 py-3 my-3 rounded-md hover:outline outline-4 outline-offset-4 outline-attention hover:text-accent",
  };

  return (
    <section id="services">
      {/* ------- MOBILE ------- */}
      <div className={mobileStyles.background}>
        <div className={mobileStyles.titleContainer}>
          <h1 className={mobileStyles.title}>Services</h1>
          <h2 className={mobileStyles.tagline}>
            We offer an extensive moving services, including:
          </h2>

          {/* SERVICES */}
          <ul className="flex flex-col justify-center items-center text-black text-md px-3 text-center">
            <li className="flex items-center my-2">
              <div className="text-green mr-3">
                <FaCheck />
              </div>
              <p>House moves</p>
            </li>
            <li className="flex items-center my-2">
              <div className="text-green mr-3">
                <FaCheck />
              </div>
              <p> Relocations</p>
            </li>
            <li className="flex items-center my-2">
              <div className="text-green mr-3">
                <FaCheck />
              </div>
              <p>House clearances</p>
            </li>
            <li className="flex items-center my-2">
              <div className="text-green mr-3">
                <FaCheck />
              </div>
              <p>EBay collections</p>
            </li>
            <li className="flex items-center my-2">
              <div className="text-green mr-3">
                <FaCheck />
              </div>
              <p>Facebook marketplace items</p>
            </li>
            <li className="flex items-center my-2">
              <div className="text-green mr-3">
                <FaCheck />
              </div>
              <p>Garden clearance</p>
            </li>
            <li className="flex items-center my-2">
              <div className="text-green mr-3">
                <FaCheck />
              </div>
              <p>Timber and wood</p>
            </li>
            <li className="flex items-center my-2 pt-3">
              <div className="text-red mr-3">
                <ImCross />
              </div>
              <p className="font-bold">No household waste or tip runs</p>
            </li>
            <li className="font-bold text-center">
              Keeping our vans hygienic is our top priority
            </li>
          </ul>
        </div>

        {/* CALL TO ACTION */}
        <div id="cTAContainer" className={mobileStyles.cTAContainer}>
          <h3 className={mobileStyles.cTATitle}>
            Call us for a quick quote on:
          </h3>
          <div className="flex text-white justify-center items-center my-4">
            <FaMobileAlt size={25} className="mr-2" />
            <p className="font-bold text-white text-lg">07359 741819</p>
          </div>
          <h3 className={mobileStyles.cTATag}>
            Or email us through our contact page
          </h3>
          <Link to="../contact" className={mobileStyles.buttonContainer}>
            <button className={mobileStyles.button}>Get in touch</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
