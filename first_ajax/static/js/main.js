document.addEventListener("DOMContentLoaded", function() {

    const getDataBtn = document.getElementById("data_button");
    console.log('Get more data', getDataBtn);


    getDataBtn.addEventListener('click', function() {
        console.log("Button Click 😃")
        const request = axios.get('http://intro-ajax-api.herokuapp.com/')
            .then(function(resp) {
                const dataElem = document.createElement('div');
                dataElem.innerHTML = resp.data;
                document.body.appendChild(dataElem);


            });

    });

    const getPingPongBtn = document.getElementById("ping_pong")

    getPingPongBtn.addEventListener('click', function() {
        console.log("Ping-Pong button clicked!")
        const request = axios.get('http://intro-ajax-api.herokuapp.com/ping')
            .then(function(resp) {
                const pingElem = document.createElement('div');
                pingElem.innerHTML = resp.data;
                document.body.appendChild(pingElem);
                console.log("Successful request was made")
            })

        .catch(function(error) {
            console.log('Something went wrong', error)


        }).then(function(resp) {
            const pingElem = document.createElement('div');
            pingElem.innerHTML = resp.data;
            document.body.appendChild(pingElem);
            console.log("Hey that request finished")
        })

    });

    const countBtn = document.getElementById("count_button")

    countBtn.addEventListener('click', function() {
        console.log("Count button was clicked!")
        const request = axios.get('http://intro-ajax-api.herokuapp.com/count')
            .then(function(resp) {
                const countElem = document.createElement('div');
                countElem.innerHTML = resp.data;
                document.body.appendChild(countElem)
                console.log("Successful request was made dawg")
            })
    })

    const timeBtn = document.getElementById("time_button")

    timeBtn.addEventListener('click', function() {
        console.log("Time button was clicked")
        const request = axios.get('http://intro-ajax-api.herokuapp.com/time', {
                params: {
                    timezone: 'Pacific/Honolulu'
                }
            })
            .then(function(resp) {
                const timeElem = document.createElement('div');
                timeElem.innerHTML = resp.data;
                document.body.appendChild(timeElem)
                console.log("Woop woop woooop")
            })
    })

    const carBtn = document.getElementById("car_button")

    carBtn.addEventListener('click', function() {
        console.log("Car Button was clicked!")
        const request = axios.get('http://intro-ajax-api.herokuapp.com/a_car')
            .then(function(resp) {
                const carElem = document.createElement('ul')
                carElem.innerHTML = resp.data;
                document.body.appendChild(carElem)
                console.log("Loook its a car woooo")
            })
    })

});