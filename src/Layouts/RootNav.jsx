/* eslint-disable react/prop-types */

// REACT
import { useState } from "react";

// REACT ROUTER DOM
import { Link, Outlet } from "react-router-dom";

// MOTION
import { motion } from "framer-motion";

// COMPONENTS
import ToggleButton from "./ToggleButton";

// IMAGES

// ICONS
import { HiHome, HiBriefcase, HiBookOpen, HiMail } from "react-icons/hi";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const RootNav = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };

  // STYLES
  const mobileStyles = {
    container: "fixed w-full h-20 bg-black z-40",
    logo: "absolute right-16 z-[99] cursor-pointer",
    fullMenu:
      "bg-black/80 fixed w-full h-screen p-20 md:p-0 flex flex-col justify-center items-center z-30 md:w-2/6",
    menuItem:
      "bg-accent text-white w-80 h-16 m-8 rounded-lg flex justify-center items-center sm:w-96 sm:h-16 sm:my-8 hover:bg-black hover:text-attention",
    menuIcon: "mr-2 tracking-widest text-md sm:text-md",
  };

  const desktopStyles = {
    container:
      "hidden md:block fixed flex w-3/6 top-0 right-6 h-24 bg-transparent z-40 items-center",
    linkSubContainer: "mr-24 absolute top-5 right-40 flex items-center",
    link: "mx-20 font-bold text-white hover:bg-accent p-2 rounded-sm",
    button: "bg-black text-center text-accent font-bold rounded-md py-2 px-3",
  };

  return (
    <div id="rootNav">
      {/* MOBILE NAV */}
      <motion.div
        id="nav"
        className={mobileStyles.container}
        animate={open ? "open" : "closed"}>
        <div className={mobileStyles.logo}>
          {/* <img src={} width={91} alt="logo" /> */}
        </div>

        <motion.div variants={variants} className={mobileStyles.fullMenu}>
          <motion.div onClick={handleNav}>
            <Link to="/">
              <span className={mobileStyles.menuItem}>
                <HiHome className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Home</p>
              </span>
            </Link>

            <Link to="services">
              <span className={mobileStyles.menuItem}>
                <HiBriefcase className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Services</p>
              </span>
            </Link>

            <Link to="about">
              <span className={mobileStyles.menuItem}>
                <HiBookOpen className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">About Us</p>
              </span>
            </Link>

            <Link to="contact">
              <span className={mobileStyles.menuItem}>
                <HiMail className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Contact</p>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <ToggleButton setOpen={setOpen} />
      </motion.div>

      {/* DESKTOP NAV */}
      <header className={desktopStyles.container}>
        <nav>
          {/* LINKS */}
          <div className={desktopStyles.linkSubContainer}>
            <a to="/#services" className={desktopStyles.link}>
              SERVICES
            </a>
            <a to="/#about" className={desktopStyles.link}>
              FAQs
            </a>

            <button className={desktopStyles.button}>Contact</button>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootNav;
