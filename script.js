document.addEventListener("DOMContentLoaded", function () {

    //donut chart
    var grantsCtx = document.getElementById('grantsChart').getContext('2d');
    var grantsChart = new Chart(grantsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Pending', 'Not Started', 'Completed'],
            datasets: [{
                label: 'Grant Status',
                data: [10, 5, 15],
                backgroundColor: [
                    '#ADD8E6', //pending
                    '#FFD700', //not started
                    'Green' //completed
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
    
    function updateDropdownText() {
        let selected = [];
        document.querySelectorAll('.multi-select-checkbox:checked').forEach(checkbox => {
            selected.push(checkbox.value);
        });

        let btnText = selected.length > 0 ? selected.join(', ') : 'Select Options';
        document.getElementById('multiSelectDropdownBtn').innerText = btnText;
    }

    document.querySelectorAll('.multi-select-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', function(event) {
            event.stopPropagation(); // Keep dropdown open when clicking checkboxes
            updateDropdownText();
        });
    });
    
});