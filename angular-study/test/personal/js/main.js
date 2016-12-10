// JavaScript Document
   function addFav(title){
	   var url=location.href;
	   if(window.sidebar){
		   window.sidebar.addPanel(title,url,"");
		   }
		   else if(document.all){
			   window.external.AddFavorite(url,title);
			   }
			   else if(window.opera && window.print){return ture;
			   }
			   }