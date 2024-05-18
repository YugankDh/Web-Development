const ctx1 = document.getElementById("myChart1");

const ctx2 = document.getElementById("myChart2");

new Chart(ctx1, {
    type: "bar",
    data: {
        labels: ["opera", "chrome", "brave", "safari", "edge"],
        datasets: [
            {
                label: "number of Votes",
                data: [12, 19, 3, 5, 2],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                ticks: {
                    color: "white",
                },
                grid: {
                    color: "white",
                },
                beginAtZero: true,
            },
            x: {
                ticks: {
                    color: "white",
                },
                grid: {
                    display: false,
                },
                beginAtZero: true,
            },
        },
        backgroundColor: ["blue", "orangered", "lime", "orange", "purple"],
        bordercolor: "white",
        color: "white",
    },
});

new Chart(ctx2, {
    type: "pie",
    data: {
        labels: ["opera", "chrome", "brave", "safari", "edge"],
        datasets: [
            {
                label: "number of Votes",
                data: [12, 19, 3, 5, 2],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                display: false,
                beginAtZero: true,
            },
            x: {
                display: false,
            },
        },
        backgroundColor: ["blue", "orangered", "lime", "orange", "purple"],
        bordercolor: "white",
        color: "white",
    },
});
