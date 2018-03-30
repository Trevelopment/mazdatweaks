$(function(){
  $('img').each(function(){
    if($(this).parent().prop('tagName') !== 'A') {
      $(this).attr('data-featherlight',$(this).attr('src'));
    } else {
		$(this).parent().addClass('dl-link');
	}
  });
  $('.page-content a:not(".dl-link")').attr('target','_blank');
  $('h5 a').attr('target','_top');
})

function copyCode(x) {
  $(x).select();
  var copyText = document.execCommand("Copy");
  if(copyText) $(x).parents('li').children('.copy-msg').append("<span class='copied-msg'>Copied to Clipboard</span>");
  $('.copied-msg').fadeOut(4000);
}
