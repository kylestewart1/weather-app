import "./styles.css"
import { fetchForecast } from "./fetch-weather";
import { ForecastDisplay } from "./forecast";

const container = document.querySelector(".container");

const obj = await fetchForecast("akron");
const forecast = new ForecastDisplay(obj);
forecast.createDisplay();
forecast.show(container);