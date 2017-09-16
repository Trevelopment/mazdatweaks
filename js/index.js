$(function(){
  $('img').each(function(){
    if($(this).parent().prop('tagName') !== 'A') {
      $(this).attr('data-featherlight',$(this).attr('src'));
    } else {
		$(this).parent().addClass('dl-link');
	}
  });
  $('.page-content a:not(".dl-link")').attr('target','_blank');
})
