function searchProducts(query: string): Product[] {
  return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );
}

// Get references to HTML elements
const searchInput = document.getElementById('searchInput') as HTMLInputElement;
const searchButton = document.getElementById('searchButton') as HTMLButtonElement;
const resultsContainer = document.getElementById('resultsContainer');

// Function to handle search button click
function handleSearch() {
  const query = searchInput.value.trim();
  const results = searchProducts(query);
  displayResults(results);
}

// Function to display search results
function displayResults(results: Product[]) {
  resultsContainer.innerHTML = '';
  results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.innerHTML = <h3>${result.name}</h3><p>${result.description}</p>;
      resultsContainer.appendChild(resultElement);
  });
}

// Event listener for search button click
searchButton.addEventListener('click', handleSearch)