var mp = new MercadoPago('TEST-a82c7392-8732-4670-abdf-f1e37a2d442c', {
    locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
});
// Handle call to backend and generate preference.
var click = document.getElementById("mercadopago-button")
if (click) {
    click.addEventListener("click", function() {

        $('mercadopago-button').attr("disabled", true);
        const items = localStorage.getItem('Compra')
        const orderData = {

            items
            /*
                        prodSku: document.getElementById("sku").innerHTML,
                        prodName: document.getElementById("name").innerHTML,
                        unit_price: document.getElementById("unit-price").innerHTML,
                        quantity: document.getElementById("quantity").value,*/
        };



        fetch("https://jcommerce.herokuapp.com/api/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(preference) {
                createCheckoutButton(preference.id);
                localStorage.clear()
            })
            .catch(function() {
                alert("Unexpected error");
                $('#checkout-btn').attr("disabled", false);
            });
    });

    // Create preference when click on checkout button
    function createCheckoutButton(preferenceId) {
        // Initialize the checkout
        $('mercadopago-button').attr("disabled", true);
        mp.checkout({
            preference: {
                id: preferenceId
            },
            autoOpen: true
        });
    }
    document.getElementById("go-back").addEventListener("click", function() {
        $(".container_payment").fadeOut(500);
        setTimeout(() => {
            $(".shopping-cart").show(500).fadeIn();
        }, 500);
        $('#checkout-btn').attr("disabled", false);
    });
}