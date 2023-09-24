const pr1 = [
    "The Weather App provides real-time global weather data, offering easy and speedy access to weather information for any city. Use a user-friendly interface to select predefined cities for quick updates or enter your desired location. Dynamic backgrounds and icons reflect current weather conditions, creating a visual connection to the elements.",
    "The Weather App simplifies accessing real-time global weather. Quickly find weather data for any city with its user-friendly interface. It offers predefined city options for swift updates or allows manual entry.Enjoy dynamic backgrounds and icons reflecting current conditions, all powered by the reliable OpenWeather API.",
    "Experience instant access to real-time global weather with the Weather App. It offers quick access to predefined cities, dynamic visuals, and precise data powered by OpenWeather API. Stay informed and travel confidently with ease.User-friendly error handling guides you in case of input errors or API issues. "
]

function updateTextBasedOnScreenSize() {
    const textContainer = document.querySelector(".pr-details");
    const screenWidth = window.innerWidth;

    if (screenWidth <= 524) {
        textContainer.textContent = pr1[2];
    } else if (screenWidth <= 1024) { 
        textContainer.textContent = pr1[1];
    } else {
        textContainer.textContent = pr1[0];
    }
}

// Initial call to set the text based on the current screen size
updateTextBasedOnScreenSize();

// Add an event listener to update the text when the screen size changes
window.addEventListener("resize", updateTextBasedOnScreenSize);