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
  $('#b1').hasClass('button-selected') ? null : $('#b1').
      addClass('button-selected');
  removeButtonClass(1);
});
$('#b2').click(() => {
  console.log('b2');
  $('#b2').hasClass('button-selected') ? null : $('#b2').
      addClass('button-selected');
  removeButtonClass(2);
});

$('#b3').click(() => {
  console.log('b3');
  $('#b3').hasClass('button-selected') ? null : $('#b3').
      addClass('button-selected');
  removeButtonClass(3);
});
$('#b4').click(() => {
  console.log('b4');
  $('#b4').hasClass('button-selected') ? null : $('#b4').
      addClass('button-selected');
  removeButtonClass(4);
});
$('#b5').click(() => {
  console.log('b5');
  $('#b5').hasClass('button-selected') ? null : $('#b5').
      addClass('button-selected');
  removeButtonClass(5);
});
$('#b6').click(() => {
  console.log('b6');
  $('#b6').hasClass('button-selected') ? null : $('#b6').
      addClass('button-selected');
  removeButtonClass(6);
});
$('#b7').click(() => {
  console.log('b7');
  $('#b7').hasClass('button-selected') ? null : $('#b7').
      addClass('button-selected');
  removeButtonClass(7);
});
$('#b8').click(() => {
  console.log('b8');
  $('#b8').hasClass('button-selected') ? null : $('#b8').
      addClass('button-selected');
  removeButtonClass(8);
});
$('#b9').click(() => {
  console.log('b9');
  $('#b9').hasClass('button-selected') ? null : $('#b9').
      addClass('button-selected');
  removeButtonClass(9);
});
$('#b10').click(() => {
  console.log('b10');
  $('#b10').hasClass('button-selected') ? null : $('#b10').
      addClass('button-selected');
  removeButtonClass(10);
});
$('#b11').click(() => {
  console.log('b11');
  $('#b11').hasClass('button-selected') ? null : $('#b11').
      addClass('button-selected');
  removeButtonClass(11);
});
$('#b12').click(() => {
  console.log('b12');
  $('#b12').hasClass('button-selected') ? null : $('#b12').
      addClass('button-selected');
  removeButtonClass(12);
});
$('#b13').click(() => {
  console.log('b13');
  $('#b13').hasClass('button-selected') ? null : $('#b13').
      addClass('button-selected');
  removeButtonClass(13);
});

$('#b14').click(() => {
  console.log('b14');
  $('#b14').hasClass('button-selected') ? null : $('#b14').
      addClass('button-selected');
  removeButtonClass(14);
});

$('#b15').click(() => {
  console.log('b15');
  $('#b15').hasClass('button-selected') ? null : $('#b15').
      addClass('button-selected');
  removeButtonClass(15);
});

$('#b16').click(() => {
  console.log('b16');
  $('#b16').hasClass('button-selected') ? null : $('#b16').
      addClass('button-selected');
  removeButtonClass(16);
});

$('#b17').click(() => {
  console.log('b17');
  $('#b17').hasClass('button-selected') ? null : $('#b17').
      addClass('button-selected');
  removeButtonClass(17);
});

$('#b18').click(() => {
  console.log('b18');
  $('#b18').hasClass('button-selected') ? null : $('#b18').
      addClass('button-selected');
  removeButtonClass(18);
});

$('#lock').change(() => {
  console.log(
      $('input[type=checkbox]').prop('checked') ? 'locked' : 'unlocked',
  );
});

$('#mic').change(() => {
  if ($('#mic').prop('checked')) {
    console.log('Microphone IN Use');
  }
  else {
    console.log('Microphone NOT in Use');
  }
});

$('#displayBox').click(()=>{
  console.log('Canvas Clicked');
})

removeButtonClass = (id) => {
  console.log(id);
  for (let i = 1; i <= 18; i++) {
    // console.log($('#1').hasClass('button-selected'));
    $('#b' + i).hasClass('button-selected') ? $('#b' + i).removeClass('button-selected') : null;
    if(i===id) {
      $('#b' + id).addClass('button-selected');
    }
  }
};
