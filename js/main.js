$('#training').change(function() {
  var text = $('#training :selected').text();
  console.log(text);
});

$('#feedback').change(function() {
  var text = $('#feedback :selected').text();
  console.log(text);
});

$('#b1').click(() => {
  console.log('b1');

});
$('#b2').click(() => {
  console.log('b2');
});

$('#b3').click(() => {
  console.log('b3');
});
$('#b4').click(() => {
  console.log('b4');
});
$('#b5').click(() => {
  console.log('b5');
});
$('#b6').click(() => {
  console.log('b6');
});
$('#b7').click(() => {
  console.log('b7');
});
$('#b8').click(() => {
  console.log('b8');
});
$('#b9').click(() => {
  console.log('b9');
});
$('#b10').click(() => {
  console.log('b10');
});
$('#b11').click(() => {
  console.log('b11');
});
$('#b12').click(() => {
  console.log('b12');
});
$('#b13').click(() => {
  console.log('b13');
});

$('#b14').click(() => {
  console.log('b14');
});

$('#b15').click(() => {
  console.log('b15');
});

$('#b16').click(() => {
  console.log('b16');
});

$('#b17').click(() => {
  console.log('b17');
});

$('#b18').click(() => {
  console.log('b18');
});

$('#lock').change(() => {
  console.log(
      $('input[type=checkbox]').prop('checked') ? 'locked' : 'unlocked');
});

$('#mic').click(() => {
  console.log('microphone');
});

let buttonId = 0;
for (i = 1; i <= 18; i++) {
  console.log(buttonId);
  id = ('b' + i).toString();
  $('#' + id).click(() => {
    console.log(i);
    $('#' + id).hasClass('button-selected') ? null : $('#' + id).addClass('button-selected');
    buttonId = i;
  });
  if (i !== buttonId) {
    $('#' + id).hasClass('button-selected') ? $('#' + id).removeClass('button-selected') : null;
  }
}


