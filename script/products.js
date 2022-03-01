function addoptions(product) {
	var html="";
	var data=items["items"];
	var details;
	var j;
	for(var i=0;i<data.length;i++){
		details = data[i];
	if(details["id"] == product){
			break;
		}
	}
	
	if(details["sizes"] != null){
		html+="<label for='size'>Size</label>" + "<select id='size' required name='size' onchange='ajustcost()'>";
		var sizes = details["sizes"];
		for(j=0;j<sizes.length;j++)
			html+="<option value='"+sizes[j]+"'>"+sizes[j]+"</option>";
		html+="</select>";
	}
	if(details["color"] != null){
		html+="<label for='color'>Color</label>" + "<select id='color' required name='color' onchange='ajustcost()'>";
		var colors = details["color"];
		for(j=0;j<colors.length;j++){
			html+="<option value='"+colors[j]+"'>"+colors[j]+"</option>";
		}
		html+="</select>";
	}
	
	//if(details["photo"] != null){
		document.getElementById('imageofproduct').src="data/products/"+product+".jpg";
	//}
	
	findCost(details["price"]);
	
	$("#options").html(html);
}
function findCost(cost) {
	var ele = document.getElementsByName('product');
	
	document.getElementById("quotedcost").value = "$" + cost;
	document.getElementById("cost").innerHTML = "Cost: $" + cost;
}
function ajustcost(){
	var data=items["items"];
	var details;
	var ele = document.getElementsByName('product');
	var product;
	var cost;
	var optcost;
	var splitopt;
	var newcost;
	
	for(var i=0;i<data.length;i++){
		details = data[i];
	if(details["id"] == product){
			break;
		}
	}
              
	for(i = 0; i < ele.length; i++) {
		if(ele[i].checked)
			product = ele[i].value;
	}
	
	cost = parseInt(details["price"], 10);
	
	optcost = document.getElementById("size").value.split(" ");
	if(optcost[1]!=null){
		splitopt = optcost[1].split("$");
		splitopt = splitopt[1].split(".");
	
		newcost = parseInt(splitopt[0], 10);
		findCost(newcost);
	} else {
		findCost(cost)
	}
}
function designtype(){
	var data=designsvg["designsvg"];
	var details = data[0];

	var design;
	var ele = document.getElementsByName("design_choice");
  
	for(i = 0; i < ele.length; i++) {
		if(ele[i].checked)
			design = ele[i].value;
	}
	
	if(design == "premade"){
		document.getElementById("designs").value = details["id"];
		document.getElementById("premadeddesigns").hidden = false;
		document.getElementById("customdesigns").hidden = true;
	}
	else if(design == "custom"){
		document.getElementById("designs").value = 'N/A';
		document.getElementById("customdesigns").hidden = false;
		document.getElementById("premadeddesigns").hidden = true;
	}
}
function designpeview(){
	selectElement = document.querySelector('#designs').value;
	var details;
	var design = selectElement;
	
	//if(details["photo"] != null){
		document.getElementById('imageofdesign').src="data/designs/"+design+".jpg";
	//}
}
