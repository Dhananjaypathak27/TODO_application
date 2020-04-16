$(function(){
  $("#add").click(function(){
    if($("#userinput").val()== ""){
      alert("enter data");
    }else{
      value=$("#userinput").val();
      value2=$("ul").prepend("<li id='listItem'>"+ value + "&nbsp "  +"<button class='btn btn-dark' id='removeMe' onClick='removeThis(this)' >  &times;</button>"+"</li>");
      // value2.attr("id","list");
    }
    $('#userinput').val("");
  });
  $("#removeall").click(function(){
    $("#list").empty();
    $("#userinput").val("");
  })
});

function removeThis(elem){
  $("#removeMe").parent("li").remove();
  
}