document.querySelector('.collapse-icon').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('collapsed');
});

document.querySelector(".expand-icon").addEventListener('click', function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("collapsed");
})


//   const data = [
//     { title: "Palotalt Consulting", due: "07/18/19", amount: "₹ 1570.00", status: "ePayment" },
//     { title: "Palotalt Consulting", due: "07/18/19", amount: "₹ 1570.00", status: "ePayment" },
//     { title: "Another Client", due: "08/12/20", amount: "₹ 2500.00", status: "Pending" },
//     { title: "Another Client", due: "08/12/20", amount: "₹ 2500.00", status: "Pending" },
//   ];

//   const container = document.getElementById('card-container');
  
//   data.forEach(item => {
//     const cardHTML = `
//       <div class="card">
//         <h3 class="card-title">${item.title}</h3>
//         <p class="card-info">Due: ${item.due} &mdash; ${item.amount}</p>
//         <div class="status-label">${item.status}</div>
//         <div class="action-buttons">
//           <a href="#" class="button">Apply ePayment</a>
//         </div>
//       </div>
//     `;
//     container.innerHTML += cardHTML; 
//   });
