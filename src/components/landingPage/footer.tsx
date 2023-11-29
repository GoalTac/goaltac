import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-gray-200 pt-4 md:pt-8">
        {/* 1st block */}
        <div className="sm:col-span-12 lg:col-span-3">
            <img src="/name_logo.png"
            width={150}
            height=''
            className="object-cover object-center h-full"
            alt="GoalTac Logo"/>
          </div>
        
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between pt-4">

          {/* Copyrights note */}
          <div className='flex flex-col md:flex-row gap-4 w-full'>
            <div className="text-sm text-gray-600 mr-4">&copy; GoalTac.net. All rights reserved.</div>
            <div className='flex flex-col sm:mx-auto sm:flex-row w-full'>
                <div className="text-sm text-gray-600">
                    <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
                </div>
                <ul className="flex ml-auto">
                    <li>
                    <a target='_blank' href="https://www.linkedin.com/company/92931369/" className="p-2 text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                        <FaLinkedin/>
                    </a>
                    </li>
                </ul>
            </div>
            
          </div>
          
        </div>

      </div>
    </footer>
  )
}