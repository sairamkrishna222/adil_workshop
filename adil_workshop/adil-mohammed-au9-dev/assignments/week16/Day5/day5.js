var table = document.createElement('table');

document.getElementsByTagName('body')[0].appendChild(table);

document.getElementsByTagName('table')[0].setAttribute('id','myTable');

var myTable = document.getElementById('myTable');

var thead = myTable.createTHead();

var row = thead.insertRow(0);
row.insertCell(0).innerHTML = 'Number';
row.insertCell(1).innerHTML = 'Square';

var tbody = myTable.createTBody();

for (let i=0;i<10;i++){
  let bodyRow = tbody.insertRow(i);
  bodyRow.insertCell(0).innerHTML = i+1;
  bodyRow.insertCell(1).innerHTML = (i+1)*(i+1);
}

for (let i=0;i<10;i++){
  if (i%2!==0){
    let j = document.getElementsByTagName('tbody')[0];
    let k = j.getElementsByTagName('tr')[i];
    k.setAttribute('class', 'oddBox');
  }
}
document.getElementsByTagName('thead')[0].setAttribute('id', 'heading');