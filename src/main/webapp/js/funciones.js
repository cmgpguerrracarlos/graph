const poblacion1 = [
    0.5, 0.7, 0.9, 1.05, 2.6, 2.8, 3, 3.1, 3.2, 3.3
];
const poblacion2 = [
    1, 1.7, 1.9, 1.95, 3.6, 3.5, 3.4, 2.1, 3.1, 3.3
];
const año = [1879, 1882, 1900, 1910, 1963, 1975, 1985, 1996, 2004, 2011];

const bgColor = [
                'rgb(0, 0, 0)', 
                'rgb(20, 20, 20)', 
                'rgb(40, 40,40)',
                'rgb(60, 60, 60)', 
                'rgb(80, 80, 80)', 
                'rgb(100, 100, 100)', 
                'rgb(120, 120, 120)',
                'rgb(140, 140, 140)', 
                'rgb(160, 160, 160)', 
                'rgb(180, 180, 180)'
            ]

const data = {
    labels: año,
    datasets: [{
            label: 'Evolucion de la poblacion1',
            data: poblacion1,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: bgColor
        },
        {
            label: 'Evolucion de la poblacion2',
            data: poblacion2,
            borderColor: 'rgb(0, 0, 192)',
            backgroundColor: bgColor
        }]
};

const databar = {
    labels: año,
    datasets: [{
            label: 'Evolucion de la poblacion1',
            data: poblacion1,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192)'
        },
        {
            label: 'Evolucion de la poblacion2',
            data: poblacion2,
            borderColor: 'rgb(0, 0, 192)',
            backgroundColor: 'rgb(0, 0, 192)'
        }]
};

const dataradar = {
    labels: año,
    datasets: [{
            label: 'Evolucion de la poblacion1',
            data: poblacion1,
            borderColor: 'rgb(75, 192, 192)'
        },
        {
            label: 'Evolucion de la poblacion2',
            data: poblacion2,
            borderColor: 'rgb(0, 0, 192)'
        }]
};

const configline = {
    type: 'line',
    data: databar
};

const configbar = {
    type: 'bar',
    data: databar
};

const configbubble = {
    type: 'bubble',
    data: databar
};

const configpie = {
    type: 'pie',
    data: data
};

const configradar = {
    type: 'radar',
    data: dataradar
};

