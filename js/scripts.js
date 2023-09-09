// 

var barChartOptions = {
    series: [
        {
            name: 'Lucro líquido',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: 'Receita',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
            name: 'Fluxo de caixa livre',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
    ],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: ['#ff6d00', '#99E4E6', '#d7a10ce9'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
    },
    xaxis: {
        categories: ['Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
        labels: {
            style: {
                colors: '#f5f7ff',
            },
        },
    },
    yaxis: {
        title: {
            text: '$ (milhares)',
            style: {
                color: '#f5f7ff',
            },
        },
        labels: {
            style: {
                colors: '#f5f7ff',
            },
        },
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: '#5EDAEE',
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: '#f5f7ff',
        },
        show: true,
        position: 'bottom',
    },
    tooltip: {
        theme: 'dark',
        y: {
            formatter: function (val) {
                return '$ ' + val + ' thousands';
            },
        },
    },
};

var barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
);
barChart.render();

// AREA CHART

var areaChartOptions = {
    series: [
        {
            name: 'Ordens de compra',
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: 'Ordens de venda',
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ],
    chart: {
        type: 'area',
        background: 'transparent',
        height: 350,
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    colors: ['#ff6d00', '#FCF634'],
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    dataLabels: {
        enabled: false,
    },
    fill: {
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.1,
            shadeIntensity: 1,
            stops: [0, 100],
            type: 'vertical',
        },
        type: 'gradient',
    },
    grid: {
        borderColor: '#5EDAEE',
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: '#f5f7ff',
        },
        show: true,
        position: 'bottom',
    },
    markers: {
        size: 6,
        strokeColors: '#307178',
        strokeWidth: 3,
    },
    stroke: {
        curve: 'smooth',
    },
    xaxis: {
        axisBorder: {
            color: '#5EDAEE',
            show: true,
        },
        axisTicks: {
            color: '#5EDAEE',
            show: true,
        },
        labels: {
            offsetY: 5,
            style: {
                colors: '#f5f7ff',
            },
        },
    },
    yaxis: [
        {
            title: {
                text: 'Ordens de compra',
                style: {
                    color: '#f5f7ff',
                },
            },
            labels: {
                style: {
                    colors: ['#f5f7ff'],
                },
            },
        },
        {
            opposite: true,
            title: {
                text: 'Ordens de venda',
                style: {
                    color: '#f5f7ff',
                },
            },
            labels: {
                style: {
                    colors: ['#f5f7ff'],
                },
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark',
    },
};

var areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
);
areaChart.render();