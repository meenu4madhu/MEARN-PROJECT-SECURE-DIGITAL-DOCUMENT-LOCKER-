import React from 'react'

function Footer() {
  return (
   <div class="bg-gradient-to-r from-indigo-800 via-blue-900 to-purple-900 text-white py-12">
  <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">

    {/* <!-- Brand & Tagline --> */}
    <div class="flex-1 space-y-2">
      <h2 class="text-3xl font-extrabold tracking-wide">SecureDoc</h2>
      <p class="text-gray-200 text-sm">The modern digital document locker. Fast. Secure. Reliable.</p>
    </div>

    {/* <!-- Features as modern cards --> */}
    <div class="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div class=" p-2 rounded-xl shadow-md text-center hover:bg-white/20 transition">
        <p class="text-xl font-semibold">Security</p>
        <p class="text-gray-200 text-xs mt-1">Advanced encryption keeps your files safe.</p>
      </div>
      <div class=" p-4 rounded-xl shadow-md text-center hover:bg-white/20 transition">
        <p class="text-xl font-semibold">Speed</p>
        <p class="text-gray-200 text-xs mt-1">Access and store documents instantly.</p>
      </div>
      <div class=" p-4 rounded-xl shadow-md text-center hover:bg-white/20 transition">
        <p class="text-xl font-semibold">☁️ Cloud Access</p>
        <p class="text-gray-200 text-xs mt-1">Anytime, anywhere from your devices.</p>
      </div>
    </div>

  </div>

  {/* <!-- Bottom small note --> */}
  <div class="mt-10 text-center text-gray-400 text-xs">
    © 2026 SecureDoc. All rights reserved.
  </div>
</div>


  )
}

export default Footer