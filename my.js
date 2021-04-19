let product = ["Samsung Galaxy Fit E", "Samsung Galaxy Watch Active",
    "Samsung Galaxy Watch 42mm", "Samsung Galaxy M20",
    "Samsung Galaxy A30", "Samsung Galaxy A50",
    "Samsung Galaxy A70", "Samsung Galaxy S10 128GB",
    "Samsung Galaxy S10 Plus 128GB",]

function showNumberofProduct(number) {
    document.getElementById("numberOfproduct").innerHTML = "Tổng sản phẩm: " + number
}
showNumberofProduct(product.length);


function showProducts() {
    let textTable = ""
    for (let i = 0; i < product.length; i++) {
        textTable += "<tr>";
        textTable += '<td id="'+i+'">' + product[i] + "</td>"
        textTable += '<td><button type="button" onclick="">Edit</button></td>'
        textTable += "<td>";
        textTable += "<button onclick='deleteProduct("+i+")'>Delete</button>";
        textTable += "</td>";
        textTable += "</tr>";
    }
    document.getElementById("tableId").innerHTML = textTable;
}

showProducts();




function addProduct() {

    let inputProduct = document.getElementById("input").value;
    product.push(inputProduct);
    showProducts();
    showNumberofProduct(product.length);
}



function deleteProduct(index) {
    let comfirm = confirm("Bạn có chắc chắn muốn xóa?")
    if(comfirm === true){
        product.splice(index, 1)
        showProducts();
        showNumberofProduct(product.length);
    }

}


