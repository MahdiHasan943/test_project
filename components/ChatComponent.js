'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image';
import { slideIn, staggerContainer } from '@/font_utils/motion';

const ChatComponent = () => {
    const [message, setMessage] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility

    // Function to show the for
    const showForm = () => setIsFormVisible(true);

    // Function to hide the form
    const hideForm = () => setIsFormVisible(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const initialText = "link711 ";
        const fullMessage = initialText + message;
        const phoneNumber = "+4915213599612".replace(/\s+/g, '').replace('+', '');
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="flex  flex-col justify-end  items-end  overflow-hidden h-[200px] fixed top-[72%] px-3 transition delay-500 z-[999999999!important] left-0"
                onMouseLeave={hideForm} // Hide form when mouse leaves the container
            >
                {isFormVisible && (
                    <motion.div
                        className="bg-white  h-[150px] w-[300px] shadow-lg rounded-lg p-4"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg">Send a Message</h2>
                            <button onClick={hideForm}>X</button> {/* Button to hide the form */}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message here..."
                                className="border-2 border-gray-200 rounded p-2 w-full mb-2"
                            />
                            <button type="submit" className="bg-green-500 text-white rounded p-2">Send to WhatsApp</button>
                        </form>
                    </motion.div>
                )}

                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)} 
                    initial="hidden"
                    whileInView="show"
                    onMouseEnter={showForm} // Show form when hovering over the image
                    className="cursor-pointer "
                >
                    <Image src={'/whatsapp-social-media-svgrepo-com.svg'} alt='WhatsApp' width={60} height={60} className='w-[40px] h-[40px] rounded-full' />
                </motion.div>
            </motion.div>
        </>
    );
};

export default ChatComponent;
