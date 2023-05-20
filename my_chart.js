var barColors = ["Red", "red","darkGreen","orange","orange","darkGreen"];
  const ctx = document.getElementById('my_chart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        backgroundColor: barColors,
         label: 'Maintenance Frequency',
        data: [55, 49, 44, 24, 15,35],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

 