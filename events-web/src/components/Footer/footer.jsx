import React from 'react'
import './footer.css'

function footer() {
  return (
    <>
    <hr className='w-ull bg-[#33dcfa] h-1'/>
      <footer class="bg-[#dafbfbf6] text-gray-700 py-6 text-center">
        <div className=''>
          <div className='text-xl font-semibold text-[#257f91]'> 🌟 Contact Us 🌟</div>
          <div className=' text-center p-7 text-[#257f91]'>
            Email: CrowdHivesevice@gmail.com
            Contact: 7300169850
            Our Websits : CrowdHive.com
            🚀🌍
          </div>
          <h2 className='text-lg text-[#29bbd8] '>
            😊 Thanks ! Welcome to CrowdHive! 😊
          </h2>
        </div>
        <div class="container mx-auto">
          <p>&copy; 2024 CrowdHive. All Rights Reserved.</p>
          <div class="mt-4">
            <a href="#" class="text-gray-400 mx-2">Privacy Policy ||</a>
            <a href="#" class="text-gray-400 mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer