import { icons } from "./icons";

export class DailyWeatherDisplay {
    constructor(day) {
        this.weather = day;
    }
    
    createDisplay() {
        const container = document.createElement("div");
        container.classList.add("daily");

        const date = document.createElement("h3");
        date.classList.add("date");
        date.innerText = this.weather.datetime;
        

        const image = document.createElement("img");
        image.classList.add("icon");
        image.src = icons[this.weather.icon];

        const description = document.createElement("p");
        description.classList.add("description");
        description.innerText = this.weather.description;

        const temperatures = document.createElement("div");
        temperatures.classList.add("temperatures-container");
        const high = document.createElement("p");
        high.innerText = this.weather.tempmax;
        high.classList.add("temperature");
        const low = document.createElement("p");
        low.classList.add("temperature");
        low.innerText = this.weather.tempmin;
        temperatures.appendChild(high);
        temperatures.appendChild(low);

        container.appendChild(date);
        container.appendChild(image);
        container.appendChild(description);
        container.appendChild(temperatures);

        return container;
    }

}

