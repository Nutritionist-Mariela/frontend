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

// Función para mostrar un toast específico
function showToast(toastId) {
    const container = document.getElementById('toastContainer');
    const toast = document.getElementById(toastId);

    // Mostrar el overlay y el toast
    container.classList.add('show');
    toast.classList.add('show');

    // Configurar el cierre automático después de 3 segundos
    setTimeout(() => {
        hideToast(toastId);
    }, 3000);
}

// Función para ocultar un toast específico
function hideToast(toastId) {
    const container = document.getElementById('toastContainer');
    const toast = document.getElementById(toastId);

    // Ocultar el toast
    toast.classList.remove('show');

    // Verificar si hay otros toasts visibles
    const visibleToasts = document.querySelectorAll('.toast.show');
    if (visibleToasts.length === 0) {
        // Si no hay toasts visibles, ocultar el overlay
        container.classList.remove('show');
    }
}

// Función para ocultar todos los toasts
function hideAllToasts() {
    const container = document.getElementById('toastContainer');
    const toasts = document.querySelectorAll('.toast');

    toasts.forEach(toast => {
        toast.classList.remove('show');
    });
    container.classList.remove('show');
}

// Agregar event listeners a los botones de cierre
document.querySelectorAll('.btn-close').forEach(button => {
    button.addEventListener('click', function () {
        const toast = this.closest('.toast');
        hideToast(toast.id);
    });
});