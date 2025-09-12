"use client"

export default function BookSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-2">
          📚 Book &amp; Legacy Documentation
        </h1>
        <p className="text-xl text-rose-700">
          Preserving Wisdom for Future Generations
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-rose-400 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Publications */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-purple-400">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">📖 Biography / Log Book</h2>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-purple-700 mb-2">
                "भक्ति जो बनाये भारत मज़बूत"
              </h3>
              <p className="text-sm text-gray-700 italic mb-3">
                Bhakti Jo Banaye Bharat Mazboot
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-purple-500 mr-2">📝</span>
                  <div>
                    <span className="font-semibold">Content Coverage:</span>
                    <ul className="text-sm text-gray-600 mt-1 ml-4">
                      <li>• Childhood &amp; early spiritual journey</li>
                      <li>• Evolution of teachings &amp; philosophy</li>
                      <li>• Social reforms &amp; community impact</li>
                      <li>• Global reach &amp; international influence</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-purple-500 mr-2">🌍</span>
                  <div>
                    <span className="font-semibold">Multilingual Publication:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="bg-purple-100 px-2 py-1 rounded-full text-xs">Hindi</span>
                      <span className="bg-rose-100 px-2 py-1 rounded-full text-xs">English</span>
                      <span className="bg-purple-100 px-2 py-1 rounded-full text-xs">Regional Languages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-rose-700 mb-2">Compilation of Teachings</h3>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border-l-2 border-rose-300">
                  <h4 className="font-semibold text-rose-600">"Shiv Bhakti for Modern Life"</h4>
                  <p className="text-xs text-gray-600">Teachings + practical applications in youth, family, society</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-purple-300">
                  <h4 className="font-semibold text-purple-600">"Pandit Ji Quotes"</h4>
                  <p className="text-xs text-gray-600">Inspirational collection for daily life guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Digital Archive & Distribution */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-rose-400">
            <h2 className="text-2xl font-bold text-rose-800 mb-4">💻 Digital Archive</h2>
            
            <div className="space-y-4">
              <div className="bg-rose-50 p-4 rounded-lg">
                <h3 className="font-semibold text-rose-700 mb-2">Comprehensive Platform</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="text-rose-500 mr-2">🌐</span>
                    <span>Dedicated website &amp; mobile app</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-rose-500 mr-2">🎥</span>
                    <span>Complete pravachans archive</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-rose-500 mr-2">📰</span>
                    <span>Media coverage documentation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-rose-500 mr-2">🤝</span>
                    <span>Seva campaigns database</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-rose-500 mr-2">🔍</span>
                    <span>Researcher-friendly search tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Access Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-2 bg-white rounded">
                    <div className="text-lg">🔓</div>
                    <div className="text-xs font-semibold">Open Access</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded">
                    <div className="text-lg">📱</div>
                    <div className="text-xs font-semibold">Mobile Optimized</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded">
                    <div className="text-lg">🔍</div>
                    <div className="text-xs font-semibold">Advanced Search</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded">
                    <div className="text-lg">📊</div>
                    <div className="text-xs font-semibold">Analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-purple-400">
            <h2 className="text-xl font-bold text-purple-800 mb-4">📈 Distribution Strategy</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-700">Academic Distribution</h4>
                  <p className="text-xs text-gray-600">University libraries, research institutions</p>
                </div>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-rose-700">Commercial Publishing</h4>
                  <p className="text-xs text-gray-600">Major publishers, online platforms</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-700">Community Outreach</h4>
                  <p className="text-xs text-gray-600">Ashrams, spiritual centers, devotee networks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-gradient-to-r from-purple-400 to-rose-400 rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold text-center mb-4">Expected Impact</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm">Books Distributed</div>
              </div>
              <div>
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm">Digital Archive Views</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}