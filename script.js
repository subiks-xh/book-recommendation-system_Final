document
  .getElementById("bookForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const genre = document.getElementById("genre").value.trim().toLowerCase();
    const output = document.getElementById("recommendation");

    if (!name || !age || !genre) {
      output.textContent = "Please fill all fields.";
      output.style.color = "red";
      return;
    }

    const allowedGenres = ["fiction", "fantasy", "science", "mystery"];

    if (!allowedGenres.includes(genre)) {
      output.textContent =
        "Sorry, only fiction, fantasy, science, or mystery genres are supported.";
      output.style.color = "red";
      return;
    }

    try {
      const res = await fetch(
        `https://your-backend-url.com/recommend?genre=${genre}`
      );
      const data = await res.json();

      output.style.color = "green";
      output.textContent = `Hello ${name}, based on your interest in ${genre}, we recommend: "${data.book}" 📖`;
    } catch (error) {
      output.textContent = "Error fetching recommendation. Please try again.";
      output.style.color = "red";
    }
  });
