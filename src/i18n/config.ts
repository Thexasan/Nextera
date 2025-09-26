import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
      "nav.search": "Search the cosmos...",
      
      // Home Page
      "home.title": "Nextera",
      "home.subtitle": "Celestial Knowledge & 3D Observatory",
      "home.description": "Explore the universe through an interactive map of celestial objects, powered by NASA's data and cutting-edge 3D visualization technology.",
      "home.cta.explore": "Explore Universe",
      "home.cta.learn": "Learn More",
      "home.turo.title": "Meet TURO",
      "home.turo.description": "Your AI-powered cosmic assistant for voice-controlled exploration",
      
      // Search
      "search.placeholder": "Search exoplanets, stars, galaxies...",
      "search.results": "Search Results",
      "search.noResults": "No celestial objects found",
      "search.filters": "Filters",
      "search.similar": "Similar Objects",
      
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
    }
  },
  ru: {
    translation: {
      // Navigation
      "nav.home": "Главная",
      "nav.explore": "Исследовать",
      "nav.astronomy": "Астрономия",
      "nav.about": "О проекте",
      "nav.login": "Войти",
      "nav.search": "Поиск в космосе...",
      
      // Home Page
      "home.title": "Нектера",
      "home.subtitle": "Космические знания и 3D обсерватория",
      "home.description": "Исследуйте вселенную через интерактивную карту небесных объектов на основе данных NASA и передовых 3D технологий визуализации.",
      "home.cta.explore": "Исследовать Вселенную",
      "home.cta.learn": "Узнать больше",
      "home.turo.title": "Знакомьтесь, ТУРО",
      "home.turo.description": "Ваш ИИ-помощник для голосового управления космическими исследованиями",
      
      // Search
      "search.placeholder": "Поиск экзопланет, звезд, галактик...",
      "search.results": "Результаты поиска",
      "search.noResults": "Небесные объекты не найдены",
      "search.filters": "Фильтры",
      "search.similar": "Похожие объекты",
      
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
    }
  },
  es: {
    translation: {
      // Navigation
      "nav.home": "Inicio",
      "nav.explore": "Explorar",
      "nav.astronomy": "Astronomía",
      "nav.about": "Acerca de",
      "nav.login": "Iniciar sesión",
      "nav.search": "Buscar en el cosmos...",
      
      // Home Page
      "home.title": "Nextera",
      "home.subtitle": "Conocimiento Celestial y Observatorio 3D",
      "home.description": "Explora el universo a través de un mapa interactivo de objetos celestiales, impulsado por datos de la NASA y tecnología de visualización 3D de vanguardia.",
      "home.cta.explore": "Explorar Universo",
      "home.cta.learn": "Aprender Más",
      "home.turo.title": "Conoce a TURO",
      "home.turo.description": "Tu asistente cósmico impulsado por IA para exploración controlada por voz",
      
      // Search
      "search.placeholder": "Buscar exoplanetas, estrellas, galaxias...",
      "search.results": "Resultados de búsqueda", 
      "search.noResults": "No se encontraron objetos celestiales",
      "search.filters": "Filtros",
      "search.similar": "Objetos similares",
      
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
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false // React already escapes
    }
  });

export default i18n;