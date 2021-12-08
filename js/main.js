function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();

window.addEventListener('scroll', () => {
    updateList();
})

// mobile navigation 

const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');
const nav = document.getElementById('mobile-nav');

menu.addEventListener('click', (e) => {
	e.preventDefault();
	nav.classList.remove('hidden');
	menu.classList.add('hidden');
	menuClose.classList.remove('hidden');
});

menuClose.addEventListener('click', (e) => {
	e.preventDefault();
	nav.classList.add('hidden');
	menu.classList.remove('hidden');
	menuClose.classList.add('hidden');
});