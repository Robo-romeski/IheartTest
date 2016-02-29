var EnterKey = 13;

$(document).ready(function() {

    // remove todos
    $(".list").on('click', '.remove', function(e) {
        e.preventDefault();
        $(this).parent().remove();
    });

    // change todo/done
    $(".list").on('click', '.todo-label', function(e) {
          if($(this).find('input:checkbox').is(':checked')) {
          	var eachTodo = $(this).parent("div");
          	var carbon = eachTodo.clone();
              $(this).css("text-decoration","line-through");
              $(this).css("color","#999999");
              $('#completed-list').prepend(carbon);
              eachTodo.remove();
		  }
		  else {
              $(this).css("text-decoration","none");
              $(this).css("color","#000000");
		  }
    });
 
     $("#addIt").click(function(event) {
     	inputContents = $.trim($("#new-todor").val());
      uploadContents = $.trim($("#myFile").val());
     	if(inputContents != ""){
     		$(".list").prepend("<div class='todo'><label class='todo-label'><input type='checkbox' />" +
                                    inputContents + "</label><a href='#' class='upload dynamo' id='unlv'>^</a><a href='#' class='remove'>x</a><div class='taskload'><input type='file' id='myFile' multiple size='5' onchange='alert(file uploaded)';><p id='demo'></p></div></div>")
     	}
     	$("input").val(this.defaultValue);
     	$(this).modal("hide");
     	/* Act on the event */
     });
});

