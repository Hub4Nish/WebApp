document.addEventListener("DOMContentLoaded", function () {
    // Sample products
    const products = ["Samsung Galaxy mobile", "Apple iPad Mini", "Oppo"];

    // Display existing products
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        addProductToUI(product);
    });

    // Function to add a new product
    window.addProduct = function () {
        const productNameInput = document.getElementById("productName");
        const productName = productNameInput.value.trim();

        if (productName !== "") {
            addProductToUI(productName);
            productNameInput.value = "";
        }
    };

    // Function to add a product to the UI
    function addProductToUI(productName) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${productName}</span>
            <button onclick="removeProduct(this)">Remove</button>
        `;
        productList.appendChild(listItem);
    }

    // Function to remove a product from the UI
    window.removeProduct = function (element) {
        const listItem = element.parentNode;
        productList.removeChild(listItem);
    };
});
