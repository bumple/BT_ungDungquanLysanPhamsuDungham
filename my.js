let product = ["Samsung Galaxy Fit E", "Samsung Galaxy Watch Active",
    "Samsung Galaxy Watch 42mm", "Samsung Galaxy M20",
    "Samsung Galaxy A30", "Samsung Galaxy A50",
    "Samsung Galaxy A70", "Samsung Galaxy S10 128GB",
    "Samsung Galaxy S10 Plus 128GB"]


let textTable = ""
let nProduct = product.length
for (let i = 0; i < nProduct; i++) {
    textTable += "<tr>";
    textTable += "<td>" + product[i] + "</td>"
    textTable += "<td>" + '<button type="button" onClick="editButton()" >Edit</button>' + "</td>"
    textTable += "<td>" + '<button type="button" onClick="deleteButton()">Delete</button>' + "</td>"
    textTable += "</tr>";
}
document.getElementById("tableId").innerHTML = textTable


let inputProduct = document.getElementById("input").value;
console.log(inputProduct)

function addProduct(input1) {
    product.push(input1);
}

console.log(product);
console.log(addProduct());


function deleteButton() {

}


