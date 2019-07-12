function startTime() {
    document.getElementById('global_clock_bj').innerHTML = calcTime(+8)
    document.getElementById('global_clock_ld').innerHTML = calcTime(+1)
    document.getElementById('global_clock_ny').innerHTML = calcTime(-4)
    t = setTimeout('startTime()', 1000)
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }
    return i
}

function calcTime(offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000 * offset));
    var h = nd.getHours()
    var m = nd.getMinutes()
    var s = nd.getSeconds()
    h = checkTime(h)
    m = checkTime(m)
    s = checkTime(s)
    return h + ":" + m + ":" + s

    var elements=hq_str_FU0.split(",");
	return document.write("燃油FU:"+elements[6]);
}

