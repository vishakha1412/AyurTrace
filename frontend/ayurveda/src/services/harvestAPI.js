export async function fetchHarvestData() {
  // Replace with actual API call
  return [
    { id: 1, lat: 28.6692, lng: 77.4538, herb: "Ashwagandha", date: "2025-08-20" },
    { id: 2, lat: 28.7041, lng: 77.1025, herb: "Tulsi", date: "2025-08-22" },
  ];
}
/*
export async function fetchHarvestData() {
  try {
    const response = await fetch("https://your-api.com/harvest"); // Replace with your real endpoint
    const data = await response.json();

    return data.map((item) => ({
      id: item.id,
      lat: item.latitude,
      lng: item.longitude,
      herb: item.herbName,
      date: item.harvestDate,
    }));
  } catch (error) {
    console.error("Harvest API error:", error);
    return [];
  }
}*/