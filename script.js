document.getElementById("Contactform").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("store_data.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        this.reset();
    });
});
