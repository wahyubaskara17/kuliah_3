var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertData(formData);
  else updateData(formData);
  resetForm();
}
function readFormData() {
  var formData = {};
  formData["nim"] = document.getElementById("nim").value;
  formData["nama"] = document.getElementById("nama").value;
  return formData;
}

var no = 1;

function insertData(data) {
  var table = document
    .getElementById("datalist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell0 = newRow.insertCell(0);
  cell0.innerHTML = no++;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.nim;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = data.nama;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a> |
                        <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("nim").value = "";
  document.getElementById("nama").value = "";
  selectedRow = null;
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("nim").value = selectedRow.cells[1].innerHTML;
  document.getElementById("nama").value = selectedRow.cells[2].innerHTML;
}

function updateData(formData) {
  selectedRow.cells[1].innerHTML = formData.nim;
  selectedRow.cells[2].innerHTML = formData.nama;
}

function onDelete(td) {
  if (confirm("are you sure to delete this data?")) {
    row = td.parentElement.parentElement;
    document.getElementById("datalist").deleteRow(row.rowIndex);
    resetForm();
  }
}