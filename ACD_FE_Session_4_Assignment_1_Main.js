function navigationPage(){
    var PageRedirect=document.getElementById("vehicleType").value;
    console.log(PageRedirect);
    if(PageRedirect=="Four Wheeler")
        {
            //window.location.href = "http://www.google.com";
            window.location.href = "file:///R:/Study/Acadgild/Assignment/Advanced%20Javascript%20Part%204/ACD_FE_Session_4_Assignment_1_Main/fourWheeler.html";
        }
    else if(PageRedirect=="Two Wheeler"){
       // window.location.href = "http://www.facebook.com";
        window.location.href = "file:///R:/Study/Acadgild/Assignment/Advanced%20Javascript%20Part%204/ACD_FE_Session_4_Assignment_1_Main/twoWheeler.html";
    }
}
function Vehicle(name,description,vehicleType,costPerKm){
    this.name=name;
    this.description=description;
    this.vehicleType=vehicleType;
    this.costPerKm=costPerKm;
}

function fourWheeler(fuelType){
    this.fuelType=fuelType;
}
var vehicle1=new Vehicle("BMW","The best car of 2015 ","4 wheeler",60); //four wheeler object
var car=Object.create(vehicle1);
car.fuelType="CNG";
console.log("Name : " +car.name);
var vehicle2=new Vehicle("Scooty","The best bike of 2015 ","2 wheeler",5);
var scooty=Object.create(vehicle2);
console.log("Two Wheeler name : " + scooty.name);


function getValuesForFourWheeler(){
    //fname,fdesc,fcost,fvehicleType,FfuelType;
    document.getElementById("fname").innerHTML=car.name;
    document.getElementById("fdesc").innerHTML=car.description;
    document.getElementById("fcost").innerHTML=car.costPerKm;
    document.getElementById("fvehicleType").innerHTML=car.vehicleType;
    document.getElementById("FfuelType").innerHTML=car.fuelType;
}

function getValuesForTwoWheeler(){
    //fname,fdesc,fcost,fvehicleType,FfuelType;
    document.getElementById("tname").innerHTML=scooty.name;
    document.getElementById("tdesc").innerHTML=scooty.description;
    console.log("scooty.description" +scooty.description);
    document.getElementById("tcost").innerHTML=scooty.costPerKm;
    document.getElementById("tvehicleType").innerHTML=scooty.vehicleType;
    
}

