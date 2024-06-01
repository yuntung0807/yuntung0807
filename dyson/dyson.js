$(function () {
  const today = new Date();

  $('.timearea').countdown({
    until: $.countdown.UTCDate(+8, 2023, 6 - 1, 8, 23, 59, 59),
    format: 'dHMS',
    layout: '<span>倒數</span> <i>{dnn}</i>d<i>{hnn}</i>h<i>{mnn}</i>m<i>{snn}</i>s',
    onExpiry: timeUpMsg
  });
});

function timeUpMsg() {
  return "預購結束!";
}

$('.people-group').addClass('hide');
if (today > new Date('2023/06/08')) {
  $('.people-group').removeClass('hide');
}