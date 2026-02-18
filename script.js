let total = 0;
let count = 0;

const items = [
["Notebook",50],
["Pen",10],
["Pencil",5],
["Eraser",5],
["Sharpener",5],
["Highlighter",25],
["File Folder",15],
["Exam Pad",30],
["Calculator",200],
["Sticky Notes",10],
["Marker",30],
["Chart Paper",15]
];

const container = document.getElementById("productContainer");

items.forEach((item,index)=>{
    const card = document.createElement("div");
    card.className="card";
    card.innerHTML=`
        <h3>${item[0]}</h3>
        <p class="price">₹${item[1]}</p>
        <input type="number" min="1" value="1" class="qty" id="qty${index}">
        <br>
        <button onclick="addProduct('${item[0]}',${item[1]},'qty${index}')">
        Add to Cart
        </button>
    `;
    container.appendChild(card);
});

function addProduct(name,price,qtyId){
    let quantity = parseInt(document.getElementById(qtyId).value);
    let cost = price * quantity;

    let li = document.createElement("li");
    li.innerHTML = `
        ${name} x${quantity} = ₹${cost}
        <span class="remove-btn" onclick="removeItem(this, ${cost}, ${quantity})">❌</span>
    `;

    document.getElementById("cartItems").appendChild(li);

    total += cost;
    count += quantity;

    document.getElementById("total").textContent = total;
    document.getElementById("cartCount").textContent = count;
}

function removeItem(element, cost, quantity){
    element.parentElement.remove();

    total -= cost;
    count -= quantity;

    document.getElementById("total").textContent = total;
    document.getElementById("cartCount").textContent = count;
}

function placeOrder(){
    if(total === 0){
        alert("Cart is empty!");
    } else{
        alert("Order Placed Successfully!");
        document.getElementById("cartItems").innerHTML="";
        total=0;
        count=0;
        document.getElementById("total").textContent=0;
        document.getElementById("cartCount").textContent=0;
    }
}
