import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative px-4 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="lg:hidden relative h-80 w-full mb-8">
              <div className="relative h-full flex items-center justify-center">

                <div className="relative h-96 w-80">
                  <Image
                    src="/assets/images/Influe_mobile_mockup.png"
                    alt="Fametonic Mobile App"
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>

              </div>
            </div>

            <div className="space-y-5 lg:pr-4 relative z-20">
              <div className="space-y-2">
                <h1 className="text-2xl lg:text-4xl font-extrabold lg:font-bold font-urbanist">
                  Want to Turn Social Media Into a Profitable Career?
                </h1>

                <h2 className="font-urbanist font-extrabold lg:font-bold text-2xl lg:text-4xl text-tertiary text-shadow-primary">
                  Discover your way to success with Fametonic:
                </h2>
              </div>
              <ul className="space-y-2.5 font-medium lg:font-semibold font-figtree pb-2">
                <li className="flex items-start gap-2.5">
                  <span>✨</span>
                  Start growing your influence right away—no waiting required!
                </li>

                <li className="flex items-start gap-2.5">
                  <span>✨</span>
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </li>

                <li className="flex items-start gap-2.5">
                  <span>✨</span>
                  Use a Personal AI Worker to boost your content
                </li>

                <li className="flex items-start gap-2.5">
                  <span>✨</span>
                  Learn from expert-led courses designed for aspiring
                  influencers
                </li>
              </ul>


              <div className="space-y-4 flex flex-col-reverse lg:flex-col gap-6 lg:gap-0">

                <div className="text-center w-auto lg:w-fit">
                  <Button
                    size="lg"
                    className="bg-primary py-3 px-12 lg:px-20 rounded-lg font-urbanist font-bold text-white text-xl uppercase drop-shadow-primary cursor-pointer hover:bg-primary"
                  >
                    <span className="flex items-center gap-2 font-urbanist lg:font-figtree">
                      GET STARTED
                      <ChevronUp
                        className="h-12 w-12 transition-transform rotate-90"
                        strokeWidth={4}
                      />
                    </span>
                  </Button>
                  <p className="text-white text-xs mt-3 font-figtree">
                    1-minute quiz for personalized insights
                  </p>
                </div>

                {/* Legal Text Group - Appears first on mobile due to flex-col-reverse */}
                <div className="space-y-3 lg:pt-2.5 text-center lg:text-left">
                  <p className="text-footer text-xs max-w-md font-figtree font-medium">
                    By clicking &quot;Get Started&quot;, you agree with Terms
                    and Conditions, Privacy Policy, Subscription Terms
                  </p>
                  <p className="text-footer text-xs font-nunito pt-2 lg:pt-1 text-[0.625rem]">
                    Fametonic {new Date().getFullYear()} ©All Rights Reserved.
                  </p>
                </div>

              </div>
          </div>

            <div className="hidden lg:block relative z-10">
              <div className="relative w-full h-full">
                <div className="absolute top-1/2 left-0 transform -translate-y-[46%] -translate-x-[15%]">
                  <div className="relative h-[49rem] w-[49rem]">
                    <Image
                      src="/assets/images/Influe_mobile_mockup.png"
                      alt="Fametonic Mobile App"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


