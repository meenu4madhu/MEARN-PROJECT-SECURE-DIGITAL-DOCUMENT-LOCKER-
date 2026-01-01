import React from 'react'

function Servicesection() {
  return (
    <>
    <section
      id="services"
      data-aos="zoom-in"
      className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-800 px-4 min-h-screen"
      
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">
        How SecureDoc Works
      </h2>

      <p className="text-center text-white max-w-2xl mx-auto mb-16">
        SecureDoc follows a simple and secure workflow that protects your
        documents while giving you full control.
      </p>

      {/* Workflow Steps */}
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Step 1 */}
        <div
          data-aos="fade-right"
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <img
          style={{width:'100px',height:'100px',borderRadius:'50%'}}
            src="./login-gif.gif"
            alt="Register"
            className="w-40"
          />
          <div>
            <h3 className="text-xl font-semibold text-indigo-700">
              User Registration & Login
            </h3>
            <p className="text-white mt-2">
              Users create an account and securely log in to access their
              personal digital locker.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div
          data-aos="fade-left"
          className="flex flex-col md:flex-row-reverse items-center gap-8"
        >
          <img
          style={{width:'90px',height:'90px',borderRadius:'50%'}}
            src="./upload-gif.gif"
            alt="Upload"
            className="w-40"
          />
          <div>
            <h3 className="text-xl font-semibold text-indigo-700">
              Secure Document Upload
            </h3>
            <p className="text-white mt-2">
              Files are encrypted using <span className="text-indigo-700 font-semibold">AES-256</span> before
              cloud storage.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div
          data-aos="fade-right"
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <img
          style={{width:'100px',height:'100px',borderRadius:'50%'}}
            src="./files-organization.gif"
            alt="Organize"
            className="w-40"
          />
          <div>
            <h3 className="text-xl font-semibold text-indigo-700">
              Organize Using Folders & Tags
            </h3>
            <p className="text-white mt-2">
              Users can categorize documents for easy search and access.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div
          data-aos="fade-left"
          className="flex flex-col md:flex-row-reverse items-center gap-8"
        >
           
          <img
          style={{width:'100px',height:'100px',borderRadius:'50%'}}
            src="./share-gif.gif"
            alt="Share"
            className="w-40"
          />
           <img
           style={{width:'100px',height:'100px',borderRadius:'50%'}}
            src="./download.gif"
            alt="Share"
            className="w-40"
          />
          <div>
            <h3 className="text-xl font-semibold text-indigo-700">
              Download & Secure Sharing
            </h3>
            <p className="text-white mt-2">
              Files can be downloaded or shared securely with controlled access.
            </p>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Servicesection