const drinkList = document.querySelectorAll('li');
const inputSearch = document.querySelector('.search');

const drinkSearch = (e) => {
	const searchingText = e.target.value.toLowerCase();

	drinkList.forEach((el) => {
		if (el.textContent.toLowerCase().indexOf(searchingText) !== -1) {
			el.style.display = 'block';
		} else el.style.display = 'none';
	});
};

inputSearch.addEventListener('keyup', drinkSearch);
