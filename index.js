var productName = document.getElementById("productName")
var productprice = document.getElementById("productprice")
var productcat = document.getElementById("productcat")
var productdesc = document.getElementById("productdesc")
var productList = []
var mainBtn = document.getElementById("mainBtn")

if (localStorage.getItem("list")!= null)  {
    productList =JSON.parse(localStorage.getItem("list"))
    display(productList)
} else {
    productList=[]
}


function addproduct() {
    if (mainBtn.innertext =="update") {
    
    } else {
        var product = {
            name: productName.value ,
            price: productprice.value ,
            category: productcat.value ,
            desc: productdesc.value , 
        }  
        productList.push(product)
        localStorage.setItem("list",JSON.stringify(productList))
        clearform()
        display(productList);
    }

}


function display(list) {
    var cartona =``;
    for ( var i = 0; i < list.length; i++) {
        cartona += `<tr>
        <td>${i+1}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].desc}</td>
        <td><button class="btn btn-warning"  onclick="update(${i})">update</button></td>
        <td><button class="btn btn-danger" onclick="delet(${i})">delete</button></td>
    </tr>`
        document.getElementById("data").innerHTML = cartona
    }
    
}
// i ???
// index ??
// update ?????



function delet(index) {
    productList.splice(index,1)
    localStorage.setItem("list",JSON.stringify(productList))
    display(productList)  
}

function update(index) {
   
    productName.value =productList[index].name
    productprice.value =productList[index].price
    productcat.value =productList[index].category
    productdesc.value =productList[index].desc
    mainBtn.innerText="update"


    
}
 

function clearform() {
    productName.value =''
    productprice.value=''
    productcat.value=''
    productdesc.value=''
}



function search(searchkey) {
    var searchlist =[]
    for ( i = 0 ; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(searchkey.toLowerCase())) {
            searchlist.push(productList[i])
        }
    } 
    display(searchlist)
}
// search()