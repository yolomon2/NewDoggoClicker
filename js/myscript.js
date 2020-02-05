
/*Yayeet Welcome to my World
A world of pain and suffering
*/
var doggo = 0;
var rubies = 0;
var clicker = 1;
var level = 1;
var expo = 0;
var expcap = 100;
var dps = 0;
var cps = 0;
var prestiges = 0;
var autoclickerAllow = false;
var widthguy = expo/expcap*100;
var confirm = true;
var yno = false;
var yn = false;

function click() {
   expo+=clicker;
   doggo+=clicker;
   cps++;
   document.getElementById('doggos').innerHTML=(doggoscience() +' Doggos');
}
    function pro() {
      document.getElementById('exptogo').innerHTML=('Level ' + level)
if (widthguy >= 100) {
   document.getElementById("expBar").style.width = '0%';  
expo = 0;
expcap *= 5;
level ++;
clicker ++;
rubies += level*(prestiges+1);
document.getElementById("rubies").innerHTML=(rubies + " Rubies");
update();
} else {
var elem = document.getElementById("expBar"); 
elem.style.width = widthguy + '%';    
}
}
class rubyPurchase {
   constructor(cost, strength) {
      this.cost = cost;
      this.strength = strength;
   }
   buy() {
      if (rubies >= this.cost) {
         rubies -= this.cost;
         clicker += this.strength;
         document.getElementById("dpc").innerHTML=(formatCount(clicker, true, 2) + " Dpc");
         update();
      }
   }
}
class helper {
   constructor(cost, dps, name, amount) {
    this.cost = cost;
    this.dpss = dps;
    this.name = name;
    this.amount = null;
 }
   buy() {
    if (doggo >= this.cost) {
       doggo -= this.cost;
       this.cost = Math.round(this.cost * 1.2);
       this.amount += 1;
       document.getElementById(this.name).style.backgroundColor = '#EEEADB';
       document.getElementById(this.name).style.borderColor = "#E2CAA0";
       if ((this.amount + 1) % 10 === 0) {
         this.cost *= 10;
         document.getElementById(this.name).style.backgroundColor = '#adebeb';
         document.getElementById(this.name).style.borderColor = "#33cccc";
         } 
       if (this.amount % 10 === 0) {
       dps += this.dpss * 1.5 * (prestiges + 1);
       this.dpss *= 1.5 * (prestiges + 1);
       } else {
          dps += this.dpss;
       }
       document.getElementById(this.name).innerHTML=(this.name + "(" + this.amount + ") " + formatCount(this.cost, true, 2));
    }
    document.getElementById("doggos").innerHTML=(doggoscience() +' Doggos');
    document.getElementById("dpsShow").innerHTML=(formatCount(dps, true, 2) + " Dps");
   }
 }

const COUNT_ABBRS = [ '', 'K', 'M', 'B', 'T', 'Q', 'Qn', 'Sx', 'St', "O", "N","D",
"UD","DD","TD","QD","QnD","SxD","StD","OD","ND", "V", 
"UV","DV","TV","QV","QnV","SxV","StV","OV","NV","Tg",
"UTg","DTg","Tgt","QTg","QnTg","SxTg","STgt","OTg","NTg","Qg",
"UQg","DQg","TQg","QQg","QtQg","SxQg"];
const COUNT_ABBRSE = [ '', 'k', 'm', 'b', 't', 'q', 'qn', 'sx', 'st', "o", "n","d",
"ud","dd","td","qd","qnd","sxd","std","od","nd", "v", 
"uv","dv","tv","qv","qnv","sxv","stv","ov","nv","tg",
"utg","dtg","tgt","qtg","qntg","sxtg","stgt","otg","ntg","qg",
"uqg","dqg","tqg","qqg","qtqg","sxqg"];

function formatCount(count, withAbbr = false, decimals = 2) {
    const i     = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
    let result  = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
    if(withAbbr) {
        result += `${COUNT_ABBRS[i]}`; 
    }
    return result;
}

      /*This function creates commas in high numbers; if the number was 10000, 
      finaldoge1 would equal 10 , finaldoge2 would equal 000 and then the function
      would return 10,000*/
 function doggoscience() {
   var dogreplace = Math.round(doggo).toString();

   if (Math.round(doggo) < 10000) {
      return dogreplace;
   } else if (Math.round(doggo) >= 10000 && Math.round(doggo) <= 999999) {
      var finaldoge1 = dogreplace.slice(0, dogreplace.length - 3);
      var finaldoge2 = dogreplace.slice(dogreplace.length - 3, dogreplace.length);
      return finaldoge1 + "," + finaldoge2;


    } else if (Math.round(doggo) >= 1000000 && Math.round(doggo) <= 999999999) {
      var finaldoge1 = dogreplace.slice(0, dogreplace.length - 6);
      var finaldoge2 = dogreplace.slice(dogreplace.length - 6, dogreplace.length - 3);
      var finaldoge3 = dogreplace.slice(dogreplace.length - 3, dogreplace.length)
      return finaldoge1 + "," + finaldoge2 + "," + finaldoge3;
   } else if (Math.round(doggo) >= 1000000000 && Math.round(doggo) <= 999999999999) {
      var finaldoge1 = dogreplace.slice(0, dogreplace.length - 9);
      var finaldoge2 = dogreplace.slice(dogreplace.length - 9, dogreplace.length - 6);
      var finaldoge3 = dogreplace.slice(dogreplace.length - 6, dogreplace.length - 3);
      var finaldoge4 = dogreplace.slice(dogreplace.length - 3, dogreplace.length);
      return finaldoge1 + "," + finaldoge2 + "," + finaldoge3 + "," + finaldoge4;
   } else if (Math.round(doggo) >= 1000000000000 && Math.round(doggo) <= 999999999999999) {
      var finaldoge1 = dogreplace.slice(0, dogreplace.length - 12);
      var finaldoge2 = dogreplace.slice(dogreplace.length - 12, dogreplace.length - 9);
      var finaldoge3 = dogreplace.slice(dogreplace.length - 9, dogreplace.length - 6);
      var finaldoge4 = dogreplace.slice(dogreplace.length - 6, dogreplace.length - 3);
      var finaldoge5 = dogreplace.slice(dogreplace.length - 3, dogreplace.length);
      return finaldoge1 + "," + finaldoge2 + "," + finaldoge3 + "," + finaldoge4 + "," + finaldoge5;
   } else {
      const i     = 0 === doggo ? doggo : Math.floor(Math.log(doggo) / Math.log(1000));
    let result  = parseFloat((doggo / Math.pow(1000, i)).toFixed(2));
        result += " " + `${COUNT_ABBRSE[i]}`; 

    return result;
   }
}
//First set of Purchases
var DoggoKing = new helper(300, 5, 'DoggoKing');
var WiseDoggoKing = new helper(3000, 20, 'WiseDoggoKing');
var DoggoKingLord = new helper(15000, 75, 'DoggoKingLord');

//Second set of Purchases
var DoggoMage = new helper(70000, 250, 'DoggoMage');
var DoggoSage = new helper(400000, 1000, 'DoggoSage');
var DoggoSorcerer = new helper(2000000, 40000, 'DoggoSorcerer');

//Ruby Purchases row one
var clickBoosterSmol = new rubyPurchase(10, 5)
function newGame() {
   if (confirm == true) {
   yn = confirm("Are you sure you want do do this? Creating a new game will reset evrything!");
   if (yn==true) {
   doggo = 0;
   rubies = 0;
   clicker = 1;
   level = 1;
   expo = 0;
   expcap = 100;
   dps = 0;
   prestiges = 0;
   autoclickerAllow = false;
   widthguy = expo/expcap*100;
   update();
   }
} else {
   doggo = 0;
   rubies = 0;
   clicker = 1;
   level = 1;
   expo = 0;
   expcap = 100;
   dps = 0;
   prestiges = 0;
   autoclickerAllow = false;
   widthguy = expo/expcap*100;
   update();
}
}
function loadSave() {

}
function saveGame() {
   if (confirm == true) {
   yno = confirm("Are you sure you want to do this? Saving the game will overwrite your last save. This cannot be undone.");
   if (yno == true) {

   }
} else {
   
}
}
function update() {
   document.getElementById("doggos").innerHTML=(doggoscience() +' Doggos');
   document.getElementById("dpsShow").innerHTML=(formatCount(dps, true, 2) + " Dps");
   document.getElementById("rubies").innerHTML=(rubies + " Rubies");
   document.getElementById('exptogo').innerHTML=('Level ' + level)
   document.getElementById("dpc").innerHTML=(formatCount(clicker, true, 2) + " Dpc");
}


setInterval(function() {
   doggo+=dps/10;
   pro();
   expo+=dps/10;
   document.getElementById("doggos").innerHTML=(doggoscience() +' Doggos');
}, 100);

setInterval(function() {
   widthguy = expo/expcap*100;
}, 1);

setInterval(function() {
   if (autoclickerAllow == false ) {
      if (cps > 8) {
         alert("No autoclickers please");
         doggo /= 4;
   }
   }
   cps = 0;
}, 250);