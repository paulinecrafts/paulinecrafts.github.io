$(document).ready(function () { 
	document.getElementById("premadeddesigns").hidden = true;
	document.getElementById("customdesigns").hidden = true;
    addProducts();
});
function addProducts() {
	var data=items["items"];
	var html="<table>" + "<tr>";
	j=0;
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
	//alert(sizes[0]);
	
	var html="";
	html+="<td><input type=\"radio\" required id='"+data["id"]+"' name=\"product\" value='"+data["id"]+"' onclick=\"addoptions('"+data["id"]+"')\">" +"<label for=\"tshirt\">"+data["productname"]+"</label></td>";

    return html;
}