const refs = {
  day: document.querySelector('[data-value="days"]'),
  hour: document.querySelector('[data-value="hours"]'),
  minute: document.querySelector('[data-value="mins"]'),
  second: document.querySelector('[data-value="secs"]'),
   };

class CountdownTimer {
    intervalId = null;
    isActive = false;
    
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    start() {
        if (this.isActive) {
            return;
        };

        this.isActive = true;
                getTime(0);

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;

            getTime(deltaTime);
        }, 1000);
    };
};

const getTime = (time) => {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    setTime(days, hours, mins, secs);
};

const setTime = (days, hours, mins, secs) => {
    refs.day.textContent = days;
    refs.hour.textContent = hours;
    refs.minute.textContent = mins;
    refs.second.textContent = secs;
};
    
function pad(value) {
  return String(value).padStart(2, '0');
};
const currentTime = Date.now();
const deltaTime = new Date('Jan 01, 2021') - currentTime;

const timer = new CountdownTimer({
   selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
});
 
timer.start();
