import { Icons } from "../Icons/Icons";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 bg-gradient-to-r from-red-600 via-purple-700 to-[#100857] space-y-2 md:space-y-0">
      <h1 className="text-white text-xl md:text-2xl font-caveat font-semibold italic whitespace-nowrap">
        EchoAlma
      </h1>

      <p className="text-white text-center md:text-left text-sm md:text-base lg:text-lg max-w-xs md:max-w-md whitespace-nowrap">
        Alumni &amp; Prospects Engagement Stack Built For{" "}
        <span className="border border-yellow-400 rounded-full px-2 py-1 font-bold">
          Success &amp; Efficiency
        </span>
      </p>

      <button
        className="flex items-center justify-center gap-2 bg-[#00356B] text-white 
        w-[11vw] h-[3.8vh] text-xs
        md:w-[160px] md:h-[34px] md:text-sm
        rounded-full hover:bg-[#6ABEDF] shadow hover:shadow-red-50 transition cursor-pointer"
      >
        {Icons.addMember}
        Invite Friends
      </button>
    </header>
  );
};

export default Header;
