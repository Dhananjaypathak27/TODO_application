$(function(){
  $("#add").click(function(){
    if($("#userinput").val()== ""){
      alert("enter data");
    }else{
      value=$("#userinput").val();
      value2=$("ul").prepend("<li id='list'>"+ value +"  <button class='btn btn-danger' id='removeMe'>&times;</button>"+"</li>");
      // value2.attr("id","list");
    }
    $('#userinput').val("");
  });
  $("#removeall").click(function(){
    $("#list").empty();
    $("#userinput").val("");
  })
  $("#removeMe").click(function(){
    
    // this`.closest('.li').remove();
    // $(this).closest('ul').remove();
    $(this).closest('#list').remove();
  });
});