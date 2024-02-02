import { MdCall, MdMessage, MdVideoCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";

export default function Contact() {
  return (
    <section>
      <div className="px-6 mx-auto max-w-7xl flex justify-between gap-5 items-end py-2 md:flex-nowrap flex-wrap">
        <div className="md:flex-1 flex flex-col gap-3">
          <div className="flex flex-col gap-[2px]">
            <span className="font-semibold text-orange-400 text">
              Our Contacts
            </span>
            <span className="font-bold text-blue-950 text-xl">
              Easy to contact us.
            </span>
            <span className="text-black/60 text-sm font-semibold">
              We are always ready to help in providing the best services in
              finding a good place to live.
            </span>
          </div>

          <div className="flex flex-col gap-x-4 gap-y-3">
            <div className="flex gap-4 justify-between flex-1 md:flex-nowrap flex-wrap">
              <div className="md:flex-1 w-full flex flex-col gap-1 transition-all ease-in-out hover:scale-105">
                <div className="flex gap-2 items-center">
                  <div className="flex justify-center items-center h-8 w-8 rounded-md bg-blue-200">
                    <MdCall size={20} className="text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-blue-800 font-semibold">Call</h3>
                    <span className="text-sm text-gray-600 font-semibold poppins">
                      +123-456-7890
                    </span>
                  </div>
                </div>
                <button className="text-white font-medium px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-[4px] w-full">
                  Ring Us
                </button>
              </div>
              <div className="md:flex-1 w-full flex flex-col gap-1 transition-all ease-in-out hover:scale-105">
                <div className="flex gap-2 items-center">
                  <div className="flex justify-center items-center h-8 w-8 rounded-md bg-blue-200">
                    <BsFillChatDotsFill size={20} className="text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-blue-800 font-semibold">Chat</h3>
                    <span className="text-sm text-gray-600 font-semibold poppins">
                      +123-456-7890
                    </span>
                  </div>
                </div>
                <button className="text-white font-medium px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-[4px] w-full">
                  Chat Now
                </button>
              </div>
            </div>
            <div className="flex gap-4 justify-between flex-1 md:flex-nowrap flex-wrap">
              <div className="md:flex-1 flex flex-col gap-1 transition-all ease-in-out w-full hover:scale-105">
                <div className="flex gap-2 items-center">
                  <div className="flex justify-center items-center h-8 w-8 rounded-md bg-blue-200">
                    <MdVideoCall size={20} className="text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-blue-800 font-semibold">Video Call</h3>
                    <span className="text-sm font-semibold poppins text-gray-600">
                      +123-456-7890
                    </span>
                  </div>
                </div>
                <button className="text-white font-medium px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-[4px] w-full">
                  Call Now
                </button>
              </div>
              <div className="md:flex-1 flex flex-col gap-1 transition-all ease-in-out w-full hover:scale-105">
                <div className="flex gap-2 items-center">
                  <div className="flex justify-center items-center h-8 w-8 rounded-md bg-blue-200">
                    <MdMessage size={20} className="text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-blue-800 font-semibold">Message</h3>
                    <span className="text-sm font-semibold poppins text-gray-600">
                      +123-456-7890
                    </span>
                  </div>
                </div>
                <button className="text-white font-medium px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-[4px] w-full">
                  Message Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:flex-1">
          <div className="lg:w-[27rem] md:w-[25rem] sm:h-[30rem] h-[25rem]  overflow-hidden rounded-tr-[15rem] rounded-tl-[15rem] border-4 border-black/30">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
              alt="valueBanner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
