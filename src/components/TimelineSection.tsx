import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2018",
    title: "Pertemuan Pertama",
    description: "Di sebuah café kecil yang nyaman, takdir mempertemukan kita. Senyummu yang hangat saat itu masih tersimpan jelas dalam ingatanku, seperti baru terjadi kemarin.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop"
  },
  {
    year: "2019",
    title: "Jatuh Cinta",
    description: "Setiap percakapan semakin dalam, setiap tatapan semakin bermakna. Aku tahu saat itu, kamu adalah orang yang selama ini kucari. Cinta tumbuh tanpa kami sadari.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    year: "2020",
    title: "Melamarmu",
    description: "Di bawah langit penuh bintang, aku berlutut dan bertanya apakah kamu mau menghabiskan sisa hidupmu bersamaku. Air mata bahagia dan jawaban 'Ya' darimu adalah hadiah terindah.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    year: "2021",
    title: "Hari Pernikahan",
    description: "Hari dimana dua jiwa menjadi satu. Kamu berjalan menuju altar dengan gaun putih, dan aku tahu hidupku telah sempurna. Janji suci kita terucap, selamanya.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
  },
  {
    year: "2023",
    title: "Petualangan Bersama",
    description: "Menjelajahi dunia bersamamu adalah impian yang menjadi kenyataan. Setiap tempat baru, setiap pengalaman baru, semakin menguatkan cinta kita.",
    image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070&auto=format&fit=crop"
  }
];

const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center mb-24 lg:mb-32`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="image-hover rounded-sm overflow-hidden shadow-elegant"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:text-left' : 'lg:text-right'} text-center`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="inline-block font-sans text-gold text-sm tracking-[0.2em] uppercase mb-3">
            {item.year}
          </span>
          
          <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            {item.title}
          </h3>
          
          <div 
            className={`w-16 h-px mb-6 ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'} mx-auto lg:mx-0`}
            style={{ background: "linear-gradient(90deg, hsl(350 35% 65%), hsl(38 45% 70%))" }}
          />
          
          <p className="font-sans text-charcoal-light leading-relaxed text-base md:text-lg">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
            Perjalanan Kita
          </h2>
          <p className="font-sans text-charcoal-light text-lg">
            Setiap momen istimewa yang membentuk kisah cinta kita
          </p>
          <div className="divider-ornament mt-8">
            <span className="text-dustyRose text-xl">♥</span>
          </div>
        </motion.div>

        {/* Timeline vertical line - hidden on mobile, visible on desktop */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dustyRose/30 to-transparent" />
          
          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
