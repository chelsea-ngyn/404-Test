document.addEventListener("DOMContentLoaded", function() {
    var grantsCtx = document.getElementById('grantsChart').getContext('2d');
    var grantsChart = new Chart(grantsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Pending', 'Not Started', 'Completed'],
            datasets: [{
                label: 'Grant Status',
                data: [10, 5, 15],
                backgroundColor: [
                    '#ADD8E6',
                    '#FFD700',
                    'Green'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%'
        }
    });

});