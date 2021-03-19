$(function(){
	$(".devour-button").on("click", function(event){
		let button = $(this); 
		let id = button.attr("data-id")
		
		$.ajax(`/api/burgers/${id}`, {
			type: "PUT"
		}).then(
			function(results){
				console.log(results); 
				location.reload(); 
			}
		)
	});
	$(".create-form").on("submit", function(event){
		event.preventDefault(); 

		let burger = {
			name: $("#burger").val().trim()
		}

		$.ajax("api/burgers", {
			type: "POST", 
			data: burger
		}).then(
			function(){
				console.log("New burger created"); 
				location.reload();
			}
		)
	});
});
