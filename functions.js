
 function validateForm(){

    var name = document.getElementById("name").value;
    localStorage.setItem('name', JSON.stringify(name));
    var phone = document.getElementById("phone").value;
    localStorage.setItem('phone', JSON.stringify(phone));
    var email = document.getElementById("email").value;
    localStorage.setItem('email', JSON.stringify(email));
    var adress = document.getElementById("adress").value;
    localStorage.setItem('adress', JSON.stringify(adress));

    if (name != '' && phone != '' && email != '' && adress != '') {//om alla fält är ifyllda
        //console.log("Alla fält är ifyllda");
    }
    else{
        console.log("Alla fält är inte ifyllda");
        alert("Alla fält är inte ifyllda");
        return false;
    }

    if (phone.length != 0) {//om telefonnummer är ifyllt
        //console.log("Telefonnummerrutan är ifylld");

        if(isNaN(phone) == true){
            alert("Endast siffror i fältet för telefonnummer!");
            return false;
        }
    }
    else{
        console.log("Telefonnummer är inte ifyllt");
        return false;
    }

    if (email.includes('@') && email.includes('.')) {
        //if (email.match(emailReg)) {
        console.log("Korrekt email");
    }
    else {
        console.log("Felaktigt email");
        alert("Ej giltig email!");
        return false;
    }

    if(adress.length != 0){
        console.log("Korrekt adress");
        return true;
    }
    else{
        console.log("Felaktig adress");
        return false;
    }
}   




function printMyItem(){
    var retrievedObjectId = localStorage.getItem('myChosenId');
    output = "";
    //hämta objektet med id = retrievedObjectId
    getMyArray = JSON.parse(localStorage.getItem("items")); 
        var myObject = getMyArray[retrievedObjectId-1];
        var title = myObject.title;
        localStorage.setItem("title", JSON.stringify(title));
        var image = myObject.image;
        var description = myObject.description.substr(0, 80)+"...";
        var price = myObject.price;
        localStorage.setItem("price", JSON.stringify(price));
        localStorage.setItem("myCart", JSON.stringify(myObject));
          
    output += `<div class="d-flex justify-content-left">
    <div class="col-lg-6 mt-2 shop-items">
        <div class="shop-item">
            <div class="card" style="width: 14em;">
                <span class="title">${title}</span>
                <img src="${image}">
                <div class="info">${description}</div>
                    <span class="price">$${price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    </div>`;

    document.getElementById("outputItem").innerHTML=output;
}




function getOrderinfo(){
    var user = JSON.parse(localStorage.getItem('name')); 
    var title = localStorage.getItem('title');
    var price = localStorage.getItem('price');

    output1 =
    `<h2 class="title">
    <br><br>
    Tack för din beställning ${user}
    <br><br><br><br>
    Din order är nu mottagen
    <br><br>
    Att betala: $${price}</h2>
    <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br>
    <br><br><br>`;

    document.getElementById("orderOutput").innerHTML=output1;
}

