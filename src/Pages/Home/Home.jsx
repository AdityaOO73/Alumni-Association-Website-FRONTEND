import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ExtendedFooter from "../../Components/ExtendedFooter";
import landing from "../../public/landing.png";
import Icons from "../../Icons/Icons";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <section
          className="flex-1 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${landing})` }}
        >
          <div className="flex flex-col items-center justify-center text-center text-white px-4 py-10 md:py-16 h-full">
            <span className="bg-blue-800/50 font-bold px-4 py-1 md:px-6 md:py-2 rounded-full shadow text-sm md:text-base">
              The Alumni Association
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-white text-transparent bg-clip-text px-2">
              Stay Connected,{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">
                Grow Together,
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-[#D9D9D9] font-bold max-w-[90%] md:max-w-4xl mb-6">
              “Echo of the Alma Mater” — alumni carrying the voice and{" "}
              <span className="text-yellow-400">values</span> of their
              institution forward.
            </p>
          </div>

          <div className="flex justify-center items-center px-4 md:px-0 py-10 md:py-0">
            <div className="w-full max-w-sm sm:max-w-md md:w-[45vh] rounded-2xl shadow-md overflow-hidden">
              
              <div className="bg-[#6ABEDF] px-4 py-3">
                <h1 className="text-xl font-bold font-[caveat] italic text-black">
                  EchoAlma
                </h1>
                <p className="text-xs sm:text-sm text-black italic font-small">
                  Connect with fellow alumni, explore job opportunities, attend
                  events, and support your alma mater.
                </p>
              </div>

              <div className="p-4 bg-white/20 backdrop-blur-sm flex flex-col items-center space-y-4">
                <div className="flex flex-row flex-wrap justify-center gap-3 w-full">
                  <button className="w-[48%] bg-[#272DA6] font-semibold text-white text-sm px-4 py-2 rounded-full hover:bg-[#D9D9D9] hover:text-[#6ABEDF] hover:border hover:border-[#6ABEDF] cursor-pointer">
                    Register
                  </button>
                  <button className="w-[48%] border border-[#6ABEDF] text-[#6ABEDF] bg-[#D9D9D9] font-semibold text-sm px-4 py-2 rounded-full hover:bg-[#100857] hover:text-white cursor-pointer">
                    Login
                  </button>
                </div>

                <button className="relative flex items-center w-full py-3 px-4 rounded-2xl text-sm font-semibold bg-[#0072b1] text-white hover:bg-[#6ABEDF] hover:text-black hover:border hover:border-[#6ABEDF] cursor-pointer">
                  <span className="absolute left-4 text-lg">
                    {Icons.linkedin}
                  </span>
                  <span className="w-full text-center">
                    Connect with Linkedin
                  </span>
                </button>

                <button className="relative flex items-center w-full py-3 px-4 rounded-2xl text-sm font-semibold border border-[#D9D9D9] bg-[#D9D9D9] hover:bg-[#00356B] hover:text-[#6ABEDF] cursor-pointer">
                  <span className="absolute left-4 text-lg">{Icons.mail}</span>
                  <span className="w-full text-center">Sign up with Email</span>
                </button>

                <button className="relative flex items-center w-full py-3 px-4 rounded-2xl text-sm font-semibold bg-[#990303] text-white hover:bg-white hover:text-[#990303] hover:border hover:border-[#990303] cursor-pointer">
                  <span className="absolute left-4 text-lg">
                    {Icons.google}
                  </span>
                  <span className="w-full text-center">
                    Connect with Google
                  </span>
                </button>

                <a
                  href="#"
                  className="text-blue-700 text-xs font-semibold underline"
                >
                  Login With One Time Password (OTP)
                </a>

                <p className="text-[10px] text-center text-gray-700">
                  By Signing up, You Agree to our
                  <br />
                  <span className="underline">
                    terms and conditions
                  </span> and <span className="underline">privacy policy</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ExtendedFooter />
      <Footer />
    </>
  );
};

export default LandingPage;
