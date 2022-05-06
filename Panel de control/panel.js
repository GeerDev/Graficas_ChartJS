// Valores globales por defecto modificados
Chart.defaults.global.defaultFontColor = '#fff'
Chart.defaults.scale.gridLines.color = '#444'
Chart.defaults.scale.ticks.display = false

const compareRadialChart = (coasters, id) => {

    const data = {
        labels: ['EEUU', 'UK', 'España', 'Japón', 'China'],
        datasets: [
            {
                data: [
                    coasters.filter(elemento => elemento.country === 'United States').length,
                    coasters.filter(elemento => elemento.country === 'United Kingdom').length,
                    coasters.filter(elemento => elemento.country === 'Spain').length,
                    coasters.filter(elemento => elemento.country === 'Japan').length,
                    coasters.filter(elemento => elemento.country === 'China').length
                ],
                borderWidth: 1,
                borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
                backgroundColor: ['rgba(116, 72, 194, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)', 'rgba(156, 153, 204, .2)', 'rgba(225, 78, 202, .2)']
            }
        ]
    }

    const options = {
        legend: {
            position: 'right'
        }
    }

    new Chart(id, { type: 'polarArea', data, options })
}

const modelDoughnutChart = (coasters, id) => {

    const data = {
        labels: ['Propulsada', 'Hiper montaña', 'Giga montaña', 'Inversión', 'Sentado'],
        datasets: [
            {
                data: [
                    coasters.filter(eachCoaster => eachCoaster.model === 'Accelerator Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Giga Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Multi Inversion Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Sitting Coaster').length
                ],
                borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
                backgroundColor: ['rgba(116, 72, 194, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)', 'rgba(156, 153, 204, .2)', 'rgba(225, 78, 202, .2)'],
                borderWidth: 1
            }
        ]
    }

    const options = {
        legend: {
            position: 'right'
        }
    }

    new Chart(id, { 
        type: 'doughnut', 
        data, 
        options })
}

const heightRadarChart = (coasters, id) => {

    const selectedCoasters = coasters.filter(eachCoaster => eachCoaster.height > 80)

    const data = {
        labels: selectedCoasters.map(eachCoaster => eachCoaster.name),
        datasets: [
            {
                label: 'Altura',
                data: selectedCoasters.map(eachCoaster => eachCoaster.height),
                borderColor: 'rgba(116, 72, 194, 1)',
                borderWidth: 1
            }
        ]
    }

    const options = {
        legend: {
            display: false
        }
    }

    new Chart(id, { type: 'radar', data, options })
}

const GForceBarsChart = (coasters, id) => {

    const selectedCoasters = coasters.filter(eachCoaster => eachCoaster.gForce !== null)

    const data = {
        labels: selectedCoasters.map(eachCoaster => eachCoaster.name),
        datasets: [{
            data: selectedCoasters.map(eachCoaster => eachCoaster.gForce),
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)', 'rgba(156, 153, 204, .2)', 'rgba(225, 78, 202, .2)']
        }]
    }

    const options = {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: true
                }
            }],
            xAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }

    new Chart(id, { type: 'bar', data, options })

}

const countriesRadarChart = (coasters, id) => {

    const selectedCoasters = coasters.filter(eachCoaster => eachCoaster.country === 'Spain')

    const data = {
        labels: selectedCoasters.map(eachCoaster => eachCoaster.name),
        datasets: [
            {
                label: 'Altura',
                data: selectedCoasters.map(eachCoaster => eachCoaster.height),
                borderColor: 'rgba(116, 72, 194, 1)',
                backgroundColor: 'rgba(116, 72, 194, .2)'
            },
            {
                label: 'Velocidad',
                data: selectedCoasters.map(eachCoaster => eachCoaster.speed),
                borderColor: 'rgba(205, 58, 129, 1)',
                backgroundColor: 'rgba(205, 58, 129, .2)'
            }
        ]
    }

    const options = {
        legend: {
            position: 'left'
        }
    }

    new Chart(id, { type: 'radar', data, options })
}

const yearsBarChart = (coasters, id) => {

    const data = {
        labels: ['1995-1997', '1998-2000', '2001-2003', '2004-2006', '2007-2009', '2013-2015', '2016-2018', '2019-2021'],
        datasets: [
            {
                label: 'Montañas creadas',
                borderColor: 'rgba(156, 153, 204, 1)',
                data: [
                    coasters.filter(eachCoaster => eachCoaster.year >= 1995 && eachCoaster.year <= 1997).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 1998 && eachCoaster.year <= 2000).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2001 && eachCoaster.year <= 2003).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2004 && eachCoaster.year <= 2006).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2007 && eachCoaster.year <= 2009).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2010 && eachCoaster.year <= 2012).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2013 && eachCoaster.year <= 2015).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2016 && eachCoaster.year <= 2018).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2019 && eachCoaster.year <= 2021).length
                ]
            },
            {
                type: 'bar',
                label: 'Montañas del modelo Hiper Montaña',
                borderColor: 'rgba(217, 158, 43, 1)',
                backgroundColor: 'rgba(217, 158, 43, 1)',
                data: [
                    coasters.filter(eachCoaster => eachCoaster.year >= 1995 && eachCoaster.year <= 1997 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 1998 && eachCoaster.year <= 2000 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2001 && eachCoaster.year <= 2003 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2004 && eachCoaster.year <= 2006 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2007 && eachCoaster.year <= 2009 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2010 && eachCoaster.year <= 2012 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2013 && eachCoaster.year <= 2015 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2016 && eachCoaster.year <= 2018 && eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2019 && eachCoaster.year <= 2021 && eachCoaster.model === 'Hyper Coaster').length
                ]
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    display: true
                }
            }],
            xAxes: [{
                ticks: {
                    display: true
                }
            }]
        }
    }

    new Chart(id, { type: 'line', data, options })

}

// Hilo principal
const printCharts = (coasters) => {

    compareRadialChart(coasters, 'chart2')
    modelDoughnutChart(coasters, 'chart4')
    heightRadarChart(coasters, 'chart3')
    GForceBarsChart(coasters, 'chart5')
    countriesRadarChart(coasters, 'chart1')
    yearsBarChart(coasters, 'chart6')

}

// Llamada a la API
axios.get("https://coasters-api.herokuapp.com/")
.then(respuesta => {
    const { data } = respuesta
    printCharts(data)
})


