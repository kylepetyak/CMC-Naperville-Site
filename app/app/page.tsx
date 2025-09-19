import { ArrowRight, Star, Users, Award, Play } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-green-800 to-blue-900">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            <div className="flex flex-col items-start">
              <div className="text-lg font-bold text-blue-900 tracking-wide">
                CAMELBACK MEDICAL CENTERS
              </div>
              <div className="text-sm font-bold text-red-600 tracking-wider">
                THE PAIN RELIEF CLINIC
              </div>
            </div>
            <a 
              href="tel:(630)555-1212"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              (630) 555-1212
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              <Award className="h-4 w-4" />
              Experience The Camelback Difference
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Are You Frustrated That Your Body
              <br />
              <span className="text-green-300">Isn't Allowing You To Do</span>
              <br />
              <span className="text-blue-300">Everything You Love?</span>
            </h1>
            
            {/* Pain Points */}
            <div className="max-w-4xl mx-auto text-left bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-4">
              <p className="text-lg text-white flex items-start gap-3">
                <span className="text-red-300 mt-1">•</span>
                Are you finding yourself taking pain medication more regularly?
              </p>
              <p className="text-lg text-white flex items-start gap-3">
                <span className="text-red-300 mt-1">•</span>
                Is your sleep interrupted because you're tossing and turning from pain?
              </p>
              <p className="text-lg text-white flex items-start gap-3">
                <span className="text-red-300 mt-1">•</span>
                Do you want to get back to sports or activities with the kids only to get sidelined for days afterward?
              </p>
              <p className="text-lg text-white flex items-start gap-3">
                <span className="text-red-300 mt-1">•</span>
                Are you feeling older than your age?
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#schedule"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition-colors"
              >
                Schedule Appointment
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="tel:(630)555-1212"
                className="bg-white/10 border border-white/20 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
              >
                (630) 555-1212
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-blue-100 font-medium">500+ 5-Star Reviews</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-300" />
                <span className="text-blue-100 font-medium">20,000+ Patients Served</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-green-300" />
                <span className="text-blue-100 font-medium">500,000+ Adjustments</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
