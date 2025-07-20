const Footer = () => {
  return (
    <section className="w-full flex flex-col justify-center px-4 sm:px-6 md:px-12 py-12 md:py-16 bg-gradient-to-r from-[#F80000] via-purple-800 to-[#100857] text-white h-auto md:h-[40vh]">
      <div className="pl-0 md:pl-44 text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl font-[caveat] italic mb-2">
          EchoAlma
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-[crimson] font-bold mb-2">
          Alumni Association
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          Stay Connected with Your Alumni Community
        </p>
      </div>
    </section>
  );
};

export default Footer;


