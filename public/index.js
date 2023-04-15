const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const menuItems = $("#menu-items");
const listItems = $("#list-items");
var items = listItems.children;

document.addEventListener("click", (e) => {
	if (menuItems.contains(e.target)) {
		listItems.classList.toggle("hidden");
		listItems.classList.toggle("custom-top-menu-extend");
	} else {
		if (listItems.classList.contains("custom-top-menu-extend")) {
			listItems.classList.remove("custom-top-menu-extend");
			listItems.classList.add("hidden");
		}
	}
});
for (let i of items) {
	document.addEventListener("click", (e) => {
		if (i.contains(e.target)) {
			i.classList.add("custom-top-menu-item-active");
		} else {
			i.classList.remove("custom-top-menu-item-active");
		}
	});
}
