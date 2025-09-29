import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Language resources
const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.explore": "Explore",
      "nav.astronomy": "Astronomy",
      "nav.about": "About",
      "nav.login": "Login",
      "nav.logout": "Logout",
      "nav.search": "Search the cosmos...",

      // Home Page
      "home.title": "Nextera",
      "home.subtitle": "Celestial Knowledge & 3D Observatory",
      "home.description":
        "Explore the universe through an interactive map of celestial objects, powered by NASA's data and cutting-edge 3D visualization technology.",
      "home.cta.explore": "Explore Universe",
      "home.cta.learn": "Learn More",
      "home.explore": "Explore the Universe",
      "home.powered": "Powered by NASA's data and cutting-edge technology",
      "home.search": "Smart Search",
      "home.search.description":
        "Find exoplanets, stars, and celestial objects with our AI-powered search engine",
      "home.visualization.title": "3D Visualization",
      "home.visualization.description":
        "Explore planetary systems in stunning 3D with interactive orbit simulations",
      "home.journey.title": "Journey Beyond",
      "home.journey.description":
        "Experience the cosmos like never before with our immersive platform",
      "home.journey.cta": "Start Exploring",
      "home.turo.title": "Meet TURO",
      "home.turo.description":
        "Your AI-powered cosmic assistant for voice-controlled exploration",

      // Search
      "search.placeholder": "Search exoplanets, stars, galaxies...",
      "search.results": "Search Results",
      "search.noResults": "No celestial objects found",
      "search.filters": "Filters",
      "search.similar": "Similar Objects",
      "search.resultsCount": "{{count}} results",

      // Explore Page
      "explore.searchButton": "Search",
      "explore.solarSystem": "Solar System",
      "explore.systemSuffix": "system",
      "explore.view3d.short": "3D View",
      "explore.view3d.full": "3D Interactive View",
      "explore.view3d.description":
        "Explore the {{target}} in an interactive 3D environment. Use mouse to rotate, zoom, and pan.",

      // Units
      "units.days": "days",
      "units.ly": "ly",

      // Astronomy Page
      "astronomy.subtitle":
        "Explore our solar system and discover the wonders of space",
      "astronomy.quick.planets": "8 Planets",
      "astronomy.quick.inSystem": "In our solar system",
      "astronomy.quick.moons": "200+ Moons",
      "astronomy.quick.naturalSatellites": "Natural satellites",
      "astronomy.quick.exoplanets": "5000+ Exoplanets",
      "astronomy.quick.discoveredToDate": "Discovered to date",
      "astronomy.quick.universeAgeTitle": "13.8 Billion",
      "astronomy.quick.universeAgeSubtitle": "Years old universe",
      "astronomy.fromSun": "from Sun",
      "astronomy.label.diameter": "Diameter:",
      "astronomy.label.moons": "Moons:",
      "astronomy.label.dayLength": "Day Length:",
      "astronomy.label.yearLength": "Year Length:",
      "astronomy.label.temperature": "Temperature:",
      "astronomy.quickFacts": "Quick Facts:",
      "astronomy.learnMore": "Learn More",
      "astronomy.exploreFurther": "Explore Further",
      "astronomy.links.exoplanetArchive": "NASA Exoplanet Archive",
      "astronomy.links.solarSystemExploration": "Solar System Exploration",

      // Object Details
      "object.period": "Orbital Period",
      "object.radius": "Radius",
      "object.mass": "Mass",
      "object.distance": "Distance",
      "object.discovered": "Discovered",
      "object.view3d": "View in 3D",
      "object.addFavorite": "Add to Favorites",

      // Planets
      "planets.mercury": "Mercury",
      "planets.venus": "Venus",
      "planets.earth": "Earth",
      "planets.mars": "Mars",
      "planets.jupiter": "Jupiter",
      "planets.saturn": "Saturn",
      "planets.uranus": "Uranus",
      "planets.neptune": "Neptune",

      // Common
      "common.loading": "Loading...",
      "common.error": "Error occurred",
      "common.retry": "Retry",
      "common.close": "Close",

      // About Page
      "about.hero.subtitle": "Celestial Knowledge & 3D Observatory",
      "about.hero.description":
        "Nextera transforms space exploration by combining NASA's vast astronomical databases with cutting-edge 3D visualization and AI-powered search capabilities. Our mission is to make the universe more accessible to researchers, educators, and space enthusiasts worldwide.",
      "about.hero.badge.nasa": "NASA Powered",
      "about.hero.badge.oss": "Open Source",
      "about.hero.badge.international": "International",
      "about.mission.title": "Our Mission",
      "about.mission.accessibility.title": "Accessibility",
      "about.mission.accessibility.desc":
        "Make space exploration data accessible to everyone, regardless of technical background",
      "about.mission.innovation.title": "Innovation",
      "about.mission.innovation.desc":
        "Push the boundaries of data visualization and human-computer interaction in space science",
      "about.mission.community.title": "Community",
      "about.mission.community.desc":
        "Foster a global community of space enthusiasts and researchers",
      "about.features.title": "Platform Features",
      "about.features.smartSearch.title": "Smart Search",
      "about.features.smartSearch.desc":
        "AI-powered search across NASA's exoplanet database with semantic understanding",
      "about.features.visualization.title": "3D Visualization",
      "about.features.visualization.desc":
        "Interactive 3D models of planetary systems with realistic orbital mechanics",
      "about.features.voice.title": "TURO Voice Assistant",
      "about.features.voice.desc":
        "Voice-controlled exploration with natural language commands",
      "about.features.data.title": "Real NASA Data",
      "about.features.data.desc":
        "Direct integration with NASA Exoplanet Archive and Image Library",
      "about.features.multilang.title": "Multi-language Support",
      "about.features.multilang.desc":
        "Available in English, Russian, Spanish, and more languages",
      "about.features.education.title": "Educational Content",
      "about.features.education.desc":
        "Comprehensive astronomy information and planetary data",
      "about.tech.title": "Technology Stack",
      "about.tech.frontend": "Frontend",
      "about.tech.backend": "Backend",
      "about.tech.aiml": "AI & ML",
      "about.tech.dataSources": "Data Sources",
      "about.attr.title": "Data attribution",
      "about.attr.paragraph":
        "This research has made use of the NASA Exoplanet Archive, which is operated by the California Institute of Technology under contract with the National Aeronautics and Space Administration.",
      "about.attr.learnMore": "Learn more:",
      "about.attr.link.exoplanetArchive": "NASA Exoplanet Archive",
      "about.attr.badge.nasa": "NASA",
      "about.attr.badge.publicData": "Public Data",
    },
  },
  ru: {
    translation: {
      // Navigation
      "nav.home": "Главная",
      "nav.explore": "Исследовать",
      "nav.astronomy": "Астрономия",
      "nav.about": "О проекте",
      "nav.login": "Войти",
      "nav.logout": "Выйти",
      "nav.search": "Поиск в космосе...",

      // Home Page
      "home.title": "Нектера",
      "home.subtitle": "Космические знания и 3D обсерватория",
      "home.description":
        "Исследуйте вселенную через интерактивную карту небесных объектов на основе данных NASA и передовых 3D технологий визуализации.",
      "home.cta.explore": "Исследовать Вселенную",
      "home.cta.learn": "Узнать больше",
      "home.explore": "Исследуй Вселенную",
      "home.powered": "Создано на основе данных NASA и передовых технологий",
      "home.search": "Умный поиск",
      "home.search.description":
        "Находите экзопланеты, звёзды и небесные объекты с помощью нашего поискового движка на базе ИИ",
      "home.visualization.title": "3D визуализация",
      "home.visualization.description":
        "Исследуйте планетные системы в потрясающем 3D с интерактивными моделями орбит",
      "home.journey.title": "Путешествие за пределы",
      "home.journey.description":
        "Ощутите космос как никогда прежде с нашей захватывающей платформой",
      "home.journey.cta": "Начать исследование",
      "home.turo.title": "Знакомьтесь, ТУРО",
      "home.turo.description":
        "Ваш ИИ-помощник для голосового управления космическими исследованиями",

      // Search
      "search.placeholder": "Поиск экзопланет, звезд, галактик...",
      "search.results": "Результаты поиска",
      "search.noResults": "Небесные объекты не найдены",
      "search.filters": "Фильтры",
      "search.similar": "Похожие объекты",
      "search.resultsCount": "{{count}} результатов",

      // Explore Page
      "explore.searchButton": "Поиск",
      "explore.solarSystem": "Солнечная система",
      "explore.systemSuffix": "система",
      "explore.view3d.short": "3D вид",
      "explore.view3d.full": "Интерактивный 3D вид",
      "explore.view3d.description":
        "Исследуйте {{target}} в интерактивной 3D среде. Используйте мышь для вращения, масштабирования и панорамирования.",

      // Units
      "units.days": "дн.",
      "units.ly": "св. л.",

      // Astronomy Page
      "astronomy.subtitle":
        "Исследуйте нашу Солнечную систему и откройте чудеса космоса",
      "astronomy.quick.planets": "8 планет",
      "astronomy.quick.inSystem": "В нашей Солнечной системе",
      "astronomy.quick.moons": "200+ лун",
      "astronomy.quick.naturalSatellites": "Естественные спутники",
      "astronomy.quick.exoplanets": "5000+ экзопланет",
      "astronomy.quick.discoveredToDate": "Обнаружено на сегодняшний день",
      "astronomy.quick.universeAgeTitle": "13,8 млрд",
      "astronomy.quick.universeAgeSubtitle": "Лет Вселенной",
      "astronomy.fromSun": "от Солнца",
      "astronomy.label.diameter": "Диаметр:",
      "astronomy.label.moons": "Луны:",
      "astronomy.label.dayLength": "Длина дня:",
      "astronomy.label.yearLength": "Длина года:",
      "astronomy.label.temperature": "Температура:",
      "astronomy.quickFacts": "Краткие факты:",
      "astronomy.learnMore": "Узнать больше",
      "astronomy.exploreFurther": "Исследовать дальше",
      "astronomy.links.exoplanetArchive": "Архив экзопланет NASA",
      "astronomy.links.solarSystemExploration":
        "Исследование Солнечной системы",

      // Object Details
      "object.period": "Орбитальный период",
      "object.radius": "Радиус",
      "object.mass": "Масса",
      "object.distance": "Расстояние",
      "object.discovered": "Обнаружен",
      "object.view3d": "Вид в 3D",
      "object.addFavorite": "Добавить в избранное",

      // Planets
      "planets.mercury": "Меркурий",
      "planets.venus": "Венера",
      "planets.earth": "Земля",
      "planets.mars": "Марс",
      "planets.jupiter": "Юпитер",
      "planets.saturn": "Сатурн",
      "planets.uranus": "Уран",
      "planets.neptune": "Нептун",

      // Common
      "common.loading": "Загрузка...",
      "common.error": "Произошла ошибка",
      "common.retry": "Повторить",
      "common.close": "Закрыть",

      // About Page
      "about.hero.subtitle": "Космические знания и 3D обсерватория",
      "about.hero.description":
        "Nextera преобразует исследование космоса, сочетая обширные базы данных NASA с передовой 3D визуализацией и поиском на базе ИИ. Наша миссия — сделать вселенную доступнее для исследователей, преподавателей и энтузиастов космоса по всему миру.",
      "about.hero.badge.nasa": "На базе NASA",
      "about.hero.badge.oss": "Открытый исходный код",
      "about.hero.badge.international": "Интернациональный",
      "about.mission.title": "Наша миссия",
      "about.mission.accessibility.title": "Доступность",
      "about.mission.accessibility.desc":
        "Сделать данные космических исследований доступными каждому, независимо от технической подготовки",
      "about.mission.innovation.title": "Инновации",
      "about.mission.innovation.desc":
        "Расширять границы визуализации данных и взаимодействия человек-компьютер в космической науке",
      "about.mission.community.title": "Сообщество",
      "about.mission.community.desc":
        "Формировать глобальное сообщество энтузиастов космоса и исследователей",
      "about.features.title": "Возможности платформы",
      "about.features.smartSearch.title": "Умный поиск",
      "about.features.smartSearch.desc":
        "Поиск по базе экзопланет NASA с семантическим пониманием на базе ИИ",
      "about.features.visualization.title": "3D визуализация",
      "about.features.visualization.desc":
        "Интерактивные 3D модели планетных систем с реалистичной орбитальной механикой",
      "about.features.voice.title": "Голосовой помощник TURO",
      "about.features.voice.desc":
        "Исследование голосом с использованием естественного языка",
      "about.features.data.title": "Настоящие данные NASA",
      "about.features.data.desc":
        "Прямая интеграция с NASA Exoplanet Archive и Image Library",
      "about.features.multilang.title": "Многоязычная поддержка",
      "about.features.multilang.desc":
        "Доступно на английском, русском, испанском и других языках",
      "about.features.education.title": "Образовательный контент",
      "about.features.education.desc":
        "Обширная информация по астрономии и данные о планетах",
      "about.tech.title": "Технологический стек",
      "about.tech.frontend": "Фронтенд",
      "about.tech.backend": "Бэкенд",
      "about.tech.aiml": "ИИ и МО",
      "about.tech.dataSources": "Источники данных",
      "about.attr.title": "Указание источников",
      "about.attr.paragraph":
        "В этом исследовании использован Архив экзопланет NASA, который управляется Калифорнийским технологическим институтом по контракту с Национальным управлением по аэронавтике и исследованию космического пространства.",
      "about.attr.learnMore": "Подробнее:",
      "about.attr.link.exoplanetArchive": "Архив экзопланет NASA",
      "about.attr.badge.nasa": "NASA",
      "about.attr.badge.publicData": "Открытые данные",
    },
  },
  es: {
    translation: {
      // Navigation
      "nav.home": "Inicio",
      "nav.explore": "Explorar",
      "nav.astronomy": "Astronomía",
      "nav.about": "Acerca de",
      "nav.login": "Iniciar sesión",
      "nav.logout": "Cerrar sesión",
      "nav.search": "Buscar en el cosmos...",

      // Home Page
      "home.title": "Nextera",
      "home.subtitle": "Conocimiento Celestial y Observatorio 3D",
      "home.description":
        "Explora el universo a través de un mapa interactivo de objetos celestiales, impulsado por datos de la NASA y tecnología de visualización 3D de vanguardia.",
      "home.cta.explore": "Explorar Universo",
      "home.cta.learn": "Aprender Más",
      "home.explore": "Explora el Universo",
      "home.powered":
        "Impulsado por los datos de la NASA y la tecnología de vanguardia",
      "home.search": "Búsqueda inteligente",
      "home.search.description":
        "Encuentra exoplanetas, estrellas y objetos celestes con nuestro motor de búsqueda impulsado por IA",
      "home.visualization.title": "Visualización 3D",
      "home.visualization.description":
        "Explora sistemas planetarios en impresionante 3D con simulaciones de órbitas interactivas",
      "home.journey.title": "Viaja más allá",
      "home.journey.description":
        "Experimenta el cosmos como nunca antes con nuestra plataforma inmersiva",
      "home.journey.cta": "Comenzar a explorar",
      "home.turo.title": "Conoce a TURO",
      "home.turo.description":
        "Tu asistente cósmico impulsado por IA para exploración controlada por voz",

      // Search
      "search.placeholder": "Buscar exoplanetas, estrellas, galaxias...",
      "search.results": "Resultados de búsqueda",
      "search.noResults": "No se encontraron objetos celestiales",
      "search.filters": "Filtros",
      "search.similar": "Objetos similares",
      "search.resultsCount": "{{count}} resultados",

      // Explore Page
      "explore.searchButton": "Buscar",
      "explore.solarSystem": "Sistema Solar",
      "explore.systemSuffix": "sistema",
      "explore.view3d.short": "Vista 3D",
      "explore.view3d.full": "Vista 3D Interactiva",
      "explore.view3d.description":
        "Explora {{target}} en un entorno 3D interactivo. Usa el ratón para rotar, hacer zoom y desplazar.",

      // Units
      "units.days": "días",
      "units.ly": "al",

      // Astronomy Page
      "astronomy.subtitle":
        "Explora nuestro sistema solar y descubre las maravillas del espacio",
      "astronomy.quick.planets": "8 planetas",
      "astronomy.quick.inSystem": "En nuestro sistema solar",
      "astronomy.quick.moons": "200+ lunas",
      "astronomy.quick.naturalSatellites": "Satélites naturales",
      "astronomy.quick.exoplanets": "5000+ exoplanetas",
      "astronomy.quick.discoveredToDate": "Descubiertos hasta la fecha",
      "astronomy.quick.universeAgeTitle": "13.8 mil millones",
      "astronomy.quick.universeAgeSubtitle": "Años de la edad del universo",
      "astronomy.fromSun": "del Sol",
      "astronomy.label.diameter": "Diámetro:",
      "astronomy.label.moons": "Lunas:",
      "astronomy.label.dayLength": "Duración del día:",
      "astronomy.label.yearLength": "Duración del año:",
      "astronomy.label.temperature": "Temperatura:",
      "astronomy.quickFacts": "Datos rápidos:",
      "astronomy.learnMore": "Aprender más",
      "astronomy.exploreFurther": "Explorar más",
      "astronomy.links.exoplanetArchive": "Archivo de Exoplanetas de la NASA",
      "astronomy.links.solarSystemExploration": "Exploración del Sistema Solar",

      // Object Details
      "object.period": "Período orbital",
      "object.radius": "Radio",
      "object.mass": "Masa",
      "object.distance": "Distancia",
      "object.discovered": "Descubierto",
      "object.view3d": "Ver en 3D",
      "object.addFavorite": "Agregar a favoritos",

      // Planets
      "planets.mercury": "Mercurio",
      "planets.venus": "Venus",
      "planets.earth": "Tierra",
      "planets.mars": "Marte",
      "planets.jupiter": "Júpiter",
      "planets.saturn": "Saturno",
      "planets.uranus": "Urano",
      "planets.neptune": "Neptuno",

      // Common
      "common.loading": "Cargando...",
      "common.error": "Error ocurrido",
      "common.retry": "Reintentar",
      "common.close": "Cerrar",

      // About Page
      "about.hero.subtitle": "Conocimiento Celestial y Observatorio 3D",
      "about.hero.description":
        "Nextera transforma la exploración espacial combinando las vastas bases de datos de la NASA con visualización 3D de vanguardia y capacidades de búsqueda impulsadas por IA. Nuestra misión es hacer el universo más accesible para investigadores, educadores y entusiastas del espacio en todo el mundo.",
      "about.hero.badge.nasa": "Impulsado por la NASA",
      "about.hero.badge.oss": "Código abierto",
      "about.hero.badge.international": "Internacional",
      "about.mission.title": "Nuestra misión",
      "about.mission.accessibility.title": "Accesibilidad",
      "about.mission.accessibility.desc":
        "Hacer que los datos de exploración espacial sean accesibles para todos, independientemente del conocimiento técnico",
      "about.mission.innovation.title": "Innovación",
      "about.mission.innovation.desc":
        "Impulsar los límites de la visualización de datos y la interacción humano-computadora en la ciencia espacial",
      "about.mission.community.title": "Comunidad",
      "about.mission.community.desc":
        "Fomentar una comunidad global de entusiastas del espacio e investigadores",
      "about.features.title": "Características de la plataforma",
      "about.features.smartSearch.title": "Búsqueda inteligente",
      "about.features.smartSearch.desc":
        "Búsqueda con IA en la base de datos de exoplanetas de la NASA con comprensión semántica",
      "about.features.visualization.title": "Visualización 3D",
      "about.features.visualization.desc":
        "Modelos 3D interactivos de sistemas planetarios con mecánica orbital realista",
      "about.features.voice.title": "Asistente de voz TURO",
      "about.features.voice.desc":
        "Exploración controlada por voz con lenguaje natural",
      "about.features.data.title": "Datos reales de la NASA",
      "about.features.data.desc":
        "Integración directa con el Archivo de Exoplanetas e Image Library de la NASA",
      "about.features.multilang.title": "Soporte multilingüe",
      "about.features.multilang.desc":
        "Disponible en inglés, ruso, español y más idiomas",
      "about.features.education.title": "Contenido educativo",
      "about.features.education.desc":
        "Información completa de astronomía y datos planetarios",
      "about.tech.title": "Pila tecnológica",
      "about.tech.frontend": "Frontend",
      "about.tech.backend": "Backend",
      "about.tech.aiml": "IA y ML",
      "about.tech.dataSources": "Fuentes de datos",
      "about.attr.title": "Atribución de datos",
      "about.attr.paragraph":
        "Esta investigación ha utilizado el Archivo de Exoplanetas de la NASA, operado por el Instituto de Tecnología de California bajo contrato con la Administración Nacional de Aeronáutica y del Espacio.",
      "about.attr.learnMore": "Más información:",
      "about.attr.link.exoplanetArchive": "Archivo de Exoplanetas de la NASA",
      "about.attr.badge.nasa": "NASA",
      "about.attr.badge.publicData": "Datos públicos",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
