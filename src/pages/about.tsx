import { useRouter } from "next/router";
import { LandingLayout } from "~/components/layouts/landing-layout";

export default function About() {
    const router = useRouter()
    return (<LandingLayout>
        <Main />
    </LandingLayout>);
}

export function Main() {
    return(
        <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl font-bold title-font text-black mb-4">
              Our Team
            </h2>
            <div className="w-full py-12">
              <div className="flex flex-wrap gap-x-20 gap-y-10 justify-center">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team" width={300} height={300}
                    className="flex-shrink-0 rounded-lg object-cover object-center mb-4" src="/My.jpeg"></img>
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">
                      My Phung
                    </h2>
                    <h3 className="text-gray-500 mb-3">Founder</h3>
                    <p className="mb-4 max-w-sm">
                      I am a highly motivated and innovative individual with a deep passion for problem-solving. My academic journey in economics and computer science has honed my analytical thinking and interdisciplinary approach to challenges. Entrepreneurial by nature, I thrive on leading teams and developing solutions that drive positive change. With strong technical skills, I am always eager to explore new horizons and make a meaningful impact.
                    </p>
                    
                  </div>
                </div>
                  <div className="h-full flex flex-col items-center text-center">
                    <div className="h-[19rem] flex flex-end">
                      <img alt="team" width={300} height={300}
                        className="flex-shrink-0 rounded-lg object-cover object-center"
                        src="/jamison.png"
                      ></img>
                    </div>
                    
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-black">
                        Jamison Coté
                      </h2>
                      <h3 className="text-gray-500 mb-3">Cofounder</h3>
                      <p className="mb-4 max-w-sm">
                      Creative Visionary and Data-Driven Designer | I once co-developed a mental health platform that gained 400 users in less than 4 months while a fulltime student. I also designed an autofill browser extension that reduced form filling time by 60%. I love understanding how people think/interact with the world and turning those insights into delightful designs.
                      </p>
                  </div>
                </div>
                
                <div className="h-full flex flex-col items-center text-center">
                <img
                    alt="team" width={300} height={300}
                    className="flex-shrink-0 rounded-lg object-cover object-center mb-4" src="/Nikhil.jpeg"
                  ></img>
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">
                      Nikhil Ghosh
                    </h2>
                    <h3 className="text-gray-500 mb-3">Business Development</h3>
                    <p className="mb-4 max-w-sm">
                      I am a purpose-driven individual studying computer science at the University of Connecticut. I also teach, innovate, volunteer, and try to grow. Well-being and relationships are most important to me, and I enjoy meeting people and exploring. 
                    </p>
                    
                </div>
                </div>
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" width={300} height={300}
                    className="flex-shrink-0 rounded-lg object-cover object-center mb-4" src="/Mayur.jpeg"></img>
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">
                      Mayurapriyan Somalinga
                    </h2>
                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                    <p className="mb-4 max-w-sm">
                      I am a junior at UConn, pursuing a major in Psychological Sciences and a minor in Cognitive Science. I am highly motivated to work in the realms of human resources and/or data science, with a few years of programming experience, namely in Java and C++, but most recently in Python, which is the language I am most comfortable in
                    </p>
                  </div>
                </div>
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" width={300} height={300}
                    className="flex-shrink-0 rounded-lg object-cover object-center mb-4" src="/John-Michael.jpeg"></img>
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">
                      John-Michael Mendez
                    </h2>
                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                    <p className="mb-4 max-w-sm">
                      John-Michael is part of our front-end team providing amazing
                      websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}