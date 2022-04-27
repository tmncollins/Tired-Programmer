$(document).ready(function() {
  $(this).on("click", ".koh-faq-question", function() {
    $(this).parent().find(".koh-faq-answer").toggle();
    $(this).find(".fa").toggleClass('active');
  });
});