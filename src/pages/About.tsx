import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  Telescope, 
  Globe, 
  Mic, 
  Search, 
  Database,
  Github,
  ExternalLink,
  Users,
  Target,
  Zap
} from 'lucide-react';
import nasaLogo from '@/assets/nasa-logo.png';

const features = [
  {
    icon: Search,
    title: 'Smart Search',
    description: 'AI-powered search across NASA\'s exoplanet database with semantic understanding'
  },
  {
    icon: Globe,
    title: '3D Visualization',
    description: 'Interactive 3D models of planetary systems with realistic orbital mechanics'
  },
  {
    icon: Mic,
    title: 'TURO Voice Assistant',
    description: 'Voice-controlled exploration with natural language commands'
  },
  {
    icon: Database,
    title: 'Real NASA Data',
    description: 'Direct integration with NASA Exoplanet Archive and Image Library'
  },
  {
    icon: Users,
    title: 'Multi-language Support',
    description: 'Available in English, Russian, Spanish, and more languages'
  },
  {
    icon: Telescope,
    title: 'Educational Content',
    description: 'Comprehensive astronomy information and planetary data'
  }
];

const team = [
  {
    role: 'Project Lead',
    description: 'Space exploration enthusiast and full-stack developer'
  },
  {
    role: 'Data Scientist',
    description: 'NASA data integration and machine learning specialist'
  },
  {
    role: 'UI/UX Designer', 
    description: 'Cosmic interface design and user experience expert'
  },
  {
    role: 'Astronomy Consultant',
    description: 'Astrophysicist ensuring scientific accuracy'
  }
];

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img src={nasaLogo} alt="NASA" className="h-16 w-16" />
              <h1 className="text-5xl md:text-6xl font-orbitron font-bold bg-gradient-stellar bg-clip-text text-transparent">
                Nextera
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-orbitron">
              Celestial Knowledge & 3D Observatory
            </p>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
              Nextera transforms space exploration by combining NASA's vast astronomical databases 
              with cutting-edge 3D visualization and AI-powered search capabilities. Our mission is 
              to make the universe more accessible to researchers, educators, and space enthusiasts worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">NASA Powered</Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent">Open Source</Badge>
              <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">International</Badge>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mb-16">
            <Card className="cosmic-shadow stellar-glow">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-orbitron bg-gradient-stellar bg-clip-text text-transparent">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-stellar rounded-full flex items-center justify-center mx-auto">
                      <Target className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold">Accessibility</h3>
                    <p className="text-muted-foreground">
                      Make space exploration data accessible to everyone, regardless of technical background
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-nebula rounded-full flex items-center justify-center mx-auto">
                      <Zap className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold">Innovation</h3>
                    <p className="text-muted-foreground">
                      Push the boundaries of data visualization and human-computer interaction in space science
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-aurora rounded-full flex items-center justify-center mx-auto">
                      <Users className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold">Community</h3>
                    <p className="text-muted-foreground">
                      Foster a global community of space enthusiasts and researchers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-center mb-12 bg-gradient-stellar bg-clip-text text-transparent">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="cosmic-shadow hover:stellar-glow transition-all duration-cosmic">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-stellar rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-center mb-12 bg-gradient-stellar bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <Card className="cosmic-shadow">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <h4 className="font-orbitron font-semibold mb-2">Frontend</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>React + TypeScript</p>
                      <p>Vite</p>
                      <p>Tailwind CSS</p>
                      <p>React Three Fiber</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-orbitron font-semibold mb-2">Backend</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Supabase</p>
                      <p>PostgreSQL</p>
                      <p>Edge Functions</p>
                      <p>Real-time APIs</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-orbitron font-semibold mb-2">AI & ML</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>TensorFlow</p>
                      <p>Vector Search</p>
                      <p>NLP Processing</p>
                      <p>Web Speech API</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-orbitron font-semibold mb-2">Data Sources</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>NASA Exoplanet Archive</p>
                      <p>NASA Image Library</p>
                      <p>TESS Mission Data</p>
                      <p>Kepler Archive</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-center mb-12 bg-gradient-stellar bg-clip-text text-transparent">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="cosmic-shadow hover:stellar-glow transition-all duration-cosmic">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-nebula rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <h3 className="font-orbitron font-semibold mb-2">{member.role}</h3>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Open Source & Contact */}
          <div className="text-center mb-16">
            <Card className="cosmic-shadow stellar-glow">
              <CardContent className="p-8">
                <h2 className="text-3xl font-orbitron font-bold mb-6 bg-gradient-stellar bg-clip-text text-transparent">
                  Open Source & Community
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Nextera is built as an open-source project, encouraging collaboration from the global 
                  space exploration community. Contribute, suggest features, or report issues on our GitHub repository.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="stellar-glow">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Button>
                  <Button size="lg" variant="outline">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Attribution */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              This research has made use of the NASA Exoplanet Archive, which is operated by the 
              California Institute of Technology, under contract with the National Aeronautics and Space Administration.
            </p>
            <p>
              Built with ❤️ for space exploration and scientific discovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}