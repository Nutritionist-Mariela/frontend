document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (!form.checkValidity()) {
                form.classList.add("was-validated");
                return;
            }

            const data = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                reason: document.getElementById("reason").value,
            };

            console.log("Data being sent:", data);

            try {
                const response = await fetch("https://api.marielabarcelo.com/api/appointments", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ data }),
                });

                const responseData = await response.json();
                console.log("Response:", responseData);

                hideAllToasts();

                if (response.ok) {
                    showToast("toastSuccess");
                    form.reset();
                    form.classList.remove("was-validated");
                } else {
                    showToast("toastError");
                }
            } catch (error) {
                console.error("Error:", error);
                hideAllToasts();
                showToast("toastError");
            }
        }, false);
    });

    console.log("Validación de formulario activada");
});

// Oculta todos los toasts y el fondo
function hideAllToasts() {
    document.querySelectorAll(".toast").forEach((toastElement) => {
        const toast = bootstrap.Toast.getInstance(toastElement) || new bootstrap.Toast(toastElement);
        toast.hide();
    });
    document.getElementById("toastContainer").style.display = "none";
}

// Muestra un toast y activa el fondo oscuro
function showToast(toastId) {
    const toastElement = document.getElementById(toastId);
    const toastContainer = document.getElementById("toastContainer");

    if (toastElement) {
        const toast = new bootstrap.Toast(toastElement);
        toastContainer.style.display = "flex"; // Muestra el fondo oscuro
        toast.show();

        toastElement.addEventListener("hidden.bs.toast", () => {
            toastContainer.style.display = "none";
        });
    }
}