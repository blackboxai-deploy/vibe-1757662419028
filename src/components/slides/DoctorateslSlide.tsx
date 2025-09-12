"use client"

export default function DoctorateslSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-2">
          🎓 International Honorary Doctorate
        </h1>
        <p className="text-xl text-purple-700">
          Doctor Honoris Causa - Global Recognition
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Strategy Overview */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-indigo-400">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Strategy Overview</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🌍</span>
                <div>
                  <h3 className="font-semibold text-indigo-700">Global Universities</h3>
                  <p className="text-gray-600 text-sm">UK, USA, Europe, Asia - Award honorary doctorates for spiritual leadership</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">🤝</span>
                <div>
                  <h3 className="font-semibold text-purple-700">Academic Collaborations</h3>
                  <p className="text-gray-600 text-sm">Through Indian diaspora networks and academic partnerships</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">🏛️</span>
                <div>
                  <h3 className="font-semibold text-indigo-700">Think Tank Integration</h3>
                  <p className="text-gray-600 text-sm">UNESCO-linked organizations and interfaith councils</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-purple-400">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Target Universities</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-indigo-50 rounded-lg text-center">
                <div className="font-semibold text-indigo-700">Oxford University</div>
                <div className="text-xs text-gray-600">UK</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <div className="font-semibold text-purple-700">Harvard Divinity</div>
                <div className="text-xs text-gray-600">USA</div>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg text-center">
                <div className="font-semibold text-indigo-700">SOAS London</div>
                <div className="text-xs text-gray-600">UK</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <div className="font-semibold text-purple-700">Various Asian Unis</div>
                <div className="text-xs text-gray-600">Asia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Execution Plan */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">Execution Plan</h2>
            
            <div className="space-y-6">
              {/* Phase 1 */}
              <div className="border-l-4 border-indigo-400 pl-4">
                <h3 className="text-lg font-bold text-indigo-700 mb-2">Phase 1: Foundation Setup</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Create "Spiritual Peace &amp; Culture Foundation"</li>
                  <li>• Register as legal NGO under Pandit Ji's name</li>
                  <li>• Establish international presence</li>
                  <li>• Build academic advisory board</li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="text-lg font-bold text-purple-700 mb-2">Phase 2: Collaboration</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Partner with international think tanks</li>
                  <li>• Connect with UNESCO-linked organizations</li>
                  <li>• Engage interfaith councils globally</li>
                  <li>• Leverage Indian diaspora networks</li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="border-l-4 border-indigo-400 pl-4">
                <h3 className="text-lg font-bold text-indigo-700 mb-2">Phase 3: Summit &amp; Recognition</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Host "Global Spirituality &amp; Culture Summit"</li>
                  <li>• Invite target universities as partners</li>
                  <li>• Secure foundation recommendation letters</li>
                  <li>• Submit formal doctorate applications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Expected Timeline</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Foundation Setup</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">6 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span>University Partnerships</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">12 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span>First Doctorate Award</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">18 months</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}