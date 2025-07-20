import Icons from "../Icons/Icons";

const Header = () => {
  return (
    <header className="relative w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 bg-gradient-to-r from-[#F80000] via-purple-700 to-[#100857] gap-3 md:gap-0">
      <h1 className="text-white text-lg md:text-2xl font-[caveat] font-semibold italic whitespace-nowrap">
        EchoAlma
      </h1>
      <p
        className="text-white text-center md:text-center lg:whitespace-nowrap lg:text-left text-xs sm:text-sm md:text-base lg:text-lg max-w-full md:max-w-md
        md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2
        lg:static lg:translate-x-0 lg:translate-y-0 lg:left-auto lg:top-auto"
      >
        Alumni &amp; Prospects Engagement Stack Built For{" "}
        <span className="border-2 border-yellow-400 rounded-full px-2 py-0.5 sm:py-1 font-bold inline-block mt-1 md:mt-0">
          Success &amp; Efficiency
        </span>
      </p>
      <button
        className="flex items-center justify-center gap-1 md:gap-2 bg-[#00356B] text-white 
        w-full max-w-[160px] h-[36px] text-xs sm:text-sm
        md:w-[160px] md:h-[34px]
        rounded-full hover:bg-[#6ABEDF] shadow hover:shadow-red-50 transition cursor-pointer"
      >
        {Icons.addMember}
        Invite Friends
      </button>
    </header>
  );
};

export default Header;
