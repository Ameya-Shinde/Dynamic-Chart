const ctx = document.getElementById('realTimeChart').getContext('2d');
        let chart;

        const initialData = {
            labels: [],
            datasets: [{
                label: 'Live Data',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false,
            }],
        };

        const chartConfig = {
            type: 'line',
            data: initialData,
            options: {
                animation: true,
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Time',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Value',
                        },
                    },
                },
            },
        };

        chart = new Chart(ctx, chartConfig);

        function addData() {
            const newData = Math.random() * 100;
            chart.data.labels.push(chart.data.labels.length);
            chart.data.datasets[0].data.push(newData);
            chart.update(); 
        }
        setInterval(addData, 2000);

        
        anime({
            targets: '#realTimeChart',
            rotate:'1turn',
            duration: 3000,
            easing: 'easeInOutSine',
            scale:.1,
            direction: 'reverse',
            autoplay: true,
          });      