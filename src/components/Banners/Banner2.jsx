import React from "react";
import BannerPng from "../../assets/fruit-plate.png";
import { FadeUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <>
      <section className="">
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
          {/* Brand info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold uppercase"
              >
                {""}
                Online Fruit Stores
              </motion.h1>
              <motion.p
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                ab quaerat recusandae reprehenderit molestiae repellendus
                consequuntur tempore repellat, voluptate qui. Illo, repudiandae
                obcaecati eaque vitae cumque natus officia id maxime!
              </motion.p>
              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, facilis fuga eveniet laborum sit sapiente enim! Hic
                tempora alias cupiditate.
              </motion.p>
              {/*button section*/}
              <motion.div
                variants={FadeUp(1.1)}
                initial="hidden"
                animate="visible"
                className="flex justify-self-center md:justify-start"
              >
                <button className="primary-btn">Download the App</button>
              </motion.div>
            </div>
          </div>
          {/* Banner Image */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 200, rotate: 75 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              src={BannerPng}
              alt=""
              className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner2;
