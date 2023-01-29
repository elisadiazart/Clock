const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const dayElement = document.getElementById('day')
const dayNumber = document.getElementById('day-number')
const monthElement = document.getElementById('month')
const yearElement = document.getElementById('year')
const hoursHand = document.getElementById('hour-hand');
const minutesHand = document.getElementById('minute-hand');
const secondsHand = document.getElementById('second-hand');

const days = [ 'Saturday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];
const months = [ 'January','February','March','April','May','June','July','August','September','October','November','December']

const setClock = () =>{
const date = new Date();

if(date.getHours() < 10) {
    hoursElement.textContent = '0'+ `${date.getHours()}`
}else{ hoursElement.textContent = date.getHours()}

if(date.getMinutes() < 10) {
    minutesElement.textContent = '0'+ `${date.getMinutes()}`
}else{ minutesElement.textContent = date.getMinutes()}



dayElement.textContent = days[date.getDay()]
dayNumber.textContent = date.getDate()
monthElement.textContent = months[date.getMonth()]
yearElement.textContent = date.getFullYear()

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();


const secondsDegrees = seconds * 6;
secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

const minutesDegrees = minutes * 6 + seconds / 10;
minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

const hourDegrees = hours * 30 + minutes / 2;
hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(() => {
    setClock();
  }, 1000);

setClock()
