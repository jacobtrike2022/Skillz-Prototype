import { useState, useEffect } from "react";
import { BottomNavigation } from "./components/BottomNavigation";
import { Dashboard } from "./components/Dashboard";
import { DailyTasks } from "./components/DailyTasks";
import { CompetencyNetwork } from "./components/CompetencyNetwork";
import { Team } from "./components/Team";
import { CareerPath } from "./components/CareerPath";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Listen for navigation events from components
  useEffect(() => {
    const handleNavigate = (event: any) => {
      if (event.detail === "profile") {
        setActiveTab("profile");
      }
    };

    window.addEventListener("navigate", handleNavigate);
    return () =>
      window.removeEventListener("navigate", handleNavigate);
  }, []);

  // Navigation function to pass to components
  const navigateToTab = (tab: string) => {
    setActiveTab(tab);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard onNavigate={navigateToTab} />;
      case "tasks":
        return <DailyTasks />;
      case "skills":
        return <CompetencyNetwork />;
      case "team":
        return <Team onNavigate={navigateToTab} />;
      case "profile":
        return <CareerPath onNavigate={navigateToTab} />;
      default:
        return <Dashboard onNavigate={navigateToTab} />;
    }
  };

  return (
    <div className="dark min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      {/* Main Content */}
      <main className="min-h-screen">{renderScreen()}</main>

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Background Elements - Sheetz Theme */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #E31837 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-40 left-10 w-24 h-24 rounded-full opacity-15 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #1E1B4B 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #E31837 0%, #1E1B4B 50%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}