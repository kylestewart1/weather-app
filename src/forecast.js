import { DailyWeatherDisplay } from "./daily-weather";

export class ForecastDisplay {
    constructor(forecastObject) {
        this.weather = forecastObject;
        this.dailyDisplays = [];
    }

    createDisplay() {
        this.weather.days.forEach(day => {
            const daily = new DailyWeatherDisplay(day);
            this.dailyDisplays.push(daily.createDisplay());
        })
    }

    show(container) {
        this.dailyDisplays.forEach(display => {
            container.appendChild(display);
        })
    }

    
}