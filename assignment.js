//feetToMile

var feet;


function feetToMile( feet)
{
    if(feet<0)
    {
        var mile =console.log("Distance can't be a negative number.");
        
    }
    else{
    var mile=feet*0.000189;
    
    }
    return mile;
   
}

console.log(feetToMile(5));
console.log(feetToMile(2));
console.log(feetToMile(-8));




//woodCalculator
var chair;
var table;
var bad;
function woodCalculator(chair,table,bad)
{
    var woodNeed=1*chair+3*table+5*bad;
    return woodNeed;
}
  

console.log(woodCalculator(1,1,1));
console.log(woodCalculator(2,5,2));


//brickCalculator
var floor;

function brickCalculator(floor)
{
    var result;
if(floor<=10)
{
    result=15*floor;
}
else if(floor>10 &&floor<=20)
{
    result=10*15+(floor-10)*12;
}
else{
result=10*15+10*12+(floor-20)*10;

}

var brickNeed=1000*result;
return brickNeed;
}
console.log(brickCalculator(5));

//tinyFriend
var name;
function tinyFriend(name)
{
    var name;
    var smallestName=name[0];
    var min=name[0].length;
    for(var i=1;i<name.length;i++)
    {
var index=name[i];
var perindexLen=name[i].length;
if(perindexLen<min)
{
    min=perindexLen;
    smallestName=index;
}
    }
    return smallestName;

}


var listFriendname=['upoma','mim','koli','Thasin'];
console.log(tinyFriend(listFriendname));
