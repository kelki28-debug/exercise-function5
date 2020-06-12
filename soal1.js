let userName = prompt('nama anda:');
let productName = prompt('produk yang di beli:');


const dataUser = (userName, productName) =>{
    return document.write(`thank you ${userName} to bought ${productName}`)
}

dataUser(userName, productName);