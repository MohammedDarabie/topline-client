import about1 from "../../../assets/aboutUs/topline2.jpg";
import about2 from "../../../assets/aboutUs/topline3.jpg";
import about3 from "../../../assets/aboutUs/topline4.jpg";
import about4 from "../../../assets/aboutUs/topline5.jpg";
import about5 from "../../../assets/aboutUs/topline6.jpg";
export default function AboutSection() {
  return (
    <div className="bg-white font-roboto" id="about">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    About Us
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 font-sans text-gray-600 sm:max-w-md lg:max-w-none">
                    ﻣﺘﺨﺼﺼﻮن ﻓﻲ ﺗﻨﻈﻴﻢ اﻟﻔﻌﺎﻟﻴﺎت واﻟﻤﻌﺎرض واﻟﻤﺆﺗﻤﺮات وإدارة اﻟﺤﺸﻮد
                    اﻟﺮﻳﺎﺿﻴﺔﻟﺪﻳﻨﺎ ﺛﺮوة ﻣﻦ اﻟﺨﺒﺮات ﻓﻲ ﺗﻘﺪﻳﻢ ﺣﻠﻮل إﺑﺪاﻋﻴﺔ ﻓﻲ ﺻﻨﺎﻋﺔ
                    ﻓﻌﺎﻟﻴﺎت ﻣﻤﻴﺰة وﺿﻤﺎن رﻋﺎﻳﺔ اﻟﻀﻴﻮف واﻟﺰوار
                  </p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Specialized in organizing events , exhibitions, and
                    conferences,Sports crowd management We serve with rich
                    experience in offering innovative solutions In the events
                    industry with a guarantee to ultimately care for your
                    clients.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src={about1}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src={about2}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={about3}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src={about4}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={about5}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-roboto">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600 font-sans">
                  نسعى في توب لاين تطوير تنظيم الفعاليات واخراج افضل المعايير
                </p>
                <p className="text-xl leading-8 text-gray-600">
                  We try in TopLine to develop and organise festivals in the
                  best artstie quality.
                </p>
              </div>
            </div>
          </div>
          <div className="my-10 mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-roboto">
              Our Vision
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600 font-sans">
                  تلعب توب لاين دورا اساسيا في السوق المحلي و الدولي في ادارة و
                  تنظيم الفعاليات و المهرجانات السياحية - الثقافية - الرياضية
                </p>
                <p className="text-xl leading-8 text-gray-600">
                  We in TopLine play a key role in the local and international
                  market in managing and organizing tourism, cultural , sport
                  events and festivals.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-roboto">
              Our Values
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600 font-sans">
                  اﻟﺘﻨﺎﻏﻢ - اﻻﺑﺘﻜﺎر - اﻻﺑﺪاع - اﻻﻋﺘﻤﺎد واﻟﺠﻮدة{" "}
                </p>
                <p className="text-xl leading-8 text-gray-600">
                  Harmony - innvation - creatività - Quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
