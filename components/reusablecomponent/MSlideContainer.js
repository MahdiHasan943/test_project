'use client'
import React from 'react';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
import { fadeIn, textVariant2} from '@/font_utils/motion';

const pop = Poppins({
    weight: '700',
    subsets: ['latin'],
    display:'swap'
});

const MSlideContainer = ({ children, className }) => {
    return (
        <motion.div 
        variants={textVariant2}  initial="hidden"
        whileInView="show"
            className={`${pop.className} font-extrabold text-[30px] leading-[30px] tablet:text-[40px] tablet:leading-[40px] text-[#18191c] ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default MSlideContainer;
