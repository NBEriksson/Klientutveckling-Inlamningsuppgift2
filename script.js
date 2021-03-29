        localStorage.clear();
        let url = 'https://webacademy.se/fakestore/';
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            localStorage.setItem("items", JSON.stringify(data));
            productsOutput(data);
        })
        .catch(err => { throw err });

        function productsOutput(data){
            output = "";

            data.forEach(data => {
                id1=data.id;
                title=data.title;
                description=data.description.substr(0, 80)+"...";
                image=data.image;
                price=data.price;
                category=data.category;
           
                 //output += `<div class="d-flex justify-content-left">
                output += `<div style="height:460px" class="d-flex justify-content-left">
                    <div class="col-lg-6 mt-2 shop-items">
                        <div class="shop-item">
                            <div class="card" style="width: 14em;">
                                <span class="title">${title}</span>
                                <img src="${image}">
                                <div class="info">${description}</div>
                                <span class="price">$${price.toFixed(2)}</span>
                                <button id=${id1} onClick="reply_click(${this.id1})" type="button">KÖP</button>
                            </div>
                        </div>
                    </div>
                </div>`
            });

            document.getElementById("output").innerHTML=output;
        }



    