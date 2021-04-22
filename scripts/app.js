const checkStatusAndParse = (res) => {
    if (!res.ok) {
      throw new Error(`Status code error: ${res.status}`);
    }
  
    return res.json();
  };


async function getGifInfo(urlTrend){
    const ipRes = await fetch("https://api.my-ip.io/ip.json");
    const ipData = await checkStatusAndParse(ipRes);
    const ipAddress = ipData.ip;
  
};




  
  async function getWeatherInfo() {
    const ipRes = await fetch("https://api.my-ip.io/ip.json");
    const ipData = await checkStatusAndParse(ipRes);
    const ipAddress = ipData.ip;
  
    const cityRes = await fetch(`http://ipwhois.app/json/${ipAddress}`);
    const cityData = await checkStatusAndParse(cityRes);
    const cityName = 'Mexico';//cityData.city;
  
    const weatherAPIKey = "1c67ae33adc312d33476ae4d68a09beb";
    const query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${weatherAPIKey}`;
    const weatherRes = await fetch(encodeURI(query));
    const weatherData = await checkStatusAndParse(weatherRes);
    const temperature = weatherData.main.temp;
  
    return { city: cityName, temp: temperature };
  }