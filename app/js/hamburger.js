function toggleHamburger() {
	let hamburger = {
		navToggle: document.querySelector('.nav__toggle'),
		overlay: document.querySelector('.overlay'),
		menu: document.querySelector('.menu'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('active');
			this.overlay.classList.toggle('active');
			this.menu.classList.toggle('active');
		}
	};
	hamburger.navToggle.addEventListener('click', function(e) { 
		hamburger.doToggle(e);
	});
};
toggleHamburger();
