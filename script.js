// Function to filter plants based on their type (herb, shrub, tree)
function filterPlants(type) {
    const plants = document.querySelectorAll('.plant-card');
    plants.forEach(plant => {
      if (type === 'all') {
        plant.classList.remove('hidden');  // Show all plants
      } else if (plant.classList.contains(type)) {
        plant.classList.remove('hidden');  // Show only the selected type
      } else {
        plant.classList.add('hidden');     // Hide other types
      }
    });
  }
  