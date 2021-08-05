$(document).ready(function(){

    $('#dynamicTable').append(
      '<table><thead><tr><th>Number</th><th>Square</th></tr></thead></table>');
  
    $('table').append('<tbody></tbody>');
    for (let i=0;i<10;i++){
      let markUp = '<tr><td>'+(i+1)+'</td><td>'+((i+1)*(i+1))+'</td></tr>';
      tableBody = $("table tbody");tableBody.append(markUp);
    }
    $("tr:even").css("background-color", "steelblue");
  });