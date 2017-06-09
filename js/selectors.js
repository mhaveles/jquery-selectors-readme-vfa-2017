// declare your functions here...
//test 1 works
function paragraphSelector(){
  return $('p');
}
//test 2 doesn't work last selector
function lastImageSelector(){
  return $('img:last');
}
//test 3 works
function ninjaBabySelector(){
  return $('#baby-ninja');
}
//test 4 works class selector two divs
function divSelector(){
  return $('.pics');
}

//test 5 doesn't work first child selector return first item on ul
function firstListItem() {
  return $('ul li:first-child');
}
