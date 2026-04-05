import { useEffect, useRef } from "react";
import smilingPhoto from "@/assets/alyssa-smiling2.jpg";
import familyPhoto from "@/assets/alyssa-family.jpg";
import birthdayPhoto from "@/assets/alyssa-birthday.jpg";
import couplePhoto from "@/assets/alyssa-couple.jpg";
import nashvillePhoto from "@/assets/alyssa-nashville.jpg";

const photos = [
  { src: smilingPhoto, caption: "Living my best life ✨", rotate: "-3deg" },
  { src: familyPhoto, caption: "My whole world 💕", rotate: "2deg" },
  { src: birthdayPhoto, caption: "She Found Her Prince 👑", rotate: "-1.5deg" },
  { src: couplePhoto, caption: "My forever person 🤍", rotate: "2.5deg" },
  { src: nashvillePhoto, caption: "Nashville moments ⭐", rotate: "-2deg" },
];

const LifePhotoStrip = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("animate-fade-up"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-cream py-14 md:py-20 overflow-hidden">
      <div className="text-center mb-12">
        <p className="font-script text-2xl md:text-3xl text-primary">a little peek into my life</p>
      </div>
      <div ref={ref} className="opacity-0 flex gap-6 md:gap-8 justify-center items-start flex-wrap max-w-6xl mx-auto px-6">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="polaroid flex-shrink-0 w-[160px] md:w-[200px] lg:w-[220px]"
            style={{ transform: `rotate(${photo.rotate})` }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
            <p className="polaroid-caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifePhotoStrip;
