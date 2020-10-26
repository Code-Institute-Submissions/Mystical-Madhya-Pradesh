const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('emailaddress');
const startdate = document.getElementById('startdate');
const enddate = document.getElementById('enddate');
const adulttravellers = document.getElementById('adulttravellers');
const childtravellers = document.getElementById('childtravellers');
const holidaysummary = document.getElementById('holidaysummary');

form.addEventListener('submit', (e) =>
{
e.preventDefault();

checkInputs();

});

function checkInputs(){
    const fullnameValue = fullname.value.trim()
    const emailValue = email.value.trim()
    const startdateValue = startdate.value.trim()
    const enddateValue = enddate.value.trim()
    const adulttravellersValue = adulttravellers.value.trim()
    const childtravellersValue = childtravellers.value.trim()
    const holidaysummaryValue = holidaysummary.value.trim()
  
}