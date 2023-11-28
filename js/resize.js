


const pr1 = [
    {
        obj1: {
            text1: "The Weather App provides real-time global weather data, offering easy and speedy access to weather information for any city. Use a user-friendly interface to select predefined cities for quick updates or enter your desired location. Dynamic backgrounds and icons reflect current weather conditions, creating a visual connection to the elements.",
            text2: "The Weather App simplifies accessing real-time global weather. Quickly find weather data for any city with its user-friendly interface. It offers predefined city options for swift updates or allows manual entry. Enjoy dynamic backgrounds and icons reflecting current conditions, all powered by the reliable OpenWeather API.",
            text3: "Experience instant access to real-time global weather with the Weather App. It offers quick access to predefined cities, dynamic visuals, and precise data powered by OpenWeather API. Stay informed and travel confidently with ease. User-friendly error handling guides you in case of input errors or API issues."
        }
    },
    {
        obj2 : {
            text: "Experience the future of online shopping with our HTML, CSS, and JS-powered E-commerce clone Named Cara. Seamlessly browse a diverse catalog, enjoy an intuitive user interface, and revel in a visually stunning frontend design."
        }
    }
];


function updateTextBasedOnScreenSize() {
    const textContainer1 = document.querySelector(".pr-details__first");
    const textContainer2 = document.querySelector(".pr-details__second");
    const screenWidth = window.innerWidth;

        if (screenWidth <= 524) {
            textContainer1.textContent = pr1[0].obj1.text3;
            // textContainer2.textContent = pr1[1].obj2.text;
        } else if (screenWidth <= 1024) {
            textContainer1.textContent = pr1[0].obj1.text2;
            // textContainer2.textContent = pr1[1].obj2.text;
        } else {
            textContainer1.textContent = pr1[0].obj1.text1;
            // textContainer2.textContent = pr1[1].obj2.text;
        }
        textContainer2.textContent = pr1[1].obj2.text;
}

// Initial call to set the text based on the current screen size
updateTextBasedOnScreenSize();

// Add an event listener to update the text when the screen size changes
window.addEventListener("resize", updateTextBasedOnScreenSize);



const content = `
<p class="txt">Hello! I'm <span>Ritesh Shukla</span>, a passionate frontend developer from India, skilled in HTML, CSS, and JavaScript. I create captivating, interactive web experiences, transforming designs into seamless user interfaces.</p>
<p class="txt">Currently mastering React.js and other technologies to deliver modern web applications with a perfect balance of aesthetics and functionality.</p>
<p class="txt">I aspire to broaden my horizons in full-stack development, using cutting-edge technologies and AI to create intelligent web solutions.</p>
<p class="txt">Let's collaborate and bring your web ideas to life with my knowledge and practice of these tech stacks!</p>
`;

document.querySelector('.abt-text').innerHTML= content;
