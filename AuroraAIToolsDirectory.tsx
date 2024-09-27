import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight, Sun, Moon } from "lucide-react"

export default function AuroraAIToolsDirectory() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white' : 'bg-gradient-to-br from-slate-100 to-white text-slate-900'}`}>
      <header className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AAILogo-jh30eSI4YijL5XMohREnyLMIKPbEo3.png" alt="Aurora AI Logo" className="h-12 w-12" />
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Aurora AI Tools Directory</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li><a href="#" className={`${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Home</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Categories</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>About</a></li>
              <li><a href="#" className={`${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Contact</a></li>
            </ul>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Discover the Perfect AI Tool for Your Needs</h2>
          <div className="flex max-w-md mx-auto">
            <Input type="search" placeholder="Search AI tools..." className={`rounded-r-none ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'}`} />
            <Button type="submit" className={`rounded-l-none ${isDarkMode ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-200 hover:bg-slate-300 text-slate-900'}`}>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h3 className={`text-3xl font-semibold mb-8 text-center ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Popular Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["Text Generation", "Image Generation", "Voice AI", "Data Analysis", "Chatbots", "Code Assistance", "Video Editing", "Music Creation"].map((category) => (
              <Card key={category} className={`${isDarkMode ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' : 'bg-white border-slate-200 hover:bg-slate-100'} transition-colors`}>
                <CardHeader>
                  <CardTitle className={isDarkMode ? 'text-slate-200' : 'text-slate-800'}>{category}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className={`w-full justify-between ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-500' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'}`}>
                    Explore <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h3 className={`text-3xl font-semibold mb-8 text-center ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Featured AI Tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "AIWriter Pro", category: "Text Generation", description: "Advanced AI-powered writing assistant for content creators and marketers." },
              { name: "ImageMind", category: "Image Generation", description: "Create stunning visuals with this state-of-the-art AI image generator." },
              { name: "VoiceGenius", category: "Voice AI", description: "Transform your voice or generate realistic speech with this powerful voice AI tool." },
              { name: "DataSense AI", category: "Data Analysis", description: "Uncover insights from your data with AI-driven analysis and visualization." },
              { name: "ChatCraft", category: "Chatbots", description: "Build intelligent chatbots for customer service and engagement." },
              { name: "CodeCompanion", category: "Code Assistance", description: "Boost your coding productivity with AI-powered code suggestions and debugging." },
            ].map((tool) => (
              <Card key={tool.name} className={`${isDarkMode ? 'bg-slate-700 border-slate-600 hover:shadow-slate-500/30' : 'bg-white border-slate-200 hover:shadow-slate-300/30'} hover:shadow-lg transition-all`}>
                <CardHeader>
                  <CardTitle className={isDarkMode ? 'text-slate-200' : 'text-slate-800'}>{tool.name}</CardTitle>
                  <CardDescription className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>{tool.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>{tool.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Badge variant="secondary" className={isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700'}>{tool.category}</Badge>
                  <Button asChild className={isDarkMode ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-200 hover:bg-slate-300 text-slate-900'}>
                    <a href={`#${tool.name.toLowerCase().replace(/\s+/g, '-')}`}>Learn More</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} mt-16 py-12`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>About Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Our Mission</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Team</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Blog</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Guides</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Privacy Policy</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Terms of Service</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Affiliate Disclosure</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Twitter</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>LinkedIn</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className={`mt-12 text-center text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            © 2023 Aurora AI Tools Directory. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}