  let counter = 1;
  function addtable(){
    const name = document.getElementById("username").value
    const country = document.getElementById("country").value
    const email = document.getElementById("email").value
    const birthday = document.getElementById("birthday").value
    const password = document.getElementById("password").value
    const gender = document.getElementById("gender").value

    const table = document.getElementById("table_data")
    const tr = table.insertRow(-1)

    const idCell = tr.insertCell(-1)
    const nameCell = tr.insertCell(-1)
    const countryCell = tr.insertCell(-1);
    const emailCell = tr.insertCell(-1);
    const birthdayCell = tr.insertCell(-1);
    const passwordCell = tr.insertCell(-1);
    const genderCell = tr.insertCell(-1);

    idCell.innerHTML = counter++
    nameCell.innerHTML = name
    countryCell.innerHTML = country
    emailCell.innerHTML = email
    birthdayCell.innerHTML = birthday
    passwordCell.innerHTML = password
    genderCell.innerHTML = gender

    table.appendChild(tr)
  }