const apiurl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=twopart"
const que = document.querySelector(".que")
const ans = document.querySelector(".ans")
async function getJoke(url){
    try {
        const response = await fetch(url)
        if(!response.ok){
            que.innerHTML = "Loading..."
            ans.innerHTML = "Loading..."
            throw new Error("eror loading")
        }
        const data = await response.json()
        que.innerHTML = "-"+ data.setup
        ans.innerHTML = "\""+data.delivery+"\""
    } catch (error) {
        console.log(error)
    }
}

getJoke(apiurl)