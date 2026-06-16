let total=0; 
let VriceC = 0,   VvRoti=0,  VsringH=0,  Vdosa=0,   Vkribath=0, vParata = 0, 
    vNoodles = 0, vVRice = 0, vFrice = 0, vParata2 = 0, vNoodles2 = 0,
    vRolls = 0, vVroti = 0, vUlunduV = 0, vCocaC = 0, vSprite = 0, vIceC = 0, 
    vMilkS = 0, vKottu = 0, vFriedR = 0, vRiceC2 = 0, vParata3 = 0, vDosa2 = 0, 
    vHoppers_n= 0, vEggR2= 0; vriedR=0, vnoodles3=0, vfishB=0, vcRice=0,  vHoppers=0;
let ordername=[];
let count=0;
let orderprrice=[];
let quntty=[];
let c=1;

function FriceC() {
    VriceC += 1; 
    document.getElementById("IriceC").innerText = VriceC; 
    document.getElementById("GriceC").style.border = "3px solid green";
	document.getElementById("IriceC").style.backgroundColor ="green";
	total+=100;
	if(VriceC==1){
	 ordername.push("Rice and curry");
	 orderprrice.push(100);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 
	 }
	 
	quntty[c]=VriceC;
	
}
function FvRoti() {
    VvRoti += 1; 
    document.getElementById("IvRoti").innerText = VvRoti; 
    document.getElementById("GvRoti").style.border = "3px solid green";
	document.getElementById("IvRoti").style.backgroundColor ="green";
	total+=50;
	if(VvRoti==1){
	 ordername.push("Roti");
	 orderprrice.push(50);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	quntty[c]=VvRoti;
	
}

function FsringH() {
    VsringH += 1; 
    document.getElementById("IsringH").innerText = VsringH; 
    document.getElementById("GsringH").style.border = "3px solid green";
	document.getElementById("IsringH").style.backgroundColor ="green";
	total+=10;
	if(VsringH==1){
	 ordername.push("String hoppers");
	 orderprrice.push(10);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=VsringH;
	
}
function Fdosa() {
    Vdosa += 1; 
    document.getElementById("Idosa").innerText = Vdosa; 
    document.getElementById("Gdosa").style.border = "3px solid green";
	document.getElementById("Idosa").style.backgroundColor ="green";
	total+=40;
	if(Vdosa==1){
	 ordername.push("Dosa");
	 orderprrice.push(40);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=Vdosa;
	
}
function Fkribath() {
    Vkribath += 1; 
    document.getElementById("Ikribath").innerText = Vkribath; 
    document.getElementById("Gkribath").style.border = "3px solid green";
	document.getElementById("Ikribath").style.backgroundColor ="green";
	total+=50;
	if(Vkribath==1){
	 ordername.push("Kiribath");
	 orderprrice.push(50);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=Vkribath;
	
}
function Fparata() { 
    vParata++; 
    document.getElementById("Iparata").innerText = vParata; 
	document.getElementById("Gparata").style.border = "3px solid green"; 
	document.getElementById("Iparata").style.backgroundColor ="green";
	total+=40; 
	if(vParata==1){
	 ordername.push("Parata");
	 orderprrice.push(40);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vParata;
	
}
function Fnoodles() { 
    vNoodles++; document.getElementById("Inoodles").innerText = vNoodles; 
	document.getElementById("Gnoodles").style.border = "3px solid green";
	document.getElementById("Inoodles").style.backgroundColor ="green"; 
	total+=100; 
	if(vNoodles==1){
	 ordername.push("Noodles");
	 orderprrice.push(100);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vNoodles;
	
}
function FvRice() { 
    vVRice++; 
	document.getElementById("IvRice").innerText = vVRice; 
	document.getElementById("GvRice").style.border = "3px solid green";
	document.getElementById("IvRice").style.backgroundColor ="green"; 
	total+=100; 
	if(vVRice==1){
	 ordername.push("Vegetable Rice");
	 orderprrice.push(100);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vVRice;
	
}
function Ffrice() { 
    vFrice++; 
	document.getElementById("Ifrice").innerText = vFrice; 
	document.getElementById("Gfrice").style.border = "3px solid green"; 
	document.getElementById("Ifrice").style.backgroundColor ="green";
	total+=160;
	if(vFrice==1){
	 ordername.push("Fish Rice");
	 orderprrice.push(160);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vFrice;
	
}
function Fparata2() { 
    vParata2++; 
	document.getElementById("Iparata2").innerText = vParata2; 
	document.getElementById("Gparata2").style.border = "3px solid green"; 
	document.getElementById("Iparata2").style.backgroundColor ="green";
	total+=40; 
	if(vParata2==1){
	 ordername.push("Parata");
	 orderprrice.push(40);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vParata2;
	
}
function Fnoodles2() { 
    vNoodles2++; 
	document.getElementById("Inoodles2").innerText = vNoodles2; 
	document.getElementById("Gnoodles2").style.border = "3px solid green"; 
	document.getElementById("Inoodles2").style.backgroundColor ="green";
	total+=100; 
	if(vNoodles2==1){
	 ordername.push("Noodles");
	 orderprrice.push(100);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vNoodles2;
	
}
function Frolls() { 
    vRolls++; 
	document.getElementById("Irolls").innerText = vRolls; 
	document.getElementById("Grolls").style.border = "3px solid green"; 
	document.getElementById("Irolls").style.backgroundColor ="green";
	total+=60; 
	if(vRolls==1){
	 ordername.push("Rolls");
	 orderprrice.push(60);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vRolls;
	
}
function Fvroti() { 
    vVroti++; 
	document.getElementById("Ivroti").innerText = vVroti; 
	document.getElementById("Gvroti").style.border = "3px solid green"; 
	document.getElementById("Ivroti").style.backgroundColor ="green";
	total+=60; 
	if(vVroti==1){
	 ordername.push("Roti");
	 orderprrice.push(60);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vVroti;
	
}
function FulunduV() { 
    vUlunduV++; 
	document.getElementById("IulunduV").innerText = vUlunduV; 
	document.getElementById("IulunduV").style.backgroundColor ="green";
	document.getElementById("GulunduV").style.border = "3px solid green"; 
	total+=50; 
	if(vUlunduV==1){
	 ordername.push("Ulundu Vadai");
	 orderprrice.push(50);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vUlunduV;
	
}
function FcocaC() { 
    vCocaC++; 
	document.getElementById("IcocaC").innerText = vCocaC; 
	document.getElementById("GcocaC").style.border = "3px solid green"; 
	document.getElementById("IcocaC").style.backgroundColor ="green";
	total+=100; 
	if(vCocaC==1){
	 ordername.push("Coca-Cola");
	 orderprrice.push(100);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vCocaC;
	
}
function Fsprite() { 
    vSprite++; 
	document.getElementById("Isprite").innerText = vSprite; 
	document.getElementById("Gsprite").style.border = "3px solid green"; 
	document.getElementById("Isprite").style.backgroundColor ="green";
	total+=100; 
	if(vSprite==1){
	 ordername.push("Sprite");
	 orderprrice.push(100);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vSprite;
	
}
function FIceC() { 
    vIceC++; 
	document.getElementById("IIceC").innerText = vIceC; 
	document.getElementById("GIceC").style.border = "3px solid green"; 
	document.getElementById("IIceC").style.backgroundColor ="green";
	total+=120; 
	if(vIceC==1){
	 ordername.push("Ice-Coffee");
	 orderprrice.push(120);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vIceC;
	
}
function FmilkS() { 
    vMilkS++; 
	document.getElementById("ImilkS").innerText = vMilkS; 
	document.getElementById("GmilkS").style.border = "3px solid green";
	document.getElementById("ImilkS").style.backgroundColor ="green"; 
	total+=120; 
	if(vMilkS==1){
	 ordername.push("Milkshake");
	 orderprrice.push(120);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vMilkS;
	
}
function Fkottu() { 
    vKottu++; 
	document.getElementById("Ikottu").innerText = vKottu; 
	document.getElementById("Gkottu").style.border = "3px solid green"; 
	document.getElementById("Ikottu").style.backgroundColor ="green";
	total+=150; 
	if(vKottu==1){
	 ordername.push("Kottu");
	 orderprrice.push(150);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vKottu;
	
}
function FfriedR() { 
    vFriedR++; 
	document.getElementById("IfriedR").innerText = vFriedR; 
	document.getElementById("GfriedR").style.border = "3px solid green"; 
	document.getElementById("IfriedR").style.backgroundColor ="green";
	total+=150; 
	if(vFriedR==1){
	 ordername.push("Fried Rice");
	 orderprrice.push(150);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vFriedR;
	
}
function FriceC2() { 
    vRiceC2++; 
	document.getElementById("IriceC2").innerText = vRiceC2; 
	document.getElementById("GriceC2").style.border = "3px solid green"; 
	document.getElementById("IriceC2").style.backgroundColor ="green";
	total+=100; 
	if(vRiceC2==1){
	 ordername.push("Rice and curry");
	 orderprrice.push(100);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vRiceC2;
	
}
function Fparata3() { 
    vParata3++; 
	document.getElementById("Iparata3").innerText = vParata3; 
	document.getElementById("Gparata3").style.border = "3px solid green"; 
	document.getElementById("Iparata3").style.backgroundColor ="green";
	total+=60;
	if(vParata3==1){
	 ordername.push("Parata");
	 orderprrice.push(40);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vParata3;
	
}
function Fdosa2() { 
    vDosa2++; 
	document.getElementById("Idosa2").innerText = vDosa2; 
	document.getElementById("Gdosa2").style.border = "3px solid green"; 
	document.getElementById("Idosa2").style.backgroundColor ="green";
	total+=40; 
	if(vDosa2==1){
	 ordername.push("Dosa");
	 orderprrice.push(40);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vDosa2;
	
}
function Fhoppers_n() { 
    vHoppers_n++; 
	document.getElementById("Ihoppers_n").innerText = vHoppers_n; 
	document.getElementById("Ghoppers_n").style.border = "3px solid green"; 
	document.getElementById("Ihoppers_n").style.backgroundColor ="green";
	total+=30; 
	if(vHoppers_n==1){
	 ordername.push("Hoppers");
	 orderprrice.push(30);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vHoppers_n;
	
}
function FeggR2() { 
    vEggR2++; 
	document.getElementById("IeggR2").innerText = vEggR2; 
	document.getElementById("GeggR2").style.border = "3px solid green"; 
	document.getElementById("IeggR2").style.backgroundColor ="green";	
	total+=80; 
	if(vEggR2==1){
	 ordername.push("Egg Roti");
	 orderprrice.push(80);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vEggR2;
	
}
function Fnoodles3() { 
    vnoodles3++; 
	document.getElementById("Inoodles3").innerText = vnoodles3; 
	document.getElementById("Gnoodles3").style.border = "3px solid green"; 
	document.getElementById("Inoodles3").style.backgroundColor ="green";
	total+=100; 
	if(vnoodles3==1){
	 ordername.push("Noodles");
	 orderprrice.push(100);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vnoodles3;
	
}
function FfishB() { 
    vfishB++; 
	document.getElementById("IfishB").innerText = vfishB; 
	document.getElementById("GfishB").style.border = "3px solid green"; 
	document.getElementById("IfishB").style.backgroundColor ="green";
	total+=60; 
	if(vfishB==1){
	 ordername.push("Fish Bun");
	 orderprrice.push(60);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vfishB;
	
}
function FcRice() { 
    vcRice++; 
	document.getElementById("IcRice").innerText = vcRice; 
	document.getElementById("GcRice").style.border = "3px solid green"; 
	document.getElementById("IcRice").style.backgroundColor ="green";
	total+=200;
	if(vcRice==1){
	 ordername.push("Chicken Rice");
	 orderprrice.push(200);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vcRice;
	
}	
function Fhoppers() { 
    vHoppers++; 
	document.getElementById("Ihoppers").innerText = vHoppers; 
	document.getElementById("Ghoppers").style.border = "3px solid green"; 
	document.getElementById("Ihoppers").style.backgroundColor ="green";
	total+=30;
	if(vHoppers==1){
	 ordername.push("Hoppers");
	 orderprrice.push(30);
	 c=count;
	 count+=1;
	 quntty.push(1);
	 document.getElementById("clearBtn").innerText="Clear All";
	 document.getElementById("clearBtn").style.border="1px dashed red";
	 document.getElementById("clearBtn").style.width="100px";
	 document.getElementById("clearBtn").style.padding="15px";
	 document.getElementById("clearBtn").style.borderRadius="15px";
	 }
	 
	    quntty[c]=vHoppers;
	
}


function saveData(){
	localStorage.setItem("totalPay", total);
	localStorage.setItem("ordername", JSON.stringify(ordername));
	localStorage.setItem("orderprrice", JSON.stringify(orderprrice));
	localStorage.setItem("orderquantity", JSON.stringify(quntty));
	localStorage.setItem("ordercount", count);

	
	window.location.href="hostel order.html";
}
	



let savedvalue=localStorage.getItem("totalPay");
document.getElementById("result1").innerText ="Rs. " + savedvalue+".00";

	
function showbill(){
	let rawOrdernames=localStorage.getItem("ordername");
    let rawOrderPrices=localStorage.getItem("orderprrice");
	let rawOrderQuantity=localStorage.getItem("orderquantity");
    let totall=localStorage.getItem("ordercount");

    let Ordernames = JSON.parse(rawOrdernames);
    let Orderprice = JSON.parse(rawOrderPrices);
	let Orderqunt = JSON.parse(rawOrderQuantity);
	
    let nametext="";
    let pricetext="";
	let quantityText="";
	let totalText="";
    for(let i=0;i<totall;i++){
	  nametext+=Ordernames[i]+"\n";
      pricetext+="Rs."+Orderprice[i]+".00\n";
	  quantityText+=Orderqunt[i]+"\n";
	totalText+="Rs."+Orderqunt[i]*Orderprice[i]+".00\n";}
	
	document.getElementById("btn4").style.border="1px solid green";
	document.getElementById("Oname").innerText =nametext;
	document.getElementById("Oprice").innerText =pricetext;
	document.getElementById("outline").style.border="1px solid gray";
	document.getElementById("outline").style.borderRadius="20px";
	document.getElementById("outline").style.padding="15px";
	document.getElementById("outline").style.width="350px";
	document.getElementById("outline").style.marginBottom="20px";
	document.getElementById("outline").style.paddingTop="20px";
	document.getElementById("menumsg").innerText="Back TO Menu";
	document.getElementById("Oquantity").innerText =quantityText;
	document.getElementById("O1total").innerText =totalText;
}


function contact(){
	document.getElementById("contact1").style.border="2px solid #e76330";
	document.getElementById("contact2").style.border="2px solid #e76330";
	document.getElementById("contact2").style.paddingTop="25px";
	document.getElementById("contact2").style.background="rgba(255, 255, 255, 0.03)";
	document.getElementById("body").style.background="linear-gradient(15deg, #381a0c, black)";
	
	document.getElementById("feedback1").style.border="1px solid #BDD4DE";
	document.getElementById("feedback2").style.border="1px solid #BDD4DE";
	document.getElementById("feedback2").style.paddingTop="20px";
	document.getElementById("feedback2").style.background="rgba(255, 255, 255, 0.01)";
}

function feedback(){
	document.getElementById("feedback1").style.border="2px solid #e76330";
	document.getElementById("feedback2").style.border="2px solid #e76330";
	document.getElementById("feedback2").style.paddingTop="25px";
	document.getElementById("feedback2").style.background="rgba(255, 255, 255, 0.03)";
	document.getElementById("body").style.background="linear-gradient(85deg, #381a0c, black)";
	
	document.getElementById("contact1").style.border="1px solid #BDD4DE";
	document.getElementById("contact2").style.border="1px solid #BDD4DE";
	document.getElementById("contact2").style.paddingTop="20px";
	document.getElementById("contact2").style.background="rgba(255, 255, 255, 0.01)";
}



