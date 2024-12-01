import "./styles.css"
import { fetchForecast, handleSearch } from "./fetch-weather";
import { ForecastDisplay } from "./forecast";

const obj = await fetchForecast("akron");
const forecast = new ForecastDisplay(obj);
forecast.show()

const searchForm = document.querySelector("form");
handleSearch(searchForm);