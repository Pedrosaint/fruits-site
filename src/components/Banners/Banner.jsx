import React from 'react'
import BannerPng from '../../assets/Fruit-splash.png'
import { FadeUp } from '../../utility/animation';
import { motion } from 'framer-motion'


const Banner = () => {
  return (
    <>
      <section className="bg-secondary/10">
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
          {/* Banner Image */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              viewport={{ once: true }}
              src={BannerPng}
              alt=""
              className="w-[300px] md:max-w-[400px] h-full drop-shadow"
            />
          </div>
          {/* Brand info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                {""}
                Brand Info
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
                <button className="primary-btn">Learn More</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner
