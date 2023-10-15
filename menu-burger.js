var handleMenu = document.getElementById("handle-menu");
var menu = document.getElementById("menu");

function openNav() {
	if (menu.classList.contains("active")) {
		menu.classList.remove("active");
	} else menu.classList.add("active");
}

handleMenu.onclick = openNav;
