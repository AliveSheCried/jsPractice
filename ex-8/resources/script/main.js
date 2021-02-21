// Foursquare API Info
const clientId = 'MFENN50RVYFGQMFWD2JQNEMSEN4K5KO1O5GLLLTRN51N2UEL';
const clientSecret = 'A4KF3EPXNQMFCA2122WG4HUEAMNXNGESFRCYDN0ZSSRMIRZK';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '9c43335d5a89c7ee8fe4cc5447e243be';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20210221`;
    try {        
        const response = await fetch(urlToFetch);
        if (response.ok) {            
            const jsonResponse = await response.json();
            const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
            return venues;
        }

    } catch(error) {
        console.log(error)
    }
}

const getForecast = async () => {
    const city = $input.val();
    const urlToFetch = `${weatherUrl}&q=${city}&APPID=${openWeatherKey}`
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse
        }
    } catch (error) {
        console.log(error)
    }

}

// Render functions
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
      const venue = venues[index];
      const venueIcon = venue.categories[0].icon;
      const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
      const venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
      $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
  };
  

const renderForecast = (day) => {
  // Add your code here:
    let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues))
  getForecast().then(forecast => renderForecast(forecast))
  return false;
}

$submit.click(executeSearch)