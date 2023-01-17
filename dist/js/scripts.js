const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const day = document.getElementById('day')
const dayNumber = document.getElementById('day-number')
const month = document.getElementById('month')
const year = document.getElementById('year')

const days = [ 'Saturday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];
const months = [ 'January','February','March','April','May','June','July','August','September','October','November','December']

const setClock = () =>{
const date = new Date();

if(date.getHours() < 10) {
    hours.textContent = '0'+ `${date.getHours()}`
}else{ hours.textContent = date.getHours()}

if(date.getMinutes() < 10) {
    minutes.textContent = '0'+ `${date.getMinutes()}`
}else{ minutes.textContent = date.getMinutes()}

day.textContent = days[date.getDay()]
dayNumber.textContent = date.getDate()
month.textContent = months[date.getMonth()]
year.textContent = date.getFullYear()
}

setInterval(() => {
    setClock();
  }, 1000);

setClock()
