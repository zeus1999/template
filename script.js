window.onload = function(){
    

    let menu = document.querySelector("template-toolbar-button button");
    let sidebar = document.querySelector("template-container template-sidenav");
    let content = document.querySelector("template-container template-content");

    menu.addEventListener("click", function(){
        
        sidebar.classList.toggle("hidden");        

    });

}