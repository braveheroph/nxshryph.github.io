var s=[
"http://moonbitcoin.cash/",
"http://moonliteco.in/",
"http://moondoge.co.in/",
"http://moondash.co.in/",
"http://bitfun.co/",
"http://bonusbitcoin.co/",
"https://cointiply.com/",
"https://coinfaucet.io/",
"https://free-litecoin.com/login",
"https://coinpot.co/",
"https://freedogeon.com/",
"https://freebitcoin.io/",
"https://freecardano.com/",
"https://www.swagbucks.com/",
"https://coinpayu.com",
"https://scribie.com/freelance-transcription#intro",
"https://hiraya.ml",
"https://www.cashcrate.com/",
"http://moonbit.co.in/"
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter address');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter number");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
