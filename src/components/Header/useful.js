export let getDate = (e) => {
    let year = e.getFullYear();
    let month = e.getMonth();
    let day = e.getDate();

    month = (month < 10) ? '0' + month : month;
    day = (day < 10) ? '0' + day : day;

    return day + '.' + month + '.' + year;
};

export let getTime = (e) => {
    let hours = e.getHours();
    let minutes = e.getMinutes();

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    return hours + ':' + minutes;
}