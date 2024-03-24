

setInterval(() => {
    let shand = document.querySelector(".shand")
    let mhand = document.querySelector(".mhand")
    let hhand = document.querySelector(".hhand")
    var time = new Date()
    let sec = time.getSeconds() * 6
    let min = time.getMinutes() * 6
    let hr = time.getHours() * 30 + Math.round(min / 12)
    shand.style.transform = `rotate(${sec}deg)`
    mhand.style.transform = `rotate(${min}deg)`
    hhand.style.transform = `rotate(${hr}deg)`

}, 1000);