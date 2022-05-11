// Loader
function preloaderFadeOutInit() {
    $('.loader').fadeOut('slow');
}
// Window load function
jQuery(window).on('load', function() {
    (function($) {
        preloaderFadeOutInit();
    })(jQuery);
});

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

// PolarArea
const ctx2 = document.getElementById('teachersChart').getContext('2d');
const teachersChart = new Chart(ctx2, {
    type: 'polarArea',
    data: {
        labels: ['CSE', 'EEE', 'BBA', 'LAW', 'ENGLISH', 'POLITICAL SCIENCE'],
        datasets: [{
            label: 'Teachers',
            data: [6, 4, 8, 6, 5, 4],
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

// Books Stats
const ctx3 = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['CSE', 'EEE', 'BBA', 'LAW', 'ENGLISH', 'POLITICAL SCIENCE'],
        datasets: [{
            label: 'Books',
            data: [150, 110, 170, 130, 90, 80],
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


// Counter
const counters = document.querySelectorAll('.counter');
const speed = 50;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-count-target');
        const count = +counter.innerHTML;
        const increasedBy = target / speed;

        if (count < target) {
            counter.innerHTML = Math.ceil(count + increasedBy);
            setTimeout(updateCount, 1);
        } else {
            count.innerHTML = target;
        }
    }
    updateCount();
})