$(function(){
  $('.page-content a').attr('target','_blank');
  $('img').each(function(){$(this).attr('data-featherlight',$(this).attr('src'))})
})
