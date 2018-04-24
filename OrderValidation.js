
var globalId = 1;

function giveAnOrder(){
    
    var name = document.getElementById("1").value;
    var adress = document.getElementById("2").value;
    var postCodeCheck = /^(\d{4})$/;
    var postCode = document.getElementById("5").value;
    var item = document.getElementById("3").value;
    var quantity = parseInt(document.getElementById("4").value);
    var date = new Date();
    var formIsOkay = false;
    
    function validateForm (){

        if (name ==""){
            alert("Name must be filled out");
            return false;
        }
        if (adress ==""){
            alert("Adress must be filled out");
            return false;
        }
        if (!postCodeCheck.test(postCode)||postCode=="") 
        { 
        alert("Ikke korrekt postkode eller den mangler udfyldelse."); 
        return false; 
        } 
        if (item ==""){
            alert("item must be filled out");
            return false;
        }
        if (quantity <=0){
            alert("Quantity have to be a number and higher than 0");
            return false;
        }
        if (isNaN(quantity)){
            alert("Quantity have to a number");
            return false;
        //tilføj flere validering - postnummer har rigtigt format mv.
        }
        formIsOkay = true;
        //console.log(typeof(quantity));
    }

    var Order = function (name, adress, postCode, item, quantity){
        this.id = globalId;
        globalId++;
        this.name = name;
        this.adress = adress;
        this.postCode = postCode;
        this.dateOfOrder = date.toDateString();
        this.item = item;
        this.quantity = quantity;
            
        this.displayOrder = function (){
            document.getElementById("panel1").innerHTML="The order was valid and placed by " + this.name; 
            document.getElementById("panel2").innerHTML="\n\t the id of the order was: "+ this.id;
            document.getElementById("panel3").innerHTML="\n the order was placed on: " + this.dateOfOrder;
            document.getElementById("panel4").innerHTML="\t and holds " + this.quantity +" of " + this.item;
        }
    }
    
    validateForm();
    if (formIsOkay){
        var newOrder = new Order(name, adress, postCode, item, quantity);
        newOrder.displayOrder();
        //console.log(globalId);
    } else {
        document.getElementById("panel1").innerHTML="The order was not valid";
    }
}




