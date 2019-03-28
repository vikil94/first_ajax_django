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
            })
    })

});