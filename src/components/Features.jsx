import React from 'react'

function Features() {
  return (
    <>
    <section
      id="features"
      style={{backgroundImage:"url('https://files.123freevectors.com/wp-content/original/106944-indigo-abstract.jpg')"}}
      className="py-20  px-4 min-h-screen bg-cover bg-fixed"
    >
      {/* Title */}
      <h2
        data-aos="fade-down"
        style={{textShadow: '4px 4px 8px rgba(0,0,0,0.9)'}}
        className="text-5xl font-bold text-center text-white mb-4"
      >
        Powerful Features
      </h2>

      <p
        data-aos="fade-up"
        className="text-center text-white max-w-2xl mx-auto mb-16"
      >
        SecureDoc combines strong security with an intuitive design to provide a
        reliable digital document management solution.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div
          data-aos="fade-right"
          className="p-6 rounded-2xl bg-black shadow-lg border-t-4 border-blue-500 hover:-translate-y-2 transition"
        >
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            AES-256 Encryption
          </h3>
          <p className="text-white">
            Advanced encryption ensures documents remain unreadable without
            proper authorization.
          </p>
        </div>

        {/* Card 2 */}
        <div
          data-aos="zoom-in"
          className="p-6 rounded-2xl bg-black shadow-lg border-t-4  border-blue-500 hover:-translate-y-2 transition"
        >
          <h3 className="text-xl  text-indigo-700 font-semibold mb-2">
            Secure Cloud Storage
          </h3>
          <p className=" text-white">
            Encrypted files are stored safely with restricted access control.
          </p>
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-left"
          className="p-6 rounded-2xl bg-black shadow-lg border-t-4 border-blue-500 hover:-translate-y-2 transition"
        >
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            Folder & Tag System
          </h3>
          <p className="text-white">
            Organize files efficiently using folders and custom tags.
          </p>
        </div>

        {/* Card 4 */}
        <div
          data-aos="flip-left"
          className="p-6 rounded-2xl bg-black shadow-lg border-t-4 border-blue-500 hover:-translate-y-2 transition"
        >
          <h3 className="text-xl font-semibold text-indigo-700  mb-2">
            Secure Sharing
          </h3>
          <p className=" text-white">
            Share documents securely without exposing original file data.
          </p>
        </div>

        {/* Card 5 */}
        <div
          data-aos="flip-up"
          className="p-6 rounded-2xl bg-black shadow-lg border-t-4 border-blue-500 hover:-translate-y-2 transition"
        >
          <h3 className="text-xl font-semibold  text-indigo-700  mb-2">
            Storage Monitoring
          </h3>
          <p className="text-white">
            Track used and available storage space in real time.
          </p>
        </div>

        {/* Card 6 */}
        <div
          data-aos="zoom-in-up"
          className="p-6 rounded-2xl bg-black shadow-lg border-t-4 border-blue-500 hover:-translate-y-2 transition"
        >
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            Complaint & Support
          </h3>
          <p className="text-white">
            Report issues easily and receive timely support responses.
          </p>
        </div>

      </div>
    </section>
    </>
  )
}

export default Features