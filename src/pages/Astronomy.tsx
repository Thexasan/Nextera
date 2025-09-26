import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Telescope, Atom, Globe, Rocket, Zap, Star } from 'lucide-react';

const planetData = [
  {
    id: 'mercury',
    icon: '☿️',
    name: 'Mercury',
    nameRu: 'Меркурий',
    nameEs: 'Mercurio',
    distance: '58 million km',
    diameter: '4,879 km',
    moons: 0,
    dayLength: '59 Earth days',
    yearLength: '88 Earth days',
    temperature: '427°C to -173°C',
    facts: {
      en: [
        'Closest planet to the Sun',
        'No atmosphere to retain heat',
        'Has extreme temperature variations',
        'Named after Roman messenger god'
      ],
      ru: [
        'Ближайшая к Солнцу планета',
        'Нет атмосферы для удержания тепла',
        'Имеет экстремальные перепады температур',
        'Названа в честь римского бога-посланника'
      ],
      es: [
        'Planeta más cercano al Sol',
        'No tiene atmósfera para retener calor',
        'Tiene variaciones extremas de temperatura',
        'Nombrado por el dios mensajero romano'
      ]
    }
  },
  {
    id: 'venus',
    icon: '♀️',
    name: 'Venus',
    nameRu: 'Венера',
    nameEs: 'Venus',
    distance: '108 million km',
    diameter: '12,104 km',
    moons: 0,
    dayLength: '243 Earth days',
    yearLength: '225 Earth days',
    temperature: '462°C',
    facts: {
      en: [
        'Hottest planet in our solar system',
        'Thick, toxic atmosphere',
        'Rotates backwards compared to most planets',
        'Named after Roman goddess of love'
      ],
      ru: [
        'Самая горячая планета в нашей солнечной системе',
        'Плотная, токсичная атмосфера',
        'Вращается в обратную сторону по сравнению с большинством планет',
        'Названа в честь римской богини любви'
      ],
      es: [
        'Planeta más caliente de nuestro sistema solar',
        'Atmósfera densa y tóxica',
        'Gira hacia atrás comparado con la mayoría de planetas',
        'Nombrado por la diosa romana del amor'
      ]
    }
  },
  {
    id: 'earth',
    icon: '🌍',
    name: 'Earth',
    nameRu: 'Земля',
    nameEs: 'Tierra',
    distance: '150 million km',
    diameter: '12,756 km',
    moons: 1,
    dayLength: '24 hours',
    yearLength: '365.25 days',
    temperature: '-89°C to 58°C',
    facts: {
      en: [
        'Only known planet with life',
        '71% of surface covered by water',
        'Has a protective magnetic field',
        'Perfect distance from Sun for liquid water'
      ],
      ru: [
        'Единственная известная планета с жизнью',
        '71% поверхности покрыто водой',
        'Имеет защитное магнитное поле',
        'Идеальное расстояние от Солнца для жидкой воды'
      ],
      es: [
        'Único planeta conocido con vida',
        '71% de la superficie cubierta por agua',
        'Tiene un campo magnético protector',
        'Distancia perfecta del Sol para agua líquida'
      ]
    }
  },
  {
    id: 'mars',
    icon: '♂️',
    name: 'Mars',
    nameRu: 'Марс',
    nameEs: 'Marte',
    distance: '228 million km',
    diameter: '6,792 km',
    moons: 2,
    dayLength: '24.6 hours',
    yearLength: '687 Earth days',
    temperature: '-87°C to -5°C',
    facts: {
      en: [
        'Known as the Red Planet',
        'Has the largest volcano in the solar system',
        'Polar ice caps made of water and CO2',
        'Evidence of ancient water flows'
      ],
      ru: [
        'Известен как Красная планета',
        'Имеет самый большой вулкан в солнечной системе',
        'Полярные ледяные шапки из воды и CO2',
        'Свидетельства древних водных потоков'
      ],
      es: [
        'Conocido como el Planeta Rojo',
        'Tiene el volcán más grande del sistema solar',
        'Casquetes polares de agua y CO2',
        'Evidencia de antiguos flujos de agua'
      ]
    }
  },
  {
    id: 'jupiter',
    icon: '♃',
    name: 'Jupiter',
    nameRu: 'Юпитер',
    nameEs: 'Júpiter',
    distance: '778 million km',
    diameter: '142,984 km',
    moons: 79,
    dayLength: '9.9 hours',
    yearLength: '12 Earth years',
    temperature: '-108°C',
    facts: {
      en: [
        'Largest planet in our solar system',
        'Great Red Spot is a giant storm',
        'Acts as a cosmic vacuum cleaner',
        'Has a faint ring system'
      ],
      ru: [
        'Самая большая планета в нашей солнечной системе',
        'Большое Красное Пятно - гигантский шторм',
        'Действует как космический пылесос',
        'Имеет слабую систему колец'
      ],
      es: [
        'Planeta más grande de nuestro sistema solar',
        'La Gran Mancha Roja es una tormenta gigante',
        'Actúa como una aspiradora cósmica',
        'Tiene un sistema de anillos tenue'
      ]
    }
  },
  {
    id: 'saturn',
    icon: '♄',
    name: 'Saturn',
    nameRu: 'Сатурн',
    nameEs: 'Saturno',
    distance: '1.4 billion km',
    diameter: '120,536 km',
    moons: 82,
    dayLength: '10.7 hours',
    yearLength: '29 Earth years',
    temperature: '-139°C',
    facts: {
      en: [
        'Famous for its prominent ring system',
        'Less dense than water',
        'Has hexagonal storm at north pole',
        'Moon Titan has thick atmosphere'
      ],
      ru: [
        'Знаменит своей выдающейся системой колец',
        'Менее плотный, чем вода',
        'Имеет шестиугольный шторм на северном полюсе',
        'Спутник Титан имеет плотную атмосферу'
      ],
      es: [
        'Famoso por su prominente sistema de anillos',
        'Menos denso que el agua',
        'Tiene tormenta hexagonal en el polo norte',
        'La luna Titán tiene atmósfera densa'
      ]
    }
  },
  {
    id: 'uranus',
    icon: '♅',
    name: 'Uranus',
    nameRu: 'Уран',
    nameEs: 'Urano',
    distance: '2.9 billion km',
    diameter: '51,118 km',
    moons: 27,
    dayLength: '17.2 hours',
    yearLength: '84 Earth years',
    temperature: '-197°C',
    facts: {
      en: [
        'Rotates on its side',
        'Coldest planetary atmosphere',
        'Has faint rings',
        'Methane gives it blue-green color'
      ],
      ru: [
        'Вращается на боку',
        'Самая холодная планетарная атмосфера',
        'Имеет слабые кольца',
        'Метан придает сине-зеленый цвет'
      ],
      es: [
        'Gira de lado',
        'Atmósfera planetaria más fría',
        'Tiene anillos tenues',
        'El metano le da color azul-verde'
      ]
    }
  },
  {
    id: 'neptune',
    icon: '♆',
    name: 'Neptune',
    nameRu: 'Нептун',
    nameEs: 'Neptuno',
    distance: '4.5 billion km',
    diameter: '49,528 km',
    moons: 14,
    dayLength: '16.1 hours',
    yearLength: '165 Earth years',
    temperature: '-201°C',
    facts: {
      en: [
        'Windiest planet with speeds up to 2,100 km/h',
        'Deep blue color from methane',
        'Takes 165 Earth years to orbit Sun',
        'Has Great Dark Spot storm system'
      ],
      ru: [
        'Самая ветреная планета со скоростями до 2,100 км/ч',
        'Глубокий синий цвет от метана',
        'Требуется 165 земных лет для орбиты вокруг Солнца',
        'Имеет систему штормов Большое Темное Пятно'
      ],
      es: [
        'Planeta más ventoso con velocidades hasta 2,100 km/h',
        'Color azul profundo del metano',
        'Tarda 165 años terrestres en orbitar el Sol',
        'Tiene sistema de tormentas Gran Mancha Oscura'
      ]
    }
  }
];

export default function Astronomy() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const getPlanetName = (planet: typeof planetData[0]) => {
    switch (currentLang) {
      case 'ru': return planet.nameRu;
      case 'es': return planet.nameEs;
      default: return planet.name;
    }
  };

  const getPlanetFacts = (planet: typeof planetData[0]) => {
    return planet.facts[currentLang as keyof typeof planet.facts] || planet.facts.en;
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-stellar bg-clip-text text-transparent">
              {t('nav.astronomy')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our solar system and discover the wonders of space
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="cosmic-shadow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-stellar rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-orbitron font-semibold mb-2">8 Planets</h3>
                <p className="text-sm text-muted-foreground">In our solar system</p>
              </CardContent>
            </Card>

            <Card className="cosmic-shadow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-nebula rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-orbitron font-semibold mb-2">200+ Moons</h3>
                <p className="text-sm text-muted-foreground">Natural satellites</p>
              </CardContent>
            </Card>

            <Card className="cosmic-shadow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-aurora rounded-full flex items-center justify-center mx-auto mb-4">
                  <Telescope className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-orbitron font-semibold mb-2">5000+ Exoplanets</h3>
                <p className="text-sm text-muted-foreground">Discovered to date</p>
              </CardContent>
            </Card>

            <Card className="cosmic-shadow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-stellar rounded-full flex items-center justify-center mx-auto mb-4">
                  <Atom className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-orbitron font-semibold mb-2">13.8 Billion</h3>
                <p className="text-sm text-muted-foreground">Years old universe</p>
              </CardContent>
            </Card>
          </div>

          {/* Planets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {planetData.map((planet) => (
              <Card key={planet.id} className="cosmic-shadow hover:stellar-glow transition-all duration-cosmic">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{planet.icon}</div>
                  <CardTitle className="font-orbitron text-xl">
                    {getPlanetName(planet)}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {planet.distance} from Sun
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Diameter:</span>
                      <span className="text-sm font-medium">{planet.diameter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Moons:</span>
                      <span className="text-sm font-medium">{planet.moons}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Day Length:</span>
                      <span className="text-sm font-medium">{planet.dayLength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Year Length:</span>
                      <span className="text-sm font-medium">{planet.yearLength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Temperature:</span>
                      <span className="text-sm font-medium">{planet.temperature}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold mb-2 text-sm">Quick Facts:</h4>
                    <ul className="space-y-1">
                      {getPlanetFacts(planet).slice(0, 2).map((fact, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-start">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    size="sm" 
                    className="w-full mt-4 stellar-glow"
                    onClick={() => window.open(`https://solarsystem.nasa.gov/planets/${planet.name.toLowerCase()}/`, '_blank')}
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-orbitron font-bold mb-8 bg-gradient-stellar bg-clip-text text-transparent">
              Explore Further
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="stellar-glow"
                onClick={() => window.open('https://exoplanets.nasa.gov/', '_blank')}
              >
                <Telescope className="mr-2 h-5 w-5" />
                NASA Exoplanet Archive
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://solarsystem.nasa.gov/', '_blank')}
              >
                <Globe className="mr-2 h-5 w-5" />
                Solar System Exploration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}