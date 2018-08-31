$(function(){
  $('img').each(function(){
    if($(this).parent().prop('tagName') !== 'A') {
      $(this).attr('data-featherlight-type','image');
      $(this).attr('data-featherlight',$(this).attr('src'));
    } else {
		$(this).parent().addClass('dl-link');
	}
  });
  $('.page-content a:not(".dl-link")').attr('target','_blank');
  $('h5 a').attr('target','_top');
  $('.one-liner').parent().addClass('one-liners');
})

function copyCode(x) {
  $(x).select();
  var copyText = document.execCommand("Copy");
  if(copyText) $(x).parents('li').children('.copy-msg').append("<span class='copied-msg'>Copied to Clipboard</span>");
  $('.copied-msg').fadeOut(4000);
  snackbar($(x).val());
}

function snackbar(message) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
	x.innerHTML = message + ' Copied to Clipboard';
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
