const refs = {
  day: document.querySelector('[data-value="days"]'),
  hour: document.querySelector('[data-value="hours"]'),
  minute: document.querySelector('[data-value="mins"]'),
  second: document.querySelector('[data-value="secs"]'),
   };

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        };

        this.isActive = true;
        const startTime = new Date('Dec 31, 2020');

        getTime(0);

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;

            getTime(deltaTime);
        }, 1000);
    },
};

const getTime = (time) => {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    setTime(days, hours, mins, secs);
}

const setTime = (days, hours, mins, secs) => {
refs.day.textContent = days;
refs.hour.textContent = hours;
refs.minute.textContent = mins;
refs.second.textContent = secs;
    }
    
function pad(value) {
  return String(value).padStart(2, '0');
};
timer.start();



//    new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

