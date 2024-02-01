
const ctx2 = document.getElementById('myChart2');
Chart.defaults.color = "white";


  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Javascript (JS)', 'Java', 'C#', 'Ruby', 'PHP', 'Laravel'],
      datasets: [{
        label: '# of Votes',
        data: [24, 19, 3, 5, 2, 3],
        borderWidth: 1,
        
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


  var chart = new Chart(ctx, config);


(function(){ // self calling function replaces document.ready()

//adding event listenr to button
document.querySelector('#button1').addEventListener('click',function(){
 
  chart.destroy();
	chart = new Chart(ctx, config);
});
})();