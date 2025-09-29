import nasaLogo from "@/assets/nasa-logo.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Database,
  Globe,
  Mic,
  Search,
  Target,
  Telescope,
  Users,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
type FeatureItem = {
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descriptionKey: string;
};

const features: FeatureItem[] = [
  {
    icon: Search,
    titleKey: "about.features.smartSearch.title",
    descriptionKey: "about.features.smartSearch.desc",
  },
  {
    icon: Globe,
    titleKey: "about.features.visualization.title",
    descriptionKey: "about.features.visualization.desc",
  },
  {
    icon: Mic,
    titleKey: "about.features.voice.title",
    descriptionKey: "about.features.voice.desc",
  },
  {
    icon: Database,
    titleKey: "about.features.data.title",
    descriptionKey: "about.features.data.desc",
  },
  {
    icon: Users,
    titleKey: "about.features.multilang.title",
    descriptionKey: "about.features.multilang.desc",
  },
  {
    icon: Telescope,
    titleKey: "about.features.education.title",
    descriptionKey: "about.features.education.desc",
  },
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
              {t("about.hero.subtitle")}
            </p>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
              {t("about.hero.description")}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {t("about.hero.badge.nasa")}
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                {t("about.hero.badge.oss")}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-secondary/20 text-secondary-foreground"
              >
                {t("about.hero.badge.international")}
              </Badge>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mb-16">
            <Card className="cosmic-shadow stellar-glow">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-orbitron bg-gradient-stellar bg-clip-text text-transparent">
                  {t("about.mission.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-stellar rounded-full flex items-center justify-center mx-auto">
                      <Target className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold">
                      {t("about.mission.accessibility.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("about.mission.accessibility.desc")}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-nebula rounded-full flex items-center justify-center mx-auto">
                      <Zap className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold">
                      {t("about.mission.innovation.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("about.mission.innovation.desc")}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-aurora rounded-full flex items-center justify-center mx-auto">
                      <Users className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold">
                      {t("about.mission.community.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("about.mission.community.desc")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-center mb-12 bg-gradient-stellar bg-clip-text text-transparent">
              {t("about.features.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="cosmic-shadow hover:stellar-glow transition-all duration-cosmic"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-stellar rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold mb-4">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(feature.descriptionKey)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-center mb-12 bg-gradient-stellar bg-clip-text text-transparent">
              {t("about.tech.title")}
            </h2>
            <Card className="cosmic-shadow">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <h4 className="font-orbitron font-semibold mb-2">
                      {t("about.tech.frontend")}
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>React + TypeScript</p>
                      <p>Vite</p>
                      <p>Tailwind CSS</p>
                      <p>React Three Fiber</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-orbitron font-semibold mb-2">
                      {t("about.tech.backend")}
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Supabase</p>
                      <p>PostgreSQL</p>
                      <p>Edge Functions</p>
                      <p>Real-time APIs</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-orbitron font-semibold mb-2">
                      {t("about.tech.aiml")}
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>TensorFlow</p>
                      <p>Vector Search</p>
                      <p>NLP Processing</p>
                      <p>Web Speech API</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-orbitron font-semibold mb-2">
                      {t("about.tech.dataSources")}
                    </h4>
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

          {/* Data Attribution */}
          <div className="mb-12">
            <Card className="cosmic-shadow">
              <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
                <figure className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src={nasaLogo}
                    alt="NASA logo"
                    className="mx-auto rounded-lg w-32 h-32 md:w-44 md:h-44 object-contain shadow-xl transition-transform duration-200 hover:scale-105"
                    aria-hidden={false}
                  />
                </figure>

                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl font-orbitron font-semibold mb-2">
                    {t("about.attr.title")}
                  </h3>
                  <p className="text-muted-foreground mb-3 max-w-2xl">
                    {t("about.attr.paragraph")}
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    {t("about.attr.learnMore")} {""}
                    <a
                      href="https://exoplanetarchive.ipac.caltech.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary-foreground"
                    >
                      {t("about.attr.link.exoplanetArchive")}
                    </a>
                  </p>
                  <div className="mt-4 flex justify-center md:justify-start gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {t("about.attr.badge.nasa")}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-muted/10 text-muted-foreground"
                    >
                      {t("about.attr.badge.publicData")}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
