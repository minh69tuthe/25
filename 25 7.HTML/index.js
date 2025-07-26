let employees = [];

const form = document.getElementById("employeeForm");
const tbody = document.getElementById("employeeTableBody");
const resetButton = document.getElementById("resetBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("employeeId").value;
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const position = document.getElementById("position").value;
    const note = document.getElementById("note").value.trim();

    if (!name || !age || !position) return;

    if (id) {
        // Update
        const index = employees.findIndex(emp => emp.id == id);
        if (index !== -1) {
            employees[index] = { id: parseInt(id), name, age, gender, position, note };
        }
    } else {
        // Add new
        employees.push({ id: Date.now(), name, age, gender, position, note });
    }

    renderTable();
    resetForm();
});

resetButton.addEventListener("click", resetForm);

function renderTable() {
    tbody.innerHTML = "";
    employees.forEach((emp, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${emp.id}</td>
          <td>${emp.name}</td>
          <td>${emp.age}</td>
          <td>${emp.gender}</td>
          <td>${emp.position}</td>
          <td>${emp.note}</td>
          <td class="actions">
            <button onclick="editEmployee(${emp.id})">Sửa</button>
            <button onclick="deleteEmployee(${emp.id})">Xoá</button>
          </td>
        `;
        tbody.appendChild(tr);
    });
}

function editEmployee(id) {
    const emp = employees.find(e => e.id === id);
    if (emp) {
        document.getElementById("employeeId").value = emp.id;
        document.getElementById("name").value = emp.name;
        document.getElementById("age").value = emp.age;
        document.querySelector(`input[name="gender"][value="${emp.gender}"]`).checked = true;
        document.getElementById("position").value = emp.position;
        document.getElementById("note").value = emp.note;
    }
}

function deleteEmployee(id) {
    if (confirm("Bạn có chắc muốn xoá nhân viên này?")) {
        employees = employees.filter(emp => emp.id !== id);
        renderTable();
        resetForm();
    }
}

function resetForm() {
    form.reset();
    document.getElementById("employeeId").value = "";
}