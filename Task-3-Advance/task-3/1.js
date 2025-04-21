// Quiz Function
function checkAnswer(answer) {
    const result = document.getElementById("quiz-result");
    if (answer === 'Paris') {
      result.textContent = "✅ Correct!";
    } else {
      result.textContent = "❌ Try again!";
    }
  }
  
  // Fetch Joke from API
  async function getJoke() {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
      const data = await response.json();
      document.getElementById('joke').textContent = `${data.setup} - ${data.punchline}`;
    } catch (error) {
      document.getElementById('joke').textContent = "Failed to fetch a joke. Try again later.";
    }
  }
  
  // Weather
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = 'YOUR_API_KEY'; // <-- Replace with your OpenWeatherMap API key
    const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.cod === 200) {
        document.getElementById("weather").textContent = 
          `🌤️ ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
      } else {
        document.getElementById("weather").textContent = "City not found.";
      }
    } catch {
      document.getElementById("weather").textContent = "Error fetching weather.";
    }
  }