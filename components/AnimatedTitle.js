"use client";

import { motion } from "motion/react";

function AnimatedTitle() {
    return (
        <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            className="text-4xl font-bold leading-none sm:text-5xl select-none">tenes que 
            <span className="text-secondary">clikear aca</span> para ver si funciona
        </motion.h1>
    )
}

export default AnimatedTitle