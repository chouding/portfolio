import { ABOUT_CONTENT } from "../constants";
import profilePic from "../assets/profilePicture.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Main = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Raymond Chou
            </motion.h1>
            <motion.span
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="text-4xl tracking-tight text-slate-400"
            >
              About Me
            </motion.span>
            <motion.p
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {ABOUT_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-1/2 lg:w-2/5 justify-center lg:p-8">
          <div className="flex">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="rounded-full"
              src={profilePic}
              alt="Raymond Chou"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
