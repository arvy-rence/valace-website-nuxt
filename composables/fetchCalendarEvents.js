const axios = require('axios');

const calendarID = "0j02lmdosjhu3pjvcskc4uu1rg@group.calendar.google.com";
const apiKey = "AIzaSyAntvjytg6M7BYE_xzS6wH34e2hvXetIz0"


const fetchEventsURL = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?key=${apiKey}`

console.log(fetchEventsURL);

(async () => {
    try {
        const response = await axios.get(fetchEventsURL);
        console.log(response.data)
    } catch (e) {
        console.log(e);
    }
})();