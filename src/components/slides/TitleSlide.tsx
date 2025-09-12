"use client"

export default function TitleSlide() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute bottom-10 right-10 text-6xl">🙏</div>
        <div className="absolute top-1/2 left-1/4 text-4xl transform -translate-x-1/2 -translate-y-1/2">📿</div>
      </div>
      
      <div className="text-center z-10 px-8">
        {/* Pandit Ji's Photo Placeholder */}
        <div className="mx-auto mb-8 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bac08758-2d77-4c09-abfb-8c69cbfb8a79.png" 
            alt="Pandit Pradeep Mishra Ji - Professional Portrait in Traditional Attire"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13291d99-bc7d-4d26-9936-f662eba782cd.png";
            }}
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-devanagari">
          पंडित प्रदीप मिश्रा जी
        </h1>
        
        <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Recognition &amp; Honors
        </h2>
        
        <h3 className="text-2xl md:text-3xl font-medium mb-8">
          Strategic Plan
        </h3>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          A comprehensive roadmap for achieving national and international recognition through 
          spiritual leadership, social service, and cultural contributions
        </p>

        {/* Key Highlights */}
        <div className="flex flex-wrap justify-center gap-4 text-lg font-medium">
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🏆 Padma Shri</span>
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🎓 Honorary Doctorate</span>
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">📚 Research Legacy</span>
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🌍 Global Impact</span>
        </div>

        {/* Bottom Quote */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-lg font-devanagari italic opacity-90">
            "भक्ति जो बनाये भारत मज़बूत"
          </p>
        </div>
      </div>
    </div>
  )
}