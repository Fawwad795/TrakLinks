import { useState, useEffect } from "react";
import Sidebar from "../components/GeneralComp/Sidebar";
import Header from "../components/GeneralComp/Header";
import DashboardLinkList from "../components/DashboardComp/DashboardLinkList";
import ClicksLineChart from "../components/DashboardComp/ClicksLineChart";
import StatCards from "../components/DashboardComp/StatCards";
import DeviceChart from "../components/DashboardComp/DeviceChart";
import OSChart from "../components/DashboardComp/OSChart";
import BrowserChart from "../components/DashboardComp/BrowserChart";
import CountryTable from "../components/DashboardComp/CountryTable";
import WorldMapChart from "../components/DashboardComp/WorldMapChart";
import LinkDetailsTable from "../components/DashboardComp/LinkDetailsTable";
import NoAnalyticsData from "../components/DashboardComp/NoAnalyticsData";
import {
  allLinks,
  clicksTimeData,
  summaryStats,
  deviceData,
  osData,
  browserData,
  countryData,
} from "../constants/dummyAnalytics";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedLinkId, setSelectedLinkId] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  // Handle link selection
  const handleSelectLink = (linkId) => {
    setSelectedLinkId(linkId);
    const link = allLinks.find((link) => link.id === linkId);
    setSelectedLink(link);
  };

  // Auto-select first link on initial load
  useEffect(() => {
    if (allLinks.length > 0 && !selectedLinkId) {
      handleSelectLink(allLinks[0].id);
    }
  }, [selectedLinkId]);

  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Sidebar - takes 3 columns when expanded, 1 when collapsed */}
      <div
        className={`${
          isCollapsed ? "col-span-1" : "col-span-3"
        } h-screen sticky top-0 z-[200]`}
      >
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Main Content - takes 9 columns when sidebar expanded, 11 when collapsed */}
      <div
        className={`${
          isCollapsed ? "col-span-11" : "col-span-9"
        } bg-gray-100 flex flex-col h-screen overflow-hidden`}
      >
        {/* Header */}
        <Header
          title="Dashboard"
          subtitle="Check how your links are performing."
        />

        {/* Dashboard Content - Scrollable */}
        <div className="p-6 space-y-6 custom-scrollbar overflow-y-auto flex-grow">
          {/* Links List Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#2B2376] mb-4">
              Your Links
            </h2>
            <DashboardLinkList
              links={allLinks}
              onSelectLink={handleSelectLink}
              selectedLinkId={selectedLinkId}
            />
          </div>

          {/* Analytics Section - Only shown when a link is selected */}
          {selectedLink && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-[#2B2376] mb-4">
                Analytics for:{" "}
                <span className="text-gray-700">{selectedLink.title}</span>
              </h2>

              {selectedLink.hasAnalytics ? (
                <div className="space-y-6">
                  {/* Link Details */}
                  <LinkDetailsTable data={selectedLink} />

                  {/* Summary Stats */}
                  <StatCards stats={summaryStats} />

                  {/* Clicks Line Chart */}
                  <ClicksLineChart data={clicksTimeData} />

                  {/* Device and OS Charts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <DeviceChart data={deviceData} />
                    <OSChart data={osData} />
                  </div>

                  {/* Browser Chart */}
                  <BrowserChart data={browserData} />

                  {/* World Map Chart */}
                  <WorldMapChart data={countryData} />
                </div>
              ) : (
                <NoAnalyticsData linkTitle={selectedLink.title} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
