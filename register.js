document
  .getElementById("register-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = e.target.elements["name"].value;
    const email = e.target.elements["email"].value;
    const password = e.target.elements["password"].value;

    const userData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://67d55561d2c7857431f01215.mockapi.io/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        document.getElementById("result-message").textContent =
          "Registration successful!";
        document.getElementById("register-form").reset();
      } else {
        document.getElementById("result-message").textContent =
          "Registration failed. Try again.";
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("result-message").textContent =
        "Error during registration.";
    }
  });
