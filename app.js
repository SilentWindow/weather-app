window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.timezone');
    let iconImage = document.querySelector(".icon");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.weatherapi.com/v1/current.json?key=cbe8a52c9c324752a7f200009212604&q=${lat},${long}`;
            
            
            fetch(api)
            .then (response => {
                return response.json();
            })
            .then (data => {
                console.log(data)
                const {temp_f} = data.current;
                const {icon, text} = data.current.condition;
                const {tz_id} = data.location;

                temperatureDegree.textContent = temp_f;
                temperatureDescription.textContent = text;
                locationTimezone.textContent = tz_id;
                iconImage.src = icon;
            });
        });


    }
})