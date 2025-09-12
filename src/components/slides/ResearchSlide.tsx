"use client"

export default function ResearchSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-2">
          📚 Research &amp; PhD Opportunities
        </h1>
        <p className="text-xl text-green-700">
          Academic Legacy &amp; Scholarly Recognition
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1 - Book Publications */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-green-400">
            <h2 className="text-xl font-bold text-green-800 mb-4">📖 Book Publications</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-2">Biography</h3>
                <p className="text-sm text-gray-700 font-medium mb-2">
                  "Pandit Pradeep Mishra: Life, Teachings &amp; Global Impact"
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Well-researched comprehensive biography</li>
                  <li>• Spiritual journey documentation</li>
                  <li>• Global impact analysis</li>
                </ul>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-700 mb-2">Teachings</h3>
                <p className="text-sm text-gray-700 font-medium mb-2">
                  Academic publication of selected kathas
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• English translation of key teachings</li>
                  <li>• Scholarly impact analysis</li>
                  <li>• Modern application framework</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-400 to-teal-400 rounded-lg p-4 text-white text-center">
            <h3 className="font-bold mb-2">Publication Timeline</h3>
            <div className="text-2xl font-bold">12-18</div>
            <div className="text-sm">Months</div>
          </div>
        </div>

        {/* Column 2 - University Partnerships */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-teal-400">
            <h2 className="text-xl font-bold text-teal-800 mb-4">🏛️ University Tie-ups</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-teal-700 mb-3">Indian Universities</h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-teal-50 p-2 rounded text-center text-sm">
                    <div className="font-semibold">BHU</div>
                    <div className="text-xs text-gray-600">Religious Studies</div>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center text-sm">
                    <div className="font-semibold">JNU</div>
                    <div className="text-xs text-gray-600">Philosophy Dept</div>
                  </div>
                  <div className="bg-teal-50 p-2 rounded text-center text-sm">
                    <div className="font-semibold">Delhi University</div>
                    <div className="text-xs text-gray-600">Sanskrit Studies</div>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center text-sm">
                    <div className="font-semibold">Nalanda University</div>
                    <div className="text-xs text-gray-600">Buddhist Studies</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-green-700 mb-3">International</h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-green-50 p-2 rounded text-center text-sm">
                    <div className="font-semibold">Oxford University</div>
                    <div className="text-xs text-gray-600">Theology Faculty</div>
                  </div>
                  <div className="bg-teal-50 p-2 rounded text-center text-sm">
                    <div className="font-semibold">Harvard Divinity</div>
                    <div className="text-xs text-gray-600">Comparative Religion</div>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center text-sm">
                    <div className="font-semibold">SOAS London</div>
                    <div className="text-xs text-gray-600">South Asian Studies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 - Research Programs */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-cyan-400">
            <h2 className="text-xl font-bold text-cyan-800 mb-4">🎓 Research Programs</h2>
            
            <div className="space-y-4">
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h3 className="font-semibold text-cyan-700 mb-2">Fellowship Program</h3>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  "Pandit Pradeep Mishra Fellowship for Spiritual Studies"
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Annual stipend for researchers</li>
                  <li>• Guidance from expert faculty</li>
                  <li>• Access to exclusive materials</li>
                  <li>• Publication support</li>
                </ul>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-700 mb-2">Research Areas</h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-white p-2 rounded text-xs text-center">
                    Modern Spirituality
                  </div>
                  <div className="bg-white p-2 rounded text-xs text-center">
                    Social Impact of Bhakti
                  </div>
                  <div className="bg-white p-2 rounded text-xs text-center">
                    Cultural Renaissance
                  </div>
                  <div className="bg-white p-2 rounded text-xs text-center">
                    Youth Spiritual Engagement
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg p-4 text-white">
            <h3 className="font-bold text-center mb-3">Expected Research Output</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">3-5</div>
                <div className="text-xs">PhD Scholars</div>
              </div>
              <div>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs">Research Papers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}