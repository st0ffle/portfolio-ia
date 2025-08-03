"use client"

import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function HeroAnimationTest() {
  const [isDev, setIsDev] = useState(true)

  // Animation Spring optimisée pour performance
  const slideAnimation = useSpring({
    transform: isDev ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isDev ? 1 : 0.8,
    config: { 
      tension: 300, 
      friction: 30,
      precision: 0.01 // Optimisation performance
    }
  })

  const toggleMode = () => setIsDev(!isDev)

  return (
    <div className="relative h-96 w-full bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden rounded-lg">
      {/* Background States */}
      <div className="absolute inset-0 flex">
        {/* Dev Side */}
        <div className="w-1/2 bg-blue-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-800">👨‍💻 Développeur</h2>
            <p className="text-blue-600">Mathieu Gonon</p>
            <p className="text-sm text-blue-500">React • Next.js • TypeScript</p>
          </div>
        </div>
        
        {/* AI Side */}
        <div className="w-1/2 bg-purple-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-purple-800">🤖 IA Expert</h2>
            <p className="text-purple-600">Mathieu.AI</p>
            <p className="text-sm text-purple-500">Claude • GPT • Automation</p>
          </div>
        </div>
      </div>

      {/* Animated Slider Overlay */}
      <animated.div 
        style={slideAnimation}
        className="absolute inset-0 w-1/2 bg-white/20 backdrop-blur-sm border-r-4 border-white"
      >
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {isDev ? '👨‍💻' : '🤖'}
            </div>
            <h1 className="text-3xl font-bold">
              {isDev ? 'Développeur' : 'IA Expert'}
            </h1>
          </div>
        </div>
      </animated.div>

      {/* Control Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Button onClick={toggleMode} variant="outline">
          Basculer vers {isDev ? 'IA' : 'Dev'}
        </Button>
      </div>
    </div>
  )
}