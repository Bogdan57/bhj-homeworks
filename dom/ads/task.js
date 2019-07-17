let current = 1;
const cases = document.querySelectorAll('.rotator__case');

const show = function(cases) {
    setInterval(() => {
        for(let i = 0; i < cases.length; i++) {
            for(let key = 0; key < cases.length; key++) {
                cases[key].classList.remove('rotator__case_active');
			}
			cases[current].classList.add('rotator__case_active');			
		}
		current++;
	}, 1000);
}
show(cases);