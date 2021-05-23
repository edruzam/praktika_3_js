  let counter = 1;
  function addtable(){
    const name = document.getElementById("username").value
    const country = document.getElementById("country").value

    const table = document.getElementById("table_data")
    const tr = table.insertRow(-1)

    const idCell = tr.insertCell(-1)
    const nameCell = tr.insertCell(-1)
    const countryCell = tr.insertCell(-1);

    idCell.innerHTML = counter++
    nameCell.innerHTML = name
    countryCell.innerHTML = country

    table.appendChild(tr)
  }