
function sendMail(contactForm) {
    
      emailjs.send("gmail", "debs", {
        "from_name": contactForm.name.value,
        "from_startdate": contactForm.startdate.value,
        "from_enddate": contactForm.enddate.value,
        "from_adulttravellers": contactForm.adulttravellers.value,
        "from_childtravellers": contactForm.childtravellers.value,
        "from_email": contactForm.emailaddress.value,
        "itinerary_request": contactForm.holidaysummary.value,
    })

    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );


}

