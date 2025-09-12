"use client"

export default function PadmaShriSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50 p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-2">
          🏆 Padma Shri Award Strategy
        </h1>
        <p className="text-xl text-amber-700">
          भारत का चौथा सर्वोच्च नागरिक सम्मान
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {/* Left Column - Award Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-orange-400">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Award Overview</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">📜</span>
                <span>4th highest civilian award in India</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">🎯</span>
                <span>Awarded for Art, Literature, Education, Spiritualism, Social Service</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">📅</span>
                <span>Nominations open: July-September annually</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">🌐</span>
                <span>Website: padmaawards.gov.in</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-amber-400">
            <h3 className="text-xl font-bold text-amber-800 mb-3">Impact Areas</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-2xl mb-2">🕉️</div>
                <div className="text-sm font-semibold">Spiritualism</div>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-lg">
                <div className="text-2xl mb-2">🎓</div>
                <div className="text-sm font-semibold">Education</div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-2xl mb-2">🤝</div>
                <div className="text-sm font-semibold">Social Service</div>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-lg">
                <div className="text-2xl mb-2">🎨</div>
                <div className="text-sm font-semibold">Cultural Art</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Implementation Steps */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-orange-800 mb-6">Implementation Steps</h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="text-lg font-bold text-orange-700 mb-2">1. Nomination Process</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Create strong, well-drafted dossier</li>
                  <li>• Document contribution, impact & social service</li>
                  <li>• Highlight national/global recognition</li>
                  <li>• Submit during July-September window</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-amber-400 pl-4">
                <h3 className="text-lg font-bold text-amber-700 mb-2">2. Support Network</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• State government recommendations</li>
                  <li>• MP/MLA endorsement letters</li>
                  <li>• Reputed organizations backing</li>
                  <li>• Media campaigns highlighting impact</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="text-lg font-bold text-orange-700 mb-2">3. Impact Documentation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Publish "Spiritual Impact Report"</li>
                  <li>• Document global followers reach</li>
                  <li>• Highlight seva campaigns (Ganga, Beti Bachao)</li>
                  <li>• Showcase social harmony messages</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Success Metrics</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">10M+</div>
                <div className="text-sm">Global Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm">Seva Campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}