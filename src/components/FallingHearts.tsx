 import { motion } from "framer-motion";
 import { useEffect, useState } from "react";
 
 interface Heart {
   id: number;
   x: number;
   size: number;
   duration: number;
   delay: number;
   opacity: number;
 }
 
 const FallingHearts = () => {
   const [hearts, setHearts] = useState<Heart[]>([]);
 
   useEffect(() => {
     const generateHearts = () => {
       const newHearts: Heart[] = [];
       for (let i = 0; i < 25; i++) {
         newHearts.push({
           id: i,
           x: Math.random() * 100,
           size: Math.random() * 20 + 12,
           duration: Math.random() * 8 + 6,
           delay: Math.random() * 10,
           opacity: Math.random() * 0.4 + 0.2,
         });
       }
       setHearts(newHearts);
     };
 
     generateHearts();
   }, []);
 
   return (
     <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
       {hearts.map((heart) => (
         <motion.div
           key={heart.id}
           className="absolute text-dustyRose"
           style={{
             left: `${heart.x}%`,
             fontSize: `${heart.size}px`,
             opacity: heart.opacity,
           }}
           initial={{ y: -50, rotate: 0 }}
           animate={{
             y: ["0vh", "110vh"],
             rotate: [0, 15, -15, 0],
             x: [0, 20, -20, 0],
           }}
           transition={{
             duration: heart.duration,
             delay: heart.delay,
             repeat: Infinity,
             ease: "linear",
           }}
         >
           💕
         </motion.div>
       ))}
     </div>
   );
 };
 
 export default FallingHearts;