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