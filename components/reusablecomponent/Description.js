"use client"
import React from 'react';
import { IBM_Plex_Mono } from 'next/font/google'
const pop = IBM_Plex_Mono({
    weight: '400',
    subsets: ['latin'],
    display:'swap'
})
import { motion } from 'framer-motion'
import { textVariant3 } from '@/font_utils/motion';

const Description = ({ text, className }) => {
    return (
        <motion.p
            variants={textVariant3} 
            initial="hidden" 
            whileInView="show" 
            className={`${pop.className}  ${className}`}
        >
            {text}
        </motion.p>
    );
};

export default Description;
