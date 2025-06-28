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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-cyan-400/20 rounded-3xl blur-2xl"></div>
                <div className="relative h-72 w-40">
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
                <h1 className="text-2xl lg:text-4xl font-extrabold lg:font-bold">
                  Want to Turn Social Media Into a Profitable Career?
                </h1>

                <h2 className="font-urbanist font-bold text-2xl lg:text-4xl text-tertiary text-shadow-primary">
                  Discover your way to success with Fametonic:
                </h2>
              </div>
              <ul className="space-y-6 font-medium lg:font-semibold">
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

              <div className="pt-6">
                <div className="relative inline-block">
                  <Button
                    size="lg"
                    className="bg-primary py-3 px-12 lg:px-20 rounded-xl font-urbanist font-bold text-white text-xl uppercase drop-shadow-primary cursor-pointer hover:bg-primary"
                  >
                    <span className="flex items-center gap-2">
                      GET STARTED
                      <ChevronUp
                        className="h-12 w-12 transition-transform rotate-90"
                        strokeWidth={4}
                      />
                    </span>
                  </Button>

                  <p className="text-white font-urbanist text-xs mb-7 mt-2.5 absolute left-1/2 transform -translate-x-1/2 w-full text-center">
                    1-minute quiz for personalized insights
                  </p>
                </div>

                <div className="space-y-3 pt-14">
                  <p className="text-footer text-xs max-w-md">
                    By clicking "Get Started", you agree with Terms and
                    Conditions, Privacy Policy, Subscription Terms
                  </p>

                  <p className="text-footer text-xs">
                    Fametonic {new Date().getFullYear()} ©All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative z-10">
              <div className="relative w-full h-full">
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[8%]">
                  <div className="relative h-[50.44rem] w-[50.63rem]">
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
