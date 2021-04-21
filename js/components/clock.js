function calcTimeTillDate(date) {
    const clock = new Date();
    let year = clock.getFullYear();

    let yearTarget = `${year}-${date}`;                         //gaunam 2021-03-15 14:30:00
    let yearDateObject = new Date(yearTarget);                  //gaunam datos objekta
    let currMiliseconds = yearDateObject.getTime();             //suzinom kiek milisekundziu praejo nuo 1970

    const nowInMiliseconds = Date.now();                        //susizinom kiek dabar milisekundziu
   
    if (currMiliseconds < nowInMiliseconds) {
        year++;
        yearTarget = `${year}-${date}`;
        yearDateObject = new Date(yearTarget);
        currMiliseconds = yearDateObject.getTime();
    } 

    const timeLeftInMiliseconds = currMiliseconds - nowInMiliseconds;
    const timeLeftInSeconds = Math.round(timeLeftInMiliseconds / 1000);

    const seconds = timeLeftInSeconds % 60;
    const minutes = (timeLeftInSeconds - seconds) / 60 % 60;
    const hours = (timeLeftInSeconds - seconds - minutes * 60) / 3600 % 24;
    const days = (timeLeftInSeconds - seconds - minutes * 60 - hours * 3600) / 86400;

    return {days, hours, minutes, seconds}
}

function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

function clock (selector, date) {
    const DOM = document.querySelector(selector);
    const timeLeft = calcTimeTillDate(date);
    const config = ['days', 'hours', 'minutes', 'seconds'];

    let HTML = '';

    for (const item of config) {
        const value = item !== 'days' ? formatNumber(timeLeft[item]) : timeLeft[item];

        HTML += `<div class="time">
                    <div class="value">${value}</div>
                    <div class="label">${item}</div>
                </div>`;
    }

    DOM.innerHTML = HTML;
}

export {clock}