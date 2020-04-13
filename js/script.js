$(function(){
  $("#add").click(function(){
    if($("#userinput").val()== ""){
      alert("enter data");
    }else{
      value=$("#userinput").val();
      value2=$("ul").prepend("<li>"+ value +"  <button class='btn btn-danger'>&times;</button>"+"</li>");
      value2.attr("id","list");
    }
    $('#userinput').val("");
  });
  $("#removeall").click(function(){
    $("#list").empty();
    $("#userinput").val("");
  })
});