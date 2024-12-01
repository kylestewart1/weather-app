import { DailyWeatherDisplay } from "./daily-weather";

const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];

export class ForecastDisplay {
    constructor(forecastObject) {
        this.weather = forecastObject;
        this.weather.days[0].datetime = "Today";
        this.weather.days[1].datetime = "Tomorrow";
        this.today = new DailyWeatherDisplay(this.weather.days[0]).createDisplay();
        this.today.classList.remove("daily");
        this.today.classList.add("today-weather");
        this.upcoming = [];
        this.weather.days.slice(1,5).forEach((day, index) => {
            if (index > 0) { 
                day.datetime = dayOfWeek[new Date(day.datetime).getDay()];
            }
            this.upcoming.push(new DailyWeatherDisplay(day).createDisplay());
        })
    }

    show() {
        const title = document.querySelector(".location");
        title.innerText = `Weather for ${this.weather.resolvedAddress}`;

        const todayContainer = document.querySelector(".today");
        todayContainer.innerHTML = "";
        todayContainer.appendChild(this.today);

        const upcomingContainer = document.querySelector(".upcoming");
        upcomingContainer.innerHTML = "";
        this.upcoming.forEach(day => upcomingContainer.appendChild(day));
    }

    
}