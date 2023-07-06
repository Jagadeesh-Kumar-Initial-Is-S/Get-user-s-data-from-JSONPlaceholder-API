// Submitted and coded by Jagadeesh Kumar with initial as S, you may send mail to my email address which is equal to jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is equal to jagadeesh-kumar@airtel .
document.getElementById('getUsers').addEventListener('click', fetchUsers);

function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let response = '';
      for (let i = 0; i < data.length; i++) {
        // Submitted and coded by Jagadeesh Kumar with initial as S, you may send mail to my email address which is equal to jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is equal to jagadeesh-kumar@airtel .
        response += `<div>
                                    <h2> <b>User ID: ${data[i].id}</b> </h2>
                                        <ul>
                                            <li> <b>User Full Name</b>: ${data[i].name}</li>
                                            <li> <b>User Email</b>: ${data[i].email} </li>
                                            <li> <b>User Address</b>: ${data[i].address.city}, ${data[i].address.street}, ${data[i].address.suite}, ${data[i].address.zipcode} </li>
                                            <li> <b>User Geolocation</b> 
                                                <ul>
                                                    <li> <b>Latitude</b>: ${data[i].address.geo.lat}</li>
                                                    <li> <b>Longitude</b>: ${data[i].address.geo.lng}</li>
                                                </ul>
                                            </li>
                                            <li> <b>User Phone</b>: ${data[i].phone}</li>
                                            <li> <b>User Website</b>: ${data[i].website}</li>
                                            <li> <b>User Company</b> 
                                                <ul>
                                                    <li> <b>Company Name</b>: ${data[i].company.name}</li>
                                                    <li> <b>Company Catchphrase</b>: ${data[i].company.catchPhrase}</li>
                                                    <li> <b>Company BS</b>: ${data[i].company.bs}</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>`;
      }

      document.getElementById("usersList").innerHTML = response;
    });
}
    // Submitted and coded by Jagadeesh Kumar with initial as S, you may send mail to my email address which is equal to jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is equal to jagadeesh-kumar@airtel .