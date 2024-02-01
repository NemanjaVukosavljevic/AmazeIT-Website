// const ctx = document.getElementById('myChart');


// Chart.defaults.color = "white";


//   new Chart(ctx, {
//     type: 'pie',
//     data: {
//       labels: ['ReactJS', 'AngularJS', 'Angular', 'Vue.js', 'Vuejs3', 'Svelte'],

//       datasets: [{
//         backgroundColor: [
//             'rgb(220, 52, 108)',
//             'rgb(252, 189, 156)',
//             'rgb(57, 29, 157)',
//             'rgb(170, 87, 159)',
//             'rgb(142, 165, 204)',
//             'rgb(76, 50, 92)',
//           ],
//         label: '# of Votes',
//         data: [19, 12, 9, 7, 4, 1],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });


var ctx = document.getElementById("myChart");

var config = {
  type: 'doughnut',
  data: {
    labels: ['HTML5', 'CSS3', 'JAVASCRIPT', 'PYTHON', 'SQL'],
    datasets: [{
      label: 'Percentage (%) of votes',
      data: [40, 20, 10, 11, 10],
      datalabels:{
        anchor: "end",
        align: "end",
        color:"black",
        font:{ size: 14, },
      },
      backgroundColor: [
                    'rgb(51, 187, 236, 1)',
                    'rgb(220, 52, 108)',
                    'rgb(239, 247, 109, 1)',
                    'rgb(66, 236, 215, 1)',
                    'rgb(253, 211, 99, 1)',
                    'rgb(161, 90, 218, 1)',
                  ],
      borderWidth: 1
    },
    // {
    //   label: 'Group 2',
    //   data: [69, -85, 92],
    //   datalabels:{
    //     anchor: "end",
    //     align: "end",
    //     color:"black",
    //     font:{ size: 14, },
    //   },
    //   backgroundColor: [
    //     'rgb(220, 52, 108)',
    //     'rgb(252, 189, 156)',
    //     'rgb(57, 29, 157)',
    //     'rgb(170, 87, 159)',
    //     'rgb(142, 165, 204)',
    //     'rgb(76, 50, 92)',
    //   ],
    //   borderWidth: 0,
    //   border: false
    // }
  ]
  },
  
  options: {
    animations: {
    },
      scales: {
        yAxes: [{
          ticks: {
          beginAtZero:true,
          max:100
          }
        }]
      }
    }
};

var chart = new Chart(ctx, config);


(function(){ // self calling function replaces document.ready()

//adding event listenr to button
document.querySelector('#button1').addEventListener('click',function(){
 
  chart.destroy();
	chart = new Chart(ctx, config);
});
})();



    