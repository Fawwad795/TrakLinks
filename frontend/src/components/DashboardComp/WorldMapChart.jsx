import React, { memo, useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

// Use a reliable public topojson file or create a fallback
const geoUrl = "https://unpkg.com/world-atlas@3/countries-110m.json";

// Alternative local data approach
const fallbackGeoData = {
  type: "Topology",
  objects: {
    countries: {
      type: "GeometryCollection",
      geometries: [],
    },
  },
};

// Map your country codes to ISO_A3 codes used by the map
const countryCodeMap = {
  PAK: "PAK", // Pakistan
  USA: "USA", // United States
  US: "USA", // Alternative US code
  PK: "PAK", // Alternative Pakistan code
};

const WorldMapChart = ({ data = [] }) => {
  const [mapError, setMapError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Create a map of country codes to their data for easy lookup
  const countryData = React.useMemo(() => {
    const dataMap = {};
    data.forEach((item) => {
      // Map the country code to ISO_A3 format
      const isoCode = countryCodeMap[item.countryCode] || item.countryCode;
      if (isoCode) {
        dataMap[isoCode] = item;
      }
    });
    return dataMap;
  }, [data]);

  // Handle map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 second timeout

    return () => clearTimeout(timer);
  }, []);

  // Get color based on percentage
  const getColor = (countryCode) => {
    const country = countryData[countryCode];
    if (!country) return "#F1F5F9"; // Default light color for countries with no data

    // Color intensity based on percentage - matching the screenshot colors
    const percentage = country.percentage || 0;
    if (percentage >= 80) return "#E91E63"; // Pink/magenta for highest percentage
    if (percentage >= 60) return "#9C27B0"; // Purple for high
    if (percentage >= 40) return "#673AB7"; // Darker purple for medium
    if (percentage >= 20) return "#3F51B5"; // Blue-purple for lower
    return "#E3F2FD"; // Light blue for lowest
  };

  // Fallback visualization when map fails to load
  const renderFallback = () => (
    <div className="w-full h-96 mb-6 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h4 className="text-lg font-medium text-gray-900 mb-2">World Map</h4>
        <p className="text-sm text-gray-500 mb-4">
          Geographic distribution data is available in the table below
        </p>
        <div className="flex justify-center space-x-4">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div
                className="w-12 h-8 rounded mb-2 mx-auto"
                style={{
                  backgroundColor: getColor(
                    countryCodeMap[item.countryCode] || item.countryCode
                  ),
                }}
              />
              <div className="text-xs text-gray-600">{item.country}</div>
              <div className="text-sm font-medium">{item.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Geographic Distribution
      </h3>

      {/* Try to render the map, fall back to simple visualization if it fails */}
      {!mapError ? (
        <div className="w-full h-96 mb-6">
          <ComposableMap
            projectionConfig={{
              scale: 130,
              center: [0, 20],
            }}
            width={800}
            height={400}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <ZoomableGroup>
              <Geographies
                geography={geoUrl}
                onError={() => {
                  console.warn(
                    "Failed to load world map data, showing fallback"
                  );
                  setMapError(true);
                }}
              >
                {({ geographies, error }) => {
                  if (error) {
                    setMapError(true);
                    return null;
                  }

                  if (!geographies || geographies.length === 0) {
                    if (!isLoading) {
                      setMapError(true);
                    }
                    return null;
                  }

                  return geographies.map((geo) => {
                    // Try multiple properties for country identification
                    const countryCode =
                      geo.properties.ISO_A3 ||
                      geo.properties.ADM0_A3 ||
                      geo.properties.ISO_A3_EH ||
                      geo.properties.WB_A3;

                    const color = getColor(countryCode);
                    const country = countryData[countryCode];

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={color}
                        stroke="#FFFFFF"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            fill: "#695BC4",
                            outline: "none",
                            cursor: "pointer",
                          },
                          pressed: {
                            fill: "#27215B",
                            outline: "none",
                          },
                        }}
                        title={
                          country
                            ? `${country.country}: ${country.percentage}%`
                            : geo.properties.NAME ||
                              geo.properties.NAME_EN ||
                              "Unknown"
                        }
                      />
                    );
                  });
                }}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      ) : (
        renderFallback()
      )}

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 uppercase text-xs">
              <th className="text-left py-3 px-4">Country</th>
              <th className="text-center py-3 px-4">Clicks</th>
              <th className="text-center py-3 px-4">Visits</th>
              <th className="text-center py-3 px-4">% Clicks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3 px-4 flex items-center">
                  <span
                    className="w-6 h-4 rounded-sm mr-3"
                    style={{
                      backgroundColor: getColor(
                        countryCodeMap[item.countryCode] || item.countryCode
                      ),
                    }}
                  ></span>
                  <span className="mr-2">{item.flag}</span>
                  <span className="font-medium text-gray-900">
                    {item.country}
                  </span>
                </td>
                <td className="text-center py-3 px-4 text-gray-700">
                  {item.clicks}
                </td>
                <td className="text-center py-3 px-4 text-gray-700">
                  {item.visits}
                </td>
                <td className="text-center py-3 px-4">
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: getColor(
                            countryCodeMap[item.countryCode] || item.countryCode
                          ),
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      {item.percentage.toFixed(2)}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span>1 - 2 of 2</span>
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded hover:bg-gray-100" disabled>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span>1</span>
          <button className="p-1 rounded hover:bg-gray-100" disabled>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <select className="border border-gray-300 rounded px-2 py-1 text-xs">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>
    </div>
  );
};

export default memo(WorldMapChart);
