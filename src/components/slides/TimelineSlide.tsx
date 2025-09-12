"use client"

export default function TimelineSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-2">
          ⏳ Integrated Execution Timeline
        </h1>
        <p className="text-xl text-green-700">
          3-Year Strategic Implementation Plan
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mt-3"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 to-green-400"></div>

        {/* Year 1 */}
        <div className="relative mb-12">
          <div className="flex items-center">
            <div className="w-1/2 pr-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-emerald-400 ml-auto">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-emerald-800">Year 1: Foundation</h2>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-emerald-500 mr-2">📚</span>
                    <div>
                      <h3 className="font-semibold text-emerald-700">Book Publication</h3>
                      <p className="text-sm text-gray-600">Biography + Teachings compilation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-emerald-500 mr-2">📊</span>
                    <div>
                      <h3 className="font-semibold text-emerald-700">Impact Report</h3>
                      <p className="text-sm text-gray-600">Launch Spiritual Impact Report</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-emerald-500 mr-2">🏆</span>
                    <div>
                      <h3 className="font-semibold text-emerald-700">Padma Shri Nomination</h3>
                      <p className="text-sm text-gray-600">Begin nomination process</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-emerald-500 mr-2">🎓</span>
                    <div>
                      <h3 className="font-semibold text-emerald-700">University Talks</h3>
                      <p className="text-sm text-gray-600">Start discussions with Indian universities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeline Marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
            
            <div className="w-1/2 pl-8">
              <div className="bg-emerald-100 rounded-lg p-4">
                <h3 className="font-bold text-emerald-800 mb-2">Key Milestones</h3>
                <ul className="text-sm text-emerald-700 space-y-1">
                  <li>• Foundation establishment</li>
                  <li>• Academic partnerships initiation</li>
                  <li>• Media campaign launch</li>
                  <li>• Documentation completion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Year 2 */}
        <div className="relative mb-12">
          <div className="flex items-center">
            <div className="w-1/2 pr-8">
              <div className="bg-green-100 rounded-lg p-4 ml-auto">
                <h3 className="font-bold text-green-800 mb-2">Key Achievements</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• International partnerships</li>
                  <li>• Global summit success</li>
                  <li>• First doctorate secured</li>
                  <li>• Research program launch</li>
                </ul>
              </div>
            </div>
            
            {/* Timeline Marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
            
            <div className="w-1/2 pl-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border-r-4 border-green-400">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-green-800">Year 2: Expansion</h2>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">🌍</span>
                    <div>
                      <h3 className="font-semibold text-green-700">Global Summit</h3>
                      <p className="text-sm text-gray-600">Host "Global Spiritual &amp; Peace Summit"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">🤝</span>
                    <div>
                      <h3 className="font-semibold text-green-700">University Partnerships</h3>
                      <p className="text-sm text-gray-600">Secure 1-2 international university ties</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">💰</span>
                    <div>
                      <h3 className="font-semibold text-green-700">Fellowship Launch</h3>
                      <p className="text-sm text-gray-600">Launch Pandit Ji Fellowship program</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">🎓</span>
                    <div>
                      <h3 className="font-semibold text-green-700">Honorary Doctorate</h3>
                      <p className="text-sm text-gray-600">Secure first foreign university doctorate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Year 3 */}
        <div className="relative">
          <div className="flex items-center">
            <div className="w-1/2 pr-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-lime-400 ml-auto">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    3
                  </div>
                  <h2 className="text-2xl font-bold text-lime-800">Year 3: Recognition</h2>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-lime-500 mr-2">📢</span>
                    <div>
                      <h3 className="font-semibold text-lime-700">Padma Shri Campaign</h3>
                      <p className="text-sm text-gray-600">Widespread media + community campaign</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-lime-500 mr-2">📚</span>
                    <div>
                      <h3 className="font-semibold text-lime-700">Academic Research</h3>
                      <p className="text-sm text-gray-600">Encourage 3-5 PhD/MPhil submissions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-lime-500 mr-2">🌐</span>
                    <div>
                      <h3 className="font-semibold text-lime-700">Global Expansion</h3>
                      <p className="text-sm text-gray-600">Expand international presence via diaspora</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-lime-500 mr-2">🏆</span>
                    <div>
                      <h3 className="font-semibold text-lime-700">Award Achievement</h3>
                      <p className="text-sm text-gray-600">Target Padma Shri award recognition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeline Marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-lime-500 rounded-full border-4 border-white shadow-lg"></div>
            
            <div className="w-1/2 pl-8">
              <div className="bg-lime-100 rounded-lg p-4">
                <h3 className="font-bold text-lime-800 mb-2">Final Outcomes</h3>
                <ul className="text-sm text-lime-700 space-y-1">
                  <li>• Padma Shri recognition</li>
                  <li>• Multiple doctorates</li>
                  <li>• Active research scholars</li>
                  <li>• Global spiritual influence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="mt-8 bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 rounded-lg p-6 text-white">
        <h3 className="text-2xl font-bold text-center mb-4">Overall Success Metrics</h3>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold">1</div>
            <div className="text-sm">Padma Shri Award</div>
          </div>
          <div>
            <div className="text-3xl font-bold">2-3</div>
            <div className="text-sm">Honorary Doctorates</div>
          </div>
          <div>
            <div className="text-3xl font-bold">5+</div>
            <div className="text-sm">PhD Scholars</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm">Research Publications</div>
          </div>
        </div>
      </div>
    </div>
  )
}