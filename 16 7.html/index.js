// lấy giá trị từ ô input
$(document).ready(function () {
      let count = 1;

      $("#studen").submit(function (e) {
        e.preventDefault();

        const name = $("#name").val().trim();
        const age = $("#age").val().trim();
       
        const classmin =$("classmin").val().trim();
        if (name && age && gender) {
          const row = `
            <tr>
              <td>${count++}</td>
              <td>${name}</td>
              <td>${age}</td>
             
              <td>${classmin}</td>
              <td><span class="deleteBtn">Xóa</span></td>
            </tr>
          `;
          $("#studenlist").append(row);
          $("#studen")[0].reset();
        }
      });

      $("#userList").on("click", ".deleteBtn", function () {
        $(this).closest("tr").remove();
      });
    });