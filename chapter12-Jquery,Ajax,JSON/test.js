$(document).ready(function(){
  var headline = ["이름","나이","직책"];
  var team='['+'{"name":"심재현","age":"30세","rank":"팀장"},{"name":"정민지","age":"29세","rank":"팀원"}'+
            ',{"name":"박재훈","age":"29세","rank":"팀원"},{"name":"한형규","age":"28세","rank":"팀원"}'+
            ',{"name":"김지혜","age":"24세","rank":"팀원"}]';
  var teams = JSON.parse(team);
  var table = document.createElement('table');
  table.style.border = "1px solid black";
  table.style.margin = "10px";
  table.style.borderCollapse = "collapse";
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  for(var i=0;i<1;i++){
    var tr = document.createElement('tr');
    for(var j=0;j<headline.length;j++){
      var th = document.createElement('th');
      th.textContent= headline[j];
      th.style.border = "1px solid gray";
      tr.appendChild(th);
    }
    tbody.appendChild(tr);
  }
  for(var i=0;i<teams.length;i++){
    var tr = document.createElement('tr');
    for(var j=0;j<(headline.length-(headline.length-1));j++){
      var td = document.createElement('td');
      td.textContent=teams[i].name;
      td.style.border = "1px solid black";
      tr.appendChild(td);
    }
    for(var j=0;j<(headline.length-(headline.length-1));j++){
      var td = document.createElement('td');
      td.textContent=teams[i].age;
      td.style.border = "1px solid black";
      tr.appendChild(td);
    }
    for(var j=0;j<(headline.length-(headline.length-1));j++){
      var td = document.createElement('td');
      td.textContent=teams[i].rank;
      td.style.border = "1px solid black";
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  document.body.append(table);
});
