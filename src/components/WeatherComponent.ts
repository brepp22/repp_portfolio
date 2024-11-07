export class WeatherComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const citiesAttr = this.getAttribute('cities'); // Get the stringified cities
      let cities = [];
  
      if (citiesAttr) {
        try {
          cities = JSON.parse(citiesAttr); // Parse it back into an array
        } catch (error) {
          console.error("Error parsing cities data:", error);
        }
      }
  
      // Now you have cities as an array
      console.log('Cities:', cities);
  
      // You can now use the cities array as needed in your custom element
      // Example of rendering the cities list inside the component
      const cityList = cities.map(city => `<div>${city.name}</div>`).join('');
      this.innerHTML = `<div>Weather in Selected Region:</div><div>${cityList}</div>`;
    }
  }
  
  // Define the custom element
  customElements.define('weather-component', WeatherComponent);