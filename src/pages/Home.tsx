import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Search, Globe, Zap, ArrowRight, Mic } from 'lucide-react';
import spaceHeroBg from '@/assets/space-hero-bg.jpg';
import astronautSpace from '@/assets/astronaut-space.jpg';

export default function Home() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Loading animation
    const timer = setTimeout(() => setIsLoading(false), 2000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-cosmic flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <div className="loading-star w-16 h-16 bg-gradient-stellar rounded-full mx-auto mb-4"></div>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="loading-planet w-3 h-3 bg-accent rounded-full opacity-0"
                style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties}
              ></div>
            ))}
          </div>
          <p className="text-muted-foreground font-orbitron">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stars pt-16"
        style={{
          backgroundImage: `url(${spaceHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-stellar bg-clip-text text-transparent">
              {t('home.title')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in font-orbitron">
            {t('home.subtitle')}
          </p>
          
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in">
            {t('home.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="stellar-glow animate-pulse-glow">
              <Link to="/explore">
                <Rocket className="mr-2 h-5 w-5" />
                {t('home.cta.explore')}
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <Link to="/about">
                {t('home.cta.learn')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-20 left-10 animate-float">
          <div className="w-2 h-2 bg-primary rounded-full animate-twinkle"></div>
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-1 h-1 bg-accent rounded-full animate-twinkle"></div>
        </div>
        <div className="absolute bottom-40 right-32 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-secondary-glow rounded-full animate-twinkle"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-gradient-stellar bg-clip-text text-transparent">
              Explore the Universe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powered by NASA's data and cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="cosmic-shadow hover:stellar-glow transition-all duration-cosmic">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-stellar rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-orbitron font-semibold mb-4">Smart Search</h3>
                <p className="text-muted-foreground">
                  Find exoplanets, stars, and celestial objects with our AI-powered search engine
                </p>
              </CardContent>
            </Card>
            
            <Card className="cosmic-shadow hover:stellar-glow transition-all duration-cosmic">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-nebula rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-orbitron font-semibold mb-4">3D Visualization</h3>
                <p className="text-muted-foreground">
                  Explore planetary systems in stunning 3D with interactive orbit simulations
                </p>
              </CardContent>
            </Card>
            
            <Card className="cosmic-shadow hover:stellar-glow transition-all duration-cosmic">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-aurora rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-orbitron font-semibold mb-4">{t('home.turo.title')}</h3>
                <p className="text-muted-foreground">
                  {t('home.turo.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scrolling Space Elements Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-background to-black overflow-hidden">
        {/* Stars background that moves with scroll */}
        <div 
          className="absolute inset-0 bg-stars opacity-60"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        
        {/* Moon */}
        <div 
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full animate-float"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
          }}
        >
          <div className="absolute inset-2 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full opacity-70"></div>
        </div>
        
        {/* Astronaut */}
        <div 
          className="absolute bottom-40 left-20 w-48 h-48 animate-float"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.1}deg)`,
            animationDelay: '1s'
          }}
        >
          <img 
            src={astronautSpace} 
            alt="Astronaut in space" 
            className="w-full h-full object-cover rounded-full stellar-glow"
          />
        </div>
        
        {/* Additional stars and cosmic elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <div 
              className="bg-white rounded-full"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                opacity: 0.7 + Math.random() * 0.3
              }}
            ></div>
          </div>
        ))}
        
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 bg-gradient-aurora bg-clip-text text-transparent">
              Journey Beyond
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Experience the cosmos like never before with our immersive platform
            </p>
            <Button asChild size="lg" className="nebula-glow animate-pulse-glow">
              <Link to="/explore">
                <Zap className="mr-2 h-5 w-5" />
                Start Exploring
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}