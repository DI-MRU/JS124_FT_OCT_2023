// Async function to fetch and display sunrise times for Paris and New York
async function getSunriseTime() {
    // Get latitude and longitude values from input fields
    const parisLatitude = document.getElementById('parisLatitude').value;
    const parisLongitude = document.getElementById('parisLongitude').value;
    const nyLatitude = document.getElementById('nyLatitude').value;
    const nyLongitude = document.getElementById('nyLongitude').value;

    // Fetch sunrise time for Paris
    const parisPromise = fetch(`https://api.sunrise-sunset.org/json?lat=${parisLatitude}&lng=${parisLongitude}`)
      .then(response => response.json())
      .then(data => data.results.sunrise);

    // Fetch sunrise time for New York
    const nyPromise = fetch(`https://api.sunrise-sunset.org/json?lat=${nyLatitude}&lng=${nyLongitude}`)
      .then(response => response.json())
      .then(data => data.results.sunrise);

    try {
      // Wait for both promises to resolve and display the results
      const [parisSunrise, nySunrise] = await Promise.all([parisPromise, nyPromise]);
      document.getElementById('result').innerText = `Paris Sunrise: ${parisSunrise}, New York Sunrise: ${nySunrise}`;
    } catch (error) {
      console.error('Error fetching sunrise times:', error);
    }
}
