document.addEventListener('DOMContentLoaded', () => {
    const fields = ['name', 'last_name', 'mail', 'numero', 'edad', 'direccion', 'provincia', 'codigo_postal'];

    fields.forEach(field => {
        document.getElementById(field).addEventListener('input', (event) => {
            document.getElementById(`tabla_${field}`).textContent = event.target.value;
        });
    });

    // Para manejar el campo radio button
    document.querySelectorAll('input[name="contact_method"]').forEach(input => {
        input.addEventListener('change', (event) => {
            document.getElementById('tabla_contact_method').textContent = event.target.value;
        });
    });

    // Para manejar los checkboxes
    document.querySelectorAll('input[name="subscription_type"]').forEach(input => {
        input.addEventListener('change', () => {
            const selectedSubscriptions = Array.from(document.querySelectorAll('input[name="subscription_type"]:checked'))
                .map(checkbox => checkbox.value)
                .join(', ');
            document.getElementById('tabla_subscription_type').textContent = selectedSubscriptions;
        });
    });
});
