<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChartJs</title>
</head>
<body>
<?php

include '../connect.php';

$chartType = 'studentlist';
$query = "SELECT
            department as department,
            COUNT(id) as total
        FROM $chartType
        GROUP BY department";
$result = $connect->query($query);

if($result->num_rows > 0) {
    foreach($result as $data) {
        $department[] = $data['department'];
        $total[] = $data['total'];
    }
}
        
?>
<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

    <div class="container">
        <div class="canvasdiv">
            <canvas id="studentChart"></canvas>
        </div>
    </div>
   
    <script>
        // Books Stats
        // Bar
const ctx = document.getElementById('studentChart').getContext('2d');
const studentChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['CSE', 'EEE', 'BBA', 'LAW', 'ENGLISH', 'POLITICAL SCIENCE'],
        datasets: [{
            label: 'Students',
            data: [150, 50, 210, 420, 120, 110],
            backgroundColor: [
                'rgba(0, 0, 0, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});
    </script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js"></script>

</body>
</html>