import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search, Filter, Grid, List, Mic } from "lucide-react";
import { ThreeViewer, defaultPlanets } from "@/components/ThreeViewer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import VoiceSearchButton from "@/components/VoiceSearchButton";
import FiltersSheet, { Filters } from "@/components/FiltersSheet";

// Mock exoplanet data
const mockExoplanets = [
  {
    id: "kepler-452b",
    name: "Kepler-452b",
    distance: 1400,
    radius: 1.6,
    mass: 5.0,
    period: 385,
    discoveryYear: 2015,
    disposition: "Confirmed",
    hostStar: { name: "Kepler-452", temp: 5757, radius: 1.11 },
    description: "Earth-like exoplanet in the habitable zone",
  },
  {
    id: "toi-715b",
    name: "TOI-715 b",
    distance: 137,
    radius: 1.55,
    mass: 3.02,
    period: 19.3,
    discoveryYear: 2023,
    disposition: "Confirmed",
    hostStar: { name: "TOI-715", temp: 3900, radius: 0.64 },
    description: "Super-Earth in habitable zone of red dwarf",
  },
  {
    id: "k2-18b",
    name: "K2-18 b",
    distance: 124,
    radius: 2.3,
    mass: 8.6,
    period: 33,
    discoveryYear: 2015,
    disposition: "Confirmed",
    hostStar: { name: "K2-18", temp: 3457, radius: 0.41 },
    description: "Sub-Neptune with water vapor detection",
  },
  {
    id: "wasp-96b",
    name: "WASP-96 b",
    distance: 1150,
    radius: 1.2,
    mass: 0.48,
    period: 3.4,
    discoveryYear: 2013,
    disposition: "Confirmed",
    hostStar: { name: "WASP-96", temp: 5540, radius: 1.05 },
    description: "Hot Jupiter with clear atmosphere",
  },
];

export default function Explore() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { t: _t } = useTranslation();
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedObject, setSelectedObject] = useState<any>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filteredResults, setFilteredResults] = useState(mockExoplanets);
  const [is3DModalOpen, setIs3DModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isFavLoading, setIsFavLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [searchParams]);

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredResults(mockExoplanets);
      return;
    }

    const results = mockExoplanets.filter(
      (planet) =>
        planet.name.toLowerCase().includes(query.toLowerCase()) ||
        planet.description.toLowerCase().includes(query.toLowerCase()) ||
        planet.hostStar.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredResults(results);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
    performSearch(searchQuery);
  };

  const onApplyFilters = (filters: Filters) => {
    let results = [...mockExoplanets];
    if (filters.disposition) {
      results = results.filter((p) => p.disposition === filters.disposition);
    }
    if (filters.minRadius != null) {
      results = results.filter((p) => p.radius >= filters.minRadius!);
    }
    if (filters.maxRadius != null) {
      results = results.filter((p) => p.radius <= filters.maxRadius!);
    }
    if (filters.minMass != null) {
      results = results.filter((p) => p.mass >= filters.minMass!);
    }
    if (filters.maxMass != null) {
      results = results.filter((p) => p.mass <= filters.maxMass!);
    }
    if (filters.minPeriod != null) {
      results = results.filter((p) => p.period >= filters.minPeriod!);
    }
    if (filters.maxPeriod != null) {
      results = results.filter((p) => p.period <= filters.maxPeriod!);
    }
    setFilteredResults(results);
    setIsFilterOpen(false);
  };

  const addToFavorites = async (planet: any) => {
    try {
      setIsFavLoading(true);
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session?.user) {
        toast({
          title: "Login required",
          description: "Please sign in to save favorites.",
        });
        navigate("/auth");
        return;
      }
      const { error } = await supabase.from("favorites").insert({
        user_id: session.user.id,
        object_id: planet.id,
        object_name: planet.name,
        object_type: "exoplanet",
      });
      if (error) {
        if ((error as any).code === "23505") {
          toast({
            title: "Already saved",
            description: `${planet.name} is already in your favorites.`,
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Added to favorites",
          description: `${planet.name} saved.`,
        });
      }
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message ?? "Failed to add to favorites",
        variant: "destructive",
      });
    } finally {
      setIsFavLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="px-4">
        <div className="container mx-auto">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-stellar bg-clip-text text-transparent">
              {t("nav.explore")}
            </h1>

            <form onSubmit={handleSearch} className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("search.placeholder")}
                  className="pl-10 pr-16 bg-muted/50 border-border/50 focus:border-primary"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <VoiceSearchButton
                    onResult={(text) => {
                      setSearchQuery(text);
                      setSearchParams({ q: text });
                      performSearch(text);
                    }}
                  />
                </div>
              </div>
              <Button type="submit" className="stellar-glow">
                {t("explore.searchButton")}
              </Button>
            </form>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFilterOpen(true)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {t("search.filters")}
                </Button>
                <Badge variant="secondary">
                  {t("search.resultsCount", { count: filteredResults.length })}
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Results Column */}
            <div className="lg:col-span-2">
              {filteredResults.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    {t("search.noResults")}
                  </p>
                </div>
              ) : (
                <div
                  className={`grid gap-6 ${
                    viewMode === "grid"
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  {filteredResults.map((planet) => (
                    <Card
                      key={planet.id}
                      className="cosmic-shadow hover:stellar-glow transition-all duration-cosmic cursor-pointer"
                      onClick={() => setSelectedObject(planet)}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="font-orbitron text-lg">
                              {planet.name}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {planet.hostStar.name} {t("explore.systemSuffix")}
                            </p>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary"
                          >
                            {planet.disposition}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {planet.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">
                              {t("object.radius")}:
                            </span>
                            <span className="ml-2 font-medium">
                              {planet.radius} R⊕
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              {t("object.mass")}:
                            </span>
                            <span className="ml-2 font-medium">
                              {planet.mass} M⊕
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              {t("object.period")}:
                            </span>
                            <span className="ml-2 font-medium">
                              {planet.period} {t("units.days")}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              {t("object.distance")}:
                            </span>
                            <span className="ml-2 font-medium">
                              {planet.distance} {t("units.ly")}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* 3D Viewer Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="cosmic-shadow">
                  <CardHeader>
                    <CardTitle className="font-orbitron">
                      {selectedObject
                        ? selectedObject.name
                        : t("explore.solarSystem")}{" "}
                      -{t("explore.view3d.short")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ThreeViewer
                      planets={defaultPlanets}
                      starColor={selectedObject ? "#ff6b35" : "#FFD700"}
                    />

                    {selectedObject && (
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2">
                          {selectedObject.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {selectedObject.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            size="sm"
                            className="stellar-glow"
                            onClick={() => setIs3DModalOpen(true)}
                          >
                            {t("object.view3d")}
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => addToFavorites(selectedObject)}
                            variant="outline"
                          >
                            {t("object.addFavorite")}
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FiltersSheet
        open={isFilterOpen}
        onOpenChange={setIsFilterOpen}
        onApply={onApplyFilters}
      />

      {/* 3D Modal */}
      <Dialog open={is3DModalOpen} onOpenChange={setIs3DModalOpen}>
        <DialogContent className="max-w-none w-screen h-screen max-h-screen p-0 bg-black/90 border-primary/20 flex flex-col">
          <DialogHeader className="p-6 pb-0 shrink-0">
            <DialogTitle className="font-orbitron text-2xl text-white">
              {selectedObject
                ? `${selectedObject.name} - `
                : `${t("explore.solarSystem")} - `}
              {t("explore.view3d.full")}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t("explore.view3d.description", {
                target: selectedObject
                  ? selectedObject.name
                  : t("explore.solarSystem"),
              })}
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 p-6 pt-4 min-h-0 flex flex-col">
            <div className="flex-1 bg-black rounded-lg overflow-hidden stellar-glow min-h-[400px]">
              <ThreeViewer
                planets={defaultPlanets}
                starColor={selectedObject ? "#ff6b35" : "#FFD700"}
                showOrbits={true}
              />
            </div>

            {selectedObject && (
              <div className="mt-4 p-4 bg-muted/10 rounded-lg border border-primary/20 shrink-0">
                <h4 className="font-orbitron text-lg text-white mb-2">
                  {selectedObject.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {selectedObject.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center p-2 bg-primary/10 rounded">
                    <div className="text-primary font-medium">
                      {selectedObject.radius} R⊕
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t("object.radius")}
                    </div>
                  </div>
                  <div className="text-center p-2 bg-primary/10 rounded">
                    <div className="text-primary font-medium">
                      {selectedObject.mass} M⊕
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t("object.mass")}
                    </div>
                  </div>
                  <div className="text-center p-2 bg-primary/10 rounded">
                    <div className="text-primary font-medium">
                      {selectedObject.period} {t("units.days")}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t("object.period")}
                    </div>
                  </div>
                  <div className="text-center p-2 bg-primary/10 rounded">
                    <div className="text-primary font-medium">
                      {selectedObject.distance} {t("units.ly")}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t("object.distance")}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
