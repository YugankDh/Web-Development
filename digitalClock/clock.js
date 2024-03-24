setInterval(() => {
    let today = new Date()
    let m = today.getMinutes()
    let s = today.getSeconds()
    let h = today.getHours()
    if (m < 10) {
        m = "0" + m
    }
    else if (h < 10) {
        h = "0" + h
    }
    else if (s < 10) {
        s = "0" + s
    }
    document.querySelector(".time").innerHTML = `${h}:${m}:${s}`
}, 1000);