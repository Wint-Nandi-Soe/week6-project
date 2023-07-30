 function getCityName(event) {
            event.preventDefault();
            let cityName = document.querySelector("#city-input");
            let h1 = document.querySelector("#city");
            h1.innerHTML = cityName.value;
        }
        let button = document.querySelector("#search-button");
        button.addEventListener("submit", getCityName);
        function showTemperature(response) {
            let h1 = document.querySelector("#city");
            let temp = document.querySelector("#temperature");
            let currentTem = Math.round(response.data.main.temp);
            temp.innerHTML = currentTem;
            h1.innerHTML = response.data.name;
        }
        function getPosition(position) {
            let apiKey = "f25f47a5f94b046a3902e21ded66f15f";
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
            axios.get(url).then(showTemperature);
        }
        function changeCurrentLocation() {
            navigator.geolocation.getCurrentPosition(getPosition);
        }
        let current = document.querySelector("#current-button");
        current.addEventListener("click", changeCurrentLocation);