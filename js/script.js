(function() {
   let sections = document.querySelectorAll('.info-section[data-hideable="true"]');
   let button_text = ['Показать подробную информацию', 'Скрыть подробную информацию'];
   let button_status = 0;
   
   document.getElementById('additional-info').addEventListener('click', function() {
      if (button_status == 0) {
         this.innerHTML = button_text[1];
         button_status = 1;
      } else {
         this.innerHTML = button_text[0];
         button_status = 0;
      }
      this.classList.toggle('active');
      sections.forEach(section => {
         section.classList.toggle('info-section_hidden');
      });
   });
})();

$(document).ready(function() {
	let $grid = $('.gallery').isotope({
		layoutMode: 'packery',
		itemSelector: '.gallery__item',
	});

	$grid.imagesLoaded().progress(function() {
		$grid.isotope('layout');
	});
});