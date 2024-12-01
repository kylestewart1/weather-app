import { ForecastDisplay } from "./forecast";

export async function fetchForecast(location) {
    const visualCrossingEndpoint = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    const apiKey = "UZZ2HMABTD972ER56UT27SMY9";
    const url = visualCrossingEndpoint + `${location}?key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export function handleSearch(form) {
    const button = form.querySelector("button");
    const input = form.querySelector("input");
    button.addEventListener("click", async function(event) {
        event.preventDefault();
        const location = input.value;
        const data = await fetchForecast(location);
        if (!data) {
            alert("Couldn't find that location.");
            return;
        }
        const forecast = new ForecastDisplay(data);
        forecast.show();
    })
}