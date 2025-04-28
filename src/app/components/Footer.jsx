"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png"; // adjust if needed

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#1e1e2f] text-white h-[100px] p-6 mt-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <span className="text-lg font-semibold">Cloud Gaming</span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Cloud Gaming. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy">
            <span className="text-sm hover:text-white transition duration-300">Privacy</span>
          </Link>
          <Link href="/terms">
            <span className="text-sm hover:text-white transition duration-300">Terms</span>
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
