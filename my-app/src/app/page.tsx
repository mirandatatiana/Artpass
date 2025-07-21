import Image from "next/image";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  PlusCircle as PlusCircleIcon,
  Calendar as CalendarIcon,
  User as UserIcon,
  Star as StarIcon,
} from "lucide-react";
export default function Home() {
  return (
    <div className="relative bg-white flex flex-col justify-start items-center gap-2.5">
      <div className="self-stretch h-16 px-3.5 pt-5 pb-3.5 relative flex flex-col justify-start items-start overflow-hidden">
        <div className="w-7 h-7 relative bg-gray-200 rounded-[30px] overflow-hidden">
          <div className="w-5 h-5 left-[4.62px] top-[5px] absolute overflow-hidden">
            <div className="w-5 h-5 left-0 top-0 absolute" />

            <div className="w-3.5 h-3.5 left-[2.50px] top-[2.50px] absolute bg-zinc-800" />
          </div>
        </div>
        <div className="w-48 justify-start text-black text-3xl font-bold tracking-wide">
          For you
        </div>
      </div>
      <div className="self-stretch h-6 px-3.5 inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="w-56 justify-start text-black text-xl font-bold font-['Inter] tracking-tight">
          Recommended for you
        </div>
        <div className="w-6 h-6 relative overflow-hidden">
          <div className="w-6 h-6 left-0 top-0 absolute" />
          <div className="w-4 h-1 left-[4px] top-[10px] absolute bg-zinc-800" />
        </div>
      </div>
      <div className="p-3.5 pe-3.5 self-stretch h-70  flex  justify-start items-start relative max-w-full overflow-x-scroll overflow-y-hidden rounded-lg">
        <div className="flex flex-nowrap space-x-4">
          <div className="flex-shrink-0 w-44 h-58 pt-px pb-2.5 outline shadow-md hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-200 ease-out outline-offset-[-1px] rounded-lg  flex flex-col justify-start items-start overflow-hidden">
            <div className="w-44 inline-flex flex-col  items-center p-1 gap-1.5">
              <Image
                className=" relative  rounded-lg"
                src="/IMG_3475.PNG"
                alt="next"
                width={160}
                height={150}
              />
              <div className="px-[5px] inline-flex flex-col  justify-start items-start overflow-hidden">
                <div className="w-44 ps-2 justify-start text-black text-base font-semibold tracking-tight">
                  Amsterdam Dance..
                </div>
              </div>
              <div className="self-stretch h-20 px-[5px] inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="w-20 h-5 relative overflow-hidden">
                  <div className="w-11 left-0 top-0 absolute justify-start text-stone-500 text-sm font-normal ">
                    3.3 km
                  </div>
                </div>
                <div className="w-40 h-6 relative overflow-hidden">
                  <div className="w-36 h-4 left-0 top-[5px] absolute justify-start text-stone-500 text-sm font-normal font-['Inter']">
                    Jazz, Salsa, Classic...
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1  py-1">
                  <span className="text-sm font-bold  text-black">4.8</span>
                  <StarIcon
                    className="w-4 h-4 text-black"
                    strokeWidth={0}
                    fill="currentColor"
                  />
                  <span className="text-sm text-stone-500 font-medium">
                    (2500+)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-shrink-0 shadow-md hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-200 ease-out w-44 h-58 pt-px pb-2.5 rounded-lg outline outline-offset-[-1px] inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="w-44 inline-flex  flex-col justify-center items-center p-1 gap-1.5">
              <Image className=" relative  rounded-lg" src="/drums.png" alt="next" width={150} height={10} />
              <div className=" px-[5px] inline-flex flex-col justify-center items-center overflow-hidden">
                <div className="w-44 ps-2 justify-start text-black text-base font-semibold tracking-tight">
                  Drums by Joseline
                </div>
              </div>
              <div className="self-stretch h-20 px-[5px] inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="w-20 h-5 relative overflow-hidden">
                  <div className="w-11 left-0 top-0 absolute justify-start text-stone-500 text-sm font-normal font-['Inter']">
                    1.3 km
                  </div>
                </div>
                <div className="w-40 h-6 relative overflow-hidden">
                  <div className="w-36 h-4 left-0 top-[5px] absolute justify-start text-stone-500 text-sm font-normal font-['Inter']">
                    Drums Class
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1  py-1">
                  <span className="text-sm font-bold  text-black">5.0</span>
                  <StarIcon
                    className="w-4 h-4  text-black"
                    strokeWidth={0}
                    fill="currentColor"
                  />
                  <span className="text-sm font-medium text-stone-500">
                    (3000+)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 shadow-md hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-200 ease-out w-44 h-58 pt-px pb-2.5 rounded-lg outline outline-offset-[-1px]  inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="w-44 inline-flex flex-col justify-start p-1 items-center gap-1.5">
              <Image className=" relative  rounded-lg" src="/ceramic.png" alt="next" width={160} height={150} />{" "}
              <div className="px-[5px] inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="w-44 ps-2 justify-start text-black text-base font-semibold tracking-tight">
                  Lemon
                </div>
              </div>
              <div className="self-stretch h-20 px-[5px] inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="w-20 h-5 relative overflow-hidden">
                  <div className="w-12s left-0 top-0 absolute justify-start text-stone-500 text-sm font-normal font-['Inter']">
                    2.3 km
                  </div>
                </div>
                <div className="w-40 h-6 relative overflow-hidden">
                  <div className="w-36 h-4 left-0 top-[5px] absolute justify-start text-stone-500 text-sm font-normal font-['Inter']">
                    Ceramics Class
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1  py-1">
                  <span className="text-sm font-bold  text-black">6.0</span>
                  <StarIcon
                    className="w-4 h-4 text-black"
                    strokeWidth={0}
                    fill="currentColor"
                  />
                  <span className="text-sm text-stone-500 font-medium">
                    (1500+)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch h-6 px-3.5 inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="w-72 h-4 justify-start text-black text-base font-bold font-['Inter'] tracking-tight">
          Consistency is the key - Book again
        </div>
        <div className="w-6 h-6 relative overflow-hidden">
          <div className="w-6 h-6 left-0 top-0 absolute" />
          <div className="w-4 h-1 left-[4px] top-[10px] absolute bg-zinc-800" />
        </div>
      </div>
      <div className="self-stretch h-42 p-3.5 pe-3.5 relative flex  justify-start items-start overflow-hidden ">
        <div className="w-full items-start p-4 pe-10 justify-between  rounded-lg outline outline-1  outline-neutral-200 overflow-hidden">
          <div className="flex justify-between items-start h-full">
            {/* ← Text column */}
            <div className="flex flex-col justify-between flex-1 pr-4">
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-black">
                  Reggaeton Class
                </h3>
                <p className="text-sm text-stone-500">
                  Mon, 12 Jul <span className="font-bold">•</span> 17:30
                </p>
                <p className="text-sm text-base text-black">
                  Amsterdam Dance Center
                </p>
              </div>
              <div className="flex items-center justify-start mt-4">
                <span className="text-sm text-black pe-4">7 credits</span>
                <button className="bg-indigo-500 hover:bg-indigo-700/90 rounded-full px-4 py-1 text-sm font-bold text-white">
                  Book
                </button>
              </div>
            </div>

            {/* → Image column */}
            <Image className=" relative  rounded-lg" src="/IMG_3475.PNG" alt="next" width={150} height={150} />
          </div>
        </div>
      </div>

      <div className="self-stretch h-6 px-3.5 inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="w-56 justify-start text-black text-xl font-bold font-['Inter'] tracking-tight">
          Newly Added
        </div>
        <div className="w-6 h-6 relative overflow-hidden">
          <div className="w-6 h-6 left-0 top-0 absolute" />
          <div className="w-4 h-1 left-[4px] top-[10px] absolute bg-zinc-800" />
        </div>
      </div>
      <div className="p-3.5 pe-3.5 self-stretch h-70  flex  justify-start items-start relative max-w-full overflow-x-scroll overflow-y-hidden rounded-lg">
        <div className="flex flex-nowrap space-x-4">
          <div className="flex-shrink-0 shadow-md hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-200 ease-out w-44 h-58 pt-px pb-2.5 rounded-lg outline outline-offset-[-1px] flex flex-col justify-start items-start overflow-hidden">
            <div className="w-44 inline-flex flex-col justify-start items-center p-1 gap-1.5">
              <Image className=" relative  rounded-lg" src="/ballet.png" alt="next" width={160} height={150} />{" "}
              <div className="px-[5px] inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="w-44 ps-2 justify-start text-black text-base font-semibold tracking-tight">
                  Ballet By Kate
                </div>
              </div>
              <div className="self-stretch h-20 px-[5px] inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="w-20 h-5 relative overflow-hidden">
                  <div className="w-11 left-0 top-0 absolute justify-start text-stone-500 text-sm font-normal ">
                    3.3 km
                  </div>
                </div>
                <div className="w-40 h-6 relative overflow-hidden">
                  <div className="w-36 h-4 left-0 top-[5px] absolute justify-start text-stone-500 text-sm font-normal font-['Inter']">
                    Ballet Class
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1  py-1">
                  <span className="text-sm font-bold  text-black">4.8</span>
                  <StarIcon
                    className="w-4 h-4 text-black"
                    strokeWidth={0}
                    fill="currentColor"
                  />
                  <span className="text-sm text-stone-500 font-medium">
                    (2500+)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="  shadow-md hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-200 ease-out  f w-44 h-58 pt-px pb-2.5 rounded-lg outline outline-1 outline-offset-[-1px]  inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="w-44 inline-flex flex-col justify-center  p-1 items-center gap-1.5">
              <Image className=" relative  rounded-lg" src="/poledance.png" alt="next" width={160} height={150} />{" "}
              <div className=" px-[5px] inline-flex flex-col justify-start items-center overflow-hidden">
                <div className="w-44 ps-2 justify-start text-black text-base font-semibold tracking-tight">
                  Pole Dance By Kim
                </div>
              </div>
              <div className="self-stretch h-20 px-[5px] inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="w-20 h-5 relative overflow-hidden">
                  <div className="w-11 left-0 top-0 absolute justify-start text-stone-500 text-sm font-normal font-['Inter']">
                    1.3 km
                  </div>
                </div>
                <div className="w-40 h-6 relative overflow-hidden">
                  <div className="w-36 h-4 left-0 top-[5px] absolute justify-start text-stone-500 text-sm font-normal font-['Inter']">
                    PoolDance Class
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1  py-1">
                  <span className="text-sm font-bold  text-black">5.0</span>
                  <StarIcon
                    className="w-4 h-4  text-black"
                    strokeWidth={0}
                    fill="currentColor"
                  />
                  <span className="text-sm font-medium text-stone-500">
                    (3000+)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-44 h-58 pt-px pb-2.5 shadow-md hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-200 ease-out  rounded-lg outline outline-1 outline-offset-[-1px] inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="w-44 inline-flex flex-col justify-center p-1 items-center gap-1.5">
              <Image className=" relative  rounded-lg" src="/guitar.png" alt="next" width={160} height={150} />{" "}
              <div className="px-[5px] inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="w-44 ps-2  justify-start text-black text-base font-semibold tracking-tight">
                  Guitar Class
                </div>
              </div>
              <div className="self-stretch h-20 px-[5px] inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="w-20 h-5 relative overflow-hidden">
                  <div className="w-12s left-0 top-0 absolute justify-start text-stone-500 text-sm font-normal font-['Inter']">
                    2.3 km
                  </div>
                </div>
                <div className="w-40 h-6 relative overflow-hidden">
                  <div className="w-36 h-4 left-0 top-[5px] absolute justify-start text-stone-500 text-sm font-normal">
                    Guitar Class
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1  py-1">
                  <span className="text-sm font-bold  text-black">6.0</span>
                  <StarIcon
                    className="w-4 h-4 text-black"
                    strokeWidth={0}
                    fill="currentColor"
                  />
                  <span className="text-sm text-stone-500 font-medium">
                    (1500+)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-6 px-3.5 inline-flex flex-col justify-start items-start overflow-hidden">
        <div className="w-72 h-4 justify-start text-black text-base font-bold font-['Inter'] tracking-tight">
          Refer a friend and get €30
        </div>
        <div className="w-6 h-6 relative overflow-hidden">
          <div className="w-6 h-6 left-0 top-0 absolute" />
          <div className="w-4 h-1 left-[4px] top-[10px] absolute bg-zinc-800" />
        </div>
      </div>
      <div className="self-stretch h-60 p-3.5 pe-3.5 relative flex  justify-start items-start overflow-hidden ">
        <div className="w-full items-start p-4 pe-10 justify-between  rounded-lg outline outline-1  outline-neutral-200 overflow-hidden">
          <div className="flex justify-between items-start h-full">
            {/* ← Text column */}
            <div className="flex flex-col justify-between flex-1 pr-8">
              <div className="space-y-1">
                <div className="w-48 h-9 justify-start text-sm text-black text-base font-semibold font-['Inter']">
                  Give your friends 20 bonus
                  <br />
                  credits and get rewarded <br />
                  when they join ArtPass
                </div>
              </div>
              <div className="flex items-center justify-start mt-12">
                <button className="bg-indigo-500 hover:bg-indigo-700/90 rounded-full px-4 py-1 text-sm font-bold text-white">
                  Refer a friend
                </button>
              </div>
            </div>

            {/* → Image column */}
            <Image src="/IMG_3475.PNG" alt="next" width={150} height={160} />
          </div>
        </div>
      </div>
      <div
        className="
    fixed bottom-0 inset-x-0 w-full z-50
    bg-white
    pb-[env(safe-area-inset-bottom)]  /* iPhone safe-area padding */
    border-t border-neutral-200
  "
      >
        <div className="flex justify-between items-center h-16 px-5">
          <button className="flex-1 flex flex-col items-center justify-center gap-1">
            <HomeIcon className="w-6 h-6 text-neutral-900" />
            <span className="text-[10px]  text-stone-500 font-medium">
              Home
            </span>
          </button>

          {/* Search */}
          <button className="flex-1 flex flex-col items-center justify-center gap-1">
            <SearchIcon className="w-6 h-6 text-neutral-900" />
            <span className="text-[10px]  text-stone-500 font-medium">
              Search
            </span>
          </button>

          {/* Add credits */}
          <button className="flex-1 flex flex-col items-center justify-center gap-1">
            <PlusCircleIcon className="w-6 h-6 text-neutral-900" />
            <span className="text-[10px]  text-stone-500 font-medium">
              Add credits
            </span>
          </button>

          {/* Upcoming */}
          <button className="flex-1 flex flex-col items-center justify-center gap-1">
            <CalendarIcon className="w-6 h-6 text-neutral-900" />
            <span className="text-[10px]  text-stone-500 font-medium">
              Upcoming
            </span>
          </button>

          {/* Profile */}
          <button className="flex-1 flex flex-col items-center justify-center gap-1">
            <UserIcon className="w-6 h-6 text-neutral-900" />
            <span className="text-[10px]  text-stone-500 font-medium">
              Profile
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
