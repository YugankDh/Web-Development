
function gen() {
    var urlinput = document.querySelector("input").value
    try {
        new URL(urlinput)
        var customurl = `https://www.qrtag.net/api/qr_transparent.png?url=${urlinput}`
        var html = `<img src="${customurl}">`
        console.log(html)
        document.querySelector(".image").innerHTML = html
        
    } catch (error) {
        alert("input a valid url")
    }
    
}
