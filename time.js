function startDate() {
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    document.getElementById("date").innerHTML = days[d.getDay()]+" | "+d.getDate()+" | "+months[d.getMonth()]+" | "+d.getFullYear();
}
startDate()
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = checkTime(m);
    document.getElementById('txt').innerHTML =  h + ":" + m + " " + ampm;
    setTimeout(startTime, 1000);
}
startTime()
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}