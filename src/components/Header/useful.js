export let getDate = (e) => {
    let year = e.getFullYear();
    let month = e.getMonth();
    let day = e.getDate();

    month = (month < 10) ? '0' + month : month;
    day = (day < 10) ? '0' + day : day;

    return day + '.' + month + '.' + year;
};