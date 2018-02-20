$( document ).ready(function() {
	var videoCookie = document.cookie.split('videoCookie=')[1]; 
	if(videoCookie != null){ 
		$( "#video" ).remove(); 
	}else{ 
		$( "#video").show();
			document.cookie = 'videoCookie=visto;path=/';
		} 
});

// No funciona de manera local en 
// Google Chrome ya que no acepta cookies de páginas web en el disco duro