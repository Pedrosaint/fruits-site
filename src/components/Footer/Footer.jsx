import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaLeaf } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <>
      <footer className="bg-primary/10 py-12 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container flex justify-between items-center"
        >
          {/* logo selection */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>
          {/* social icon selection */}
          <div className="text-2xl flex items-center gap-4 ">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="https://x.com/l_ife_of_pedro">
              <FaTwitter />
            </a>
            <a href="https://wa.link/tz7x5a">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

export default Footer
