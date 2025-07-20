import Icons from "../Icons/Icons";

const ExtendedFooter = () => {
  return (
    <footer className="w-full bg-[#0F0C4B] text-white text-sm md:text-base">
      <div className="bg-[#00356B] text-start py-6 px-6 sm:px-8 md:px-14 lg:px-20">
        <h2 className="text-2xl font-semibold">Start Your Journey</h2>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 lg:ml-50 sm:px-10 md:px-14 lg:px-20 py-14 flex flex-col gap-10 min-h-[920px]">
        <div className="space-y-4">
          <div>
            <p className="mb-1">Schedule a Visit</p>
            <hr className="border-white/30" />
          </div>
          <div>
            <p className="mb-1">Guest Visit</p>
            <hr className="border-white/30" />
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-4 sm:mb-6">Connect with Alma</p>
          <div className="flex gap-5 sm:gap-6 justify-start sm:justify-start cursor-pointer">
            {Icons.instagram}
            {Icons.facebook}
            {Icons.twitter}
            {Icons.linkedin}
          </div>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-20 lg:gap-40">
          <div>
            <p className="mb-6 font-semibold">Campus safety</p>
            <hr className="mb-3 border-white/30 w-fit" />
            <p className="mb-3">Civil Rights/ Title IX</p>
            <p className="mb-3">Emergency Information</p>

            <p className="mt-8 mb-4 font-semibold">Resources</p>
            <hr className="mb-3 border-white/30 w-fit" />
            <p className="mb-3">Contact us</p>
            <p className="mb-3">Inside Alma</p>
            <p className="mb-3">Employment</p>
            <p className="mb-3">Campus Directory</p>
            <p className="mb-3">Offices & Services</p>
            <p className="mb-3">Library</p>
            <p className="mb-3">Academic Calendar</p>
          </div>

          <div>
            <p className="mb-6 font-semibold">News and Events</p>
            <hr className="mb-3 border-white/30 w-fit" />
            <p className="mb-3">Campus Calendar</p>
            <p className="mb-3">Media Relations</p>
            <p className="mb-3">Policies and Disclosures</p>
            <p className="mb-3">Newsroom</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ExtendedFooter;
