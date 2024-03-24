const apiurl = "https://api.quotable.io/random";
const cont = document.querySelector(".content");
const auth = document.querySelector(".author");

async function getQuote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            cont.innerHTML = "Loading..."
            auth.innerHTML = "Loading..."
            throw new Error('Failed to fetch data ');

        }
        const data = await response.json();
        cont.innerHTML = "\"" + data.content + "\"";
        auth.innerHTML = "-" + data.author;
    } catch (error) {
        console.error(error);

    }
}

getQuote(apiurl);
