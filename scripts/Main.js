document.querySelector('img').onclick=function(){
  var mySrc=document.querySelector('img').getAttribute('src');

  if(mySrc === 'images/firefox-icon.png')
  {
    document.querySelector('img').setAttribute('src','images/Tatry.jpg')
  }
  else{
      document.querySelector('img').setAttribute('src','images/firefox-icon.png')
  }
}
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
  var myName=prompt('Please enter your name.');
  localStorage.setItem('name',myName);
  myHeading.textContent='Mozzilla rules said '+myName;
}

if(!localStorage.getItem('name')){
  setUserName();
}
else{
  var storedName=localStorage.getItem('name');
  myHeading.textContent='Mozzilla rules said '+storedName;
}
myButton.onclick=function(){
  setUserName();
}
