"use client"

export default function MessagingSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-2">
          💬 Messaging Framework
        </h1>
        <p className="text-xl text-violet-700">
          Strategic Communication for Multi-Platform Recognition
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Domestic Messaging - Padma Shri */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-orange-400">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🏆</div>
              <h2 className="text-xl font-bold text-orange-800">Domestic (Padma Shri)</h2>
              <p className="text-sm text-orange-600">National Recognition Campaign</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-orange-700 text-center mb-3">Core Message</h3>
              <p className="text-center text-lg font-semibold text-orange-800 font-devanagari">
                "पंडित जी = भक्ति + सेवा + समाज सुधार"
              </p>
              <p className="text-center text-sm text-orange-600 mt-2">
                Pandit Ji = Bhakti + Seva + Samaj Sudhar
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-orange-700">Key Messaging Pillars:</h4>
              
              <div className="bg-orange-50 p-3 rounded-lg">
                <h5 className="font-semibold text-orange-800 mb-1">🕉️ Spiritual Leadership</h5>
                <p className="text-xs text-gray-700">Modern interpretation of ancient wisdom, youth engagement in spirituality</p>
              </div>
              
              <div className="bg-amber-50 p-3 rounded-lg">
                <h5 className="font-semibold text-amber-800 mb-1">🤝 Social Service</h5>
                <p className="text-xs text-gray-700">Clean Ganga initiatives, Beti Bachao campaigns, community upliftment</p>
              </div>
              
              <div className="bg-orange-50 p-3 rounded-lg">
                <h5 className="font-semibold text-orange-800 mb-1">🎯 Cultural Preservation</h5>
                <p className="text-xs text-gray-700">Preserving Indian values while embracing modernity</p>
              </div>
              
              <div className="bg-amber-50 p-3 rounded-lg">
                <h5 className="font-semibold text-amber-800 mb-1">🌟 National Unity</h5>
                <p className="text-xs text-gray-700">Promoting harmony across communities and regions</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg text-white text-center">
              <p className="font-semibold text-sm">Target: Government Officials, Media, Community Leaders</p>
            </div>
          </div>
        </div>

        {/* International Messaging - Doctorate */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-400">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🎓</div>
              <h2 className="text-xl font-bold text-blue-800">International (Doctorate)</h2>
              <p className="text-sm text-blue-600">Global Academic Recognition</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-blue-700 text-center mb-3">Core Message</h3>
              <p className="text-center text-lg font-semibold text-blue-800">
                "Voice of Peace, Culture &amp; Universal Spirituality"
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700">Key Messaging Pillars:</h4>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-1">🕊️ Global Peace</h5>
                <p className="text-xs text-gray-700">Interfaith dialogue, conflict resolution through spirituality</p>
              </div>
              
              <div className="bg-indigo-50 p-3 rounded-lg">
                <h5 className="font-semibold text-indigo-800 mb-1">🌍 Cultural Bridge</h5>
                <p className="text-xs text-gray-700">Connecting Eastern wisdom with Western academia</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-1">📚 Educational Innovation</h5>
                <p className="text-xs text-gray-700">Modern pedagogy in spiritual education</p>
              </div>
              
              <div className="bg-indigo-50 p-3 rounded-lg">
                <h5 className="font-semibold text-indigo-800 mb-1">🤲 Humanitarian Values</h5>
                <p className="text-xs text-gray-700">Universal compassion, service to humanity</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg text-white text-center">
              <p className="font-semibold text-sm">Target: International Universities, Think Tanks, Diaspora</p>
            </div>
          </div>
        </div>

        {/* Academic Messaging - Research */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-purple-400">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">📚</div>
              <h2 className="text-xl font-bold text-purple-800">Academic (Research)</h2>
              <p className="text-sm text-purple-600">Scholarly Documentation</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-purple-700 text-center mb-3">Core Message</h3>
              <p className="text-center text-lg font-semibold text-purple-800">
                "Living Case Study of Spiritual Renaissance"
              </p>
              <p className="text-center text-sm text-purple-600 mt-1">
                in 21st Century
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-purple-700">Key Research Areas:</h4>
              
              <div className="bg-purple-50 p-3 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-1">🔬 Contemporary Spirituality</h5>
                <p className="text-xs text-gray-700">Modern applications of ancient spiritual practices</p>
              </div>
              
              <div className="bg-violet-50 p-3 rounded-lg">
                <h5 className="font-semibold text-violet-800 mb-1">📊 Social Impact Studies</h5>
                <p className="text-xs text-gray-700">Quantifiable effects of spiritual leadership on society</p>
              </div>
              
              <div className="bg-purple-50 p-3 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-1">🧠 Behavioral Analysis</h5>
                <p className="text-xs text-gray-700">Impact of bhakti on youth behavior and values</p>
              </div>
              
              <div className="bg-violet-50 p-3 rounded-lg">
                <h5 className="font-semibold text-violet-800 mb-1">🌐 Digital Spirituality</h5>
                <p className="text-xs text-gray-700">Technology's role in spreading spiritual teachings</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-lg text-white text-center">
              <p className="font-semibold text-sm">Target: Universities, Researchers, Academic Journals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Platform Strategy */}
      <div className="mt-6 bg-white rounded-lg p-6 shadow-lg border-t-4 border-gradient-to-r border-indigo-400">
        <h2 className="text-2xl font-bold text-indigo-800 text-center mb-6">Cross-Platform Communication Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-3xl mb-2">📺</div>
            <h3 className="font-semibold text-orange-700 mb-2">Traditional Media</h3>
            <p className="text-xs text-gray-600">TV interviews, newspaper articles, magazine features</p>
          </div>
          
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-semibold text-blue-700 mb-2">Digital Platforms</h3>
            <p className="text-xs text-gray-600">Social media campaigns, YouTube content, podcasts</p>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="font-semibold text-purple-700 mb-2">Academic Channels</h3>
            <p className="text-xs text-gray-600">Research papers, conference presentations, journals</p>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl mb-2">🤝</div>
            <h3 className="font-semibold text-green-700 mb-2">Community Outreach</h3>
            <p className="text-xs text-gray-600">Satsangs, ashram networks, devotee testimonials</p>
          </div>
        </div>
      </div>
    </div>
  )
}