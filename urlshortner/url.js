async function genUrl() {
    var originalurl = document.getElementById("url").value;
    var apiurl =
        "https://tinyurl.com/api-create.php?url=" +
        encodeURIComponent(originalurl);

    try {
        const response = await fetch(apiurl);

        if (!response.ok) {
            throw new Error("Error generating url");
        }
        var shortenedurl = await response.text();
        document.getElementById("newurl").value = shortenedurl
    } catch (error) {
        console.log(error);
    }
}

function copy() {
    const url = document.getElementById("newurl");
    url.select();
    document.execCommand("copy");
}
