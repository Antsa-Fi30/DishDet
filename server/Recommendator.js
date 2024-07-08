const restaurants = [
  { id: 1, name: "Restaurant A", cuisine: "Italian", rating: 4.5 },
  { id: 2, name: "Restaurant B", cuisine: "Chinese", rating: 4.0 },
  { id: 3, name: "Restaurant C", cuisine: "Mexican", rating: 4.2 },
  { id: 4, name: "Restaurant D", cuisine: "Indian", rating: 4.8 },
  { id: 5, name: "Restaurant E", cuisine: "French", rating: 3.9 },
  { id: 6, name: "Restaurant F", cuisine: "French", rating: 2.4 },
  { id: 7, name: "Restaurant G", cuisine: "French", rating: 1.0 },
];

function recommend(cuisine) {
  const recommendations = restaurants.filter(
    (r) => r.cuisine.toLowerCase() === cuisine.toLowerCase()
  );
  recommendations.sort((a, b) => b.rating - a.rating);
  return recommendations;
}

document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.querySelector("select");
  const resultContainer = document.querySelector(".result-container");
  const restos = document.querySelector("ul");

  restaurants.map((item, index) => {
    const resto = document.createElement("li");
    resto.classList.add("list-group-item");
    resto.textContent = `${item.name} ,cuisine: ${item.cuisine}, rating: ${item.rating}`;
    restos.appendChild(resto);
  });

  selectElement.addEventListener("change", () => {
    const selectedCuisine =
      selectElement.options[selectElement.selectedIndex].text;
    const recommendations = recommend(selectedCuisine);

    resultContainer.innerHTML = ""; // Clear previous results
    if (recommendations.length > 0) {
      recommendations.forEach((r, index) => {
        const recommendationElement = document.createElement("div");
        recommendationElement.classList.add("recommendation");
        recommendationElement.textContent = `${index + 1}. ${
          r.name
        } - Rating: ${r.rating}`;
        resultContainer.appendChild(recommendationElement);
      });
    } else {
      resultContainer.textContent =
        "Sorry, we have no recommendations for that cuisine.";
    }
  });
});
