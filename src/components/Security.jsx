import React from 'react'

function Security() {
  return (
    <>
      <section
  id="security"
  className="py-28 relative bg-black"
>

        <div className="max-w-6xl mx-auto px-4">

          {/* TITLE */}
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold text-violet-700">
              How We Secure Your Documents
            </h2>
            <p className="text-white mt-4">
              Every file follows a protected digital journey
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-r from-white to-white transform -translate-x-1/2"></div>

            {/* STEP 1 */}
            <div className="flex mb-20 items-center">
              <div className="w-1/2 text-right pr-10" data-aos="fade-right">
                <h3 className="text-xl font-semibold text-blue-700">
                  Secure Upload
                </h3>
                <p className="text-white mb-2">
                  Files are instantly protected during upload.
                </p>
                <img style={{width:'100px',height:'100px',borderRadius:'50%'}} className="w-34 h-32 ms-90" src="./cloudup-gif.gif" alt="" />
              </div>
              <div className="w-10 h-10 bg-violet-700 rounded-full z-10"></div>
              <div className="w-1/2"></div>
            </div>

            {/* STEP 2 */}
            <div className="flex mb-20 items-center">
              <div className="w-1/2"></div>
              <div className="w-10 h-10 bg-violet-700 rounded-full z-10"></div>
              <div className="w-1/2 pl-10" data-aos="fade-left">
                <h3 className="text-xl font-semibold text-blue-700">
                  AES-256 Encryption
                </h3>
                <p className="text-white mb-2">
                  Data is encrypted before storage.
                </p>
                <img style={{width:'100px',height:'100px',borderRadius:'50%'}} className="w-34 h-38" src="./encryption-gif.gif" alt="" />
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex mb-20 items-center">
              <div className="w-1/2 text-right pr-10" data-aos="fade-right">
                <h3 className="text-xl font-semibold text-blue-700">
                  Secure Cloud Storage
                </h3>
                <p className="text-white mb-2">
                  Stored in isolated, access-controlled vaults.
                </p>
                <img style={{width:'100px',height:'100px',borderRadius:'50%'}} className="w-34 h-34 ms-90" src="./store-gif.gif" alt="" />
              </div>
              <div className="w-10 h-10 bg-violet-700 rounded-full z-10"></div>
              <div className="w-1/2"></div>
            </div>

            {/* STEP 4 */}
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="w-10 h-10 bg-violet-700 rounded-full z-10"></div>
              <div className="w-1/2 pl-10" data-aos="fade-left">
                <h3 className="text-xl font-semibold text-blue-700">
                  Continuous Monitoring
                </h3>
                <p className="text-white mb-2">
                  Activity is tracked to prevent threats.
                </p>
                <img
                style={{width:'100px',height:'100px',borderRadius:'50%'}}
                  width="100px"
                  height="240px"
                  src="./security-gif.gif"
                  alt=""
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Security
