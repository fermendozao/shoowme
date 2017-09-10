$(document).ready(function() {
  $('.member').on('click', function() {
    // Get data from html
    const avatar = $(this).find('.avatar').attr('src');
    const content = $(this).find('.card-info');
    const fullname = content.find('.fullname').text();
    const profession = content.find('.profession').text();
    const experience = content.find('.experience').html();
    const occupation = content.find('.occupation').html();
    const interests = content.find('.interests').html();
    const email = content.find('.email').text();
    const linkedin = content.find('.linkedin').text();

    if (content.length > 0) {
      // Show data
      $('.member-modal').find('.avatar').attr('src', avatar);
      $('.member-modal').find('.fullname').text(fullname);
      $('.member-modal').find('.profession').text(profession);
      $('.member-modal').find('.experience').html(experience);
      $('.member-modal').find('.occupation').html(occupation);
      $('.member-modal').find('.interests').html(interests);
      $('.member-modal').find('.email').attr('href', email);
      $('.member-modal').find('.linkedin').attr('href', linkedin);
      $('#memberInfo').modal('show');
    }
  });
});
