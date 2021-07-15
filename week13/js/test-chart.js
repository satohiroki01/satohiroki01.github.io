// 
var lineLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

var lineData = {
    labels: labels,
    datasets: [{
        label: '初めてのグラフ用データセット',
        borderColor: 'rgb(130, 60, 70)',
        backgroundColor: 'rgb(255, 100, 130)',
        data: [0, 10, 15, 3, 20, 60, 10],
    }]
};

var lineConfig = {
    type: 'line',
    lineData,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig,
);

// 棒グラフ
