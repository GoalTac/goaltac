import { Button } from "@react-email/components";
import { PiShareNetwork } from "react-icons/pi";
import { BetaSignUp } from "../beta-sign-up-form";

export default function Newsletter() {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
  
            {/* CTA box */}
            <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">
  
              {/* Background illustration */}
              <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                <svg width="328" height="328" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="98.031%" id="ni-a">
                      <stop stopColor="#5c98ff" offset="0%" />
                      <stop stopColor="#154370" offset="44.317%" />
                      <stop stopColor="#333" offset="100%" />
                    </radialGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g fill="#13b6e8">
                      <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                      <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                      <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                      <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                    </g>
                    <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                  </g>
                </svg>
              </div>
  
              <div className="relative flex flex-col lg:flex-row justify-between items-center">
  
                {/* CTA content */}
                <div className="text-center lg:text-left lg:max-w-xl flex flex-col md:flex-row">
                    <div className='flex flex-col max-w-md px-10'>
                        <h3 className="h3 text-white mb-2">Want more tutorials & guides?</h3>
                        <p className="text-gray-300 text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>
                    </div>
                  
                  {/* CTA form */}
                  <div className='w-full justify-center flex'>
                    <BetaSignUp/>
                  </div>
                  
                </div>
  
              </div>
  
            </div>
  
          </div>
        </div>
      </section>
    )
  }