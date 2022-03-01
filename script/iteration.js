$(document).ready(function () { 
	document.getElementById("premadeddesigns").hidden = true;
	document.getElementById("customdesigns").hidden = true;
    addProducts();
	addDesigns();
});
function addProducts() {
	var data=items["items"];
	var html="<table>" + "<tr>";
	var j=0;
	var col = Math.ceil(data.length / 5);
	
		for(var i=0;i<data.length;i++){
			
			if(j==0)
				html+="<tr>";
			
			html+=addproduct(data[i],col);
			j++;
			if(j==col){
				j=0;
				html+="</tr>";
			}
		}
	html+="<table>"
	$("#producttable").html(html);	
	
}
function addproduct(data,col){
	var sizes=data["sizes"];
	var html="";;
	html+="<td><input type=\"radio\" required id='"+data["id"]+"' name=\"product\" value='"+data["id"]+"' onclick=\"addoptions('"+data["id"]+"')\">" +"<label for=\"tshirt\">"+data["productname"]+"</label></td>";


    return html;
}
function addDesigns() {
	var data=designsvg["designsvg"];
	var html="<select id='designs' name='designs' onchange='designpeview()' required>";
	var details;
	
	for(var i=0;i<data.length;i++)
		html+=adddesign(data[i]);
		
	html+="<option value='N/A' hidden></option>" + "</select>";
		
	details = (data[0]);
		
	$("#designlist").html(html);

	//if(details["photo"] != null){
		document.getElementById('imageofdesign').src="data/designs/"+details["id"]+".jpg";
	//}	
}
function adddesign(data){
	var sizes=data["sizes"];
	var html="";
	
	html+="<option value='"+data["id"]+"'>"+data["productname"]+"</option>";

    return html;
}