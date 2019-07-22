var id = 1;
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
  if ($('#b1').hasClass('button-selected')) {
    console.log('yes');
    $('#b1').toggleClass('button-selected');
  }
  id = 1;
});
$('#b2').click(() => {
  console.log('b2');
  if ($('#b2').hasClass('button-selected')) {
    $('#b2').toggleClass('button-selected');
  }
  id = 2;
});

$('#b3').click(() => {
  console.log('b3');
  $('#b3').hasClass('button-selected') ? null : $('#b3').
      addClass('button-selected');
  id = 3;
});
$('#b4').click(() => {
  console.log('b4');
  $('#b4').hasClass('button-selected') ? null : $('#b4').
      addClass('button-selected');
  id = 4;
});
$('#b5').click(() => {
  console.log('b5');
  $('#b5').hasClass('button-selected') ? null : $('#b5').
      addClass('button-selected');
});
$('#b6').click(() => {
  console.log('b6');
  $('#b6').hasClass('button-selected') ? null : $('#b6').
      addClass('button-selected');
});
$('#b7').click(() => {
  console.log('b7');
  $('#b7').hasClass('button-selected') ? null : $('#b7').
      addClass('button-selected');
});
$('#b8').click(() => {
  console.log('b8');
  $('#b8').hasClass('button-selected') ? null : $('#b8').
      addClass('button-selected');
});
$('#b9').click(() => {
  console.log('b9');
  $('#b9').hasClass('button-selected') ? null : $('#b9').
      addClass('button-selected');
});
$('#b10').click(() => {
  console.log('b10');
  $('#b10').hasClass('button-selected') ? null : $('#b10').
      addClass('button-selected');
});
$('#b11').click(() => {
  console.log('b11');
  $('#b11').hasClass('button-selected') ? null : $('#b11').
      addClass('button-selected');
});
$('#b12').click(() => {
  console.log('b12');
  $('#b12').hasClass('button-selected') ? null : $('#b12').
      addClass('button-selected');
});
$('#b13').click(() => {
  console.log('b13');
  $('#b13').hasClass('button-selected') ? null : $('#b13').
      addClass('button-selected');
});

$('#b14').click(() => {
  console.log('b14');
  $('#b14').hasClass('button-selected') ? null : $('#b14').
      addClass('button-selected');
});

$('#b15').click(() => {
  console.log('b15');
  $('#b15').hasClass('button-selected') ? null : $('#b15').
      addClass('button-selected');
});

$('#b16').click(() => {
  console.log('b16');
  $('#b16').hasClass('button-selected') ? null : $('#b16').
      addClass('button-selected');
});

$('#b17').click(() => {
  console.log('b17');
  $('#b17').hasClass('button-selected') ? null : $('#b17').
      addClass('button-selected');
});

$('#b18').click(() => {
  console.log('b18');
  $('#b18').hasClass('button-selected') ? null : $('#b18').
      addClass('button-selected');
});

$('#lock').change(() => {
  console.log(
      $('input[type=checkbox]').prop('checked') ? 'locked' : 'unlocked',
  );
});

$('#mic').change(() => {
  if($('#mic').prop('checked')){
    console.log('Microphone IN Use');
  }
  else {
    console.log('Microphone NOT in Use');
  }
  // console.log(
  //     $('input[type=checkbox]').prop('checked')
  //         ? 'mic in use'
  //         : 'mic not in use',
  // );
});
//
// let buttonId = 0;
// for (i = 1; i <= 18; i++) {
//   console.log(buttonId);
//   id = ('b' + i).toString();
//   $('#' + id).click(() => {
//     console.log(i);
//     $('#' + id).hasClass('button-selected') ? null : $('#' + id).addClass('button-selected');
//     buttonId = i;
//   });
//   if (i !== buttonId) {
//     $('#' + id).hasClass('button-selected') ? $('#' + id).removeClass('button-selected') : null;
//   }
// }

for (let i = 1; i <= 18; i++) {
  if (i != id) {
    $(('#' + id).toString()).hasClass('button-selected') ? $(
        ('#' + id).toString()).removeClass('button-selected') : null;
  }
}