// Write your code below:
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phone = document.querySelector('#phone');

const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

function handleFormSubmit(event) {
    event.preventDefault();

    // Retrieve existing users from local storage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem("Users")) || [];

    var UserDetails = {
        "username": event.target.username.value,
        "email": event.target.email.value,
        "phone": event.target.phone.value,
    };
    

    // Add the new user to the array
    existingUsers.push(UserDetails);

    // Save the updated array back to local storage
    localStorage.setItem("Users", JSON.stringify(existingUsers));

    // Create a list item and display user details
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${UserDetails.username} : ${UserDetails.email} : ${UserDetails.phone}`));

    userList.appendChild(li);

    // Clear input fields
    nameInput.value = '';
    emailInput.value = '';
    phone.value = '';

    // Optionally, you can display a success message
    msg.textContent = 'User added successfully';
    setTimeout(() => {
        msg.textContent = '';
    }, 2000);
}

module.exports = handleFormSubmit;
