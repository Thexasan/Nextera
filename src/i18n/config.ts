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
