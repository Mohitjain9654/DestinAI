function generateRecommendations(preferences) {
    const { budget, weather, activity } = preferences;
  
    const places = [
      { name: "Goa", weather: "sunny", activity: "beach", cost: "medium" },
      { name: "Manali", weather: "cold", activity: "hiking", cost: "low" },
      { name: "Jaipur", weather: "hot", activity: "sightseeing", cost: "low" },
      // add more places...
    ];
  
    // Simple filter logic (you can replace with ML later)
    return places.filter(
      place =>
        place.weather === weather &&
        place.activity === activity &&
        place.cost === budget
    );
  }
  
  module.exports = { generateRecommendations };
  