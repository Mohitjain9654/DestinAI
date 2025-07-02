const travelDestinations = [
    // your full destination list here (as you shared before)
    { name: "Bora Bora", type: "island", budget: "high", weather: "hot", duration: "long", companion: "honeymoon", activity: "luxury retreat", food: "fine dning", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Bora_Bora_Island.jpg" },
    // ... rest of the places
  ];
  
  function getTravelRecommendation(userPreferences) {
      const preferenceMapping = {
          type: 'destinationType',
          budget: 'budget',
          weather: 'weather',
          duration: 'duration',
          companion: 'companion',
          activity: 'activity',
          food: 'food'
      };
  
      const filteredDestinations = travelDestinations.filter(destination => {
          return Object.keys(preferenceMapping).every(destinationKey => {
              const preferenceKey = preferenceMapping[destinationKey];
              if (!userPreferences[preferenceKey]) return true;
  
              const destinationValue = destination[destinationKey];
              const preferenceValue = userPreferences[preferenceKey];
  
              if (!destinationValue) return true;
  
              return destinationValue.toLowerCase() === preferenceValue.toLowerCase();
          });
      });
  
      return filteredDestinations;
  }
  
  module.exports = getTravelRecommendation;
  