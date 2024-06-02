
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('userForm');
  const tableBody = document.getElementById('userTableBody');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const address = document.getElementById('address').value;
      const pincode = document.getElementById('pincode').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const foods = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
          .map(checkbox => checkbox.value);
      if (foods.length < 2) {
          alert("Please select at least two food choices.");
          return;
      }
      const state = document.getElementById('state').value;
      const country = document.getElementById('country').value;

      const newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${email}</td>
          <td>${address}</td>
          <td>${pincode}</td>
          <td>${gender}</td>
          <td>${foods.join(', ')}</td>
          <td>${state}</td>
          <td>${country}</td>
      `;
      tableBody.appendChild(newRow);

      form.reset();
  });
});





