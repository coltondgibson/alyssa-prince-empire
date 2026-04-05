const credentials = [
  "15+ Years in Business",
  "7-Figure Earner",
  "Top Rank Achiever",
  "Licensed Realtor",
  "World Traveler",
  "Empire Builder",
  "Keynote Speaker",
  "Mom of Four",
];

const CredentialsBar = () => {
  // Duplicate items for seamless loop
  const items = [...credentials, ...credentials];

  return (
    <section className="bg-primary overflow-hidden py-4 md:py-5">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((item, i) => (
            <span key={i} className="flex items-center mx-6 md:mx-10">
              <span className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-primary-foreground/90 font-light">
                {item}
              </span>
              <span className="ml-6 md:ml-10 text-primary-foreground text-sm">✦</span>
            </span>
          ))}
        </div>
        <div className="flex animate-marquee2 whitespace-nowrap absolute top-0">
          {items.map((item, i) => (
            <span key={i} className="flex items-center mx-6 md:mx-10">
              <span className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-primary-foreground/90 font-light">
                {item}
              </span>
              <span className="ml-6 md:ml-10 text-primary-foreground text-sm">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsBar;
