window.onload=function()

{
var loginform=document.getElementById("loginform");
var question=document.getElementById("question");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var quizbox=document.getElementById("quizbox");
// var cpp=document.createTextNode("C++");
// this.document.append(cpp);
show();
}


var questions= new Array("Which of these give output","print(1+2*3-4**(4-2))<br><b>What is the output</b>","a=[1,2,3]<br>b=(4,5,6)<br>c={7:6,5:4,3:2,1:0}<br>d=a,b,c<br>print(d[2][3])<br><b>What is the output</b>","a=257<br>b=257<br>print(a==b and a is b)<br><b>What is the output</b>","Which of the following keyword is a valid placeholder for body of the function","What is the name of data type for character in python","Who created python","In python which keyword is used to start function","Out if list and tuples which are mutable","In python which is the correct method to load a module");

var opta= ["type:text","-7","1:0","True","break","chr","Guido Van Rossum","Function","tuples","import math"];

var optb=["output('text')","-9","TypeError","Error","continue","character","James Gosling","def","list","include math"]


var optc=["print('text')","9","2","None","body","char","Denis Ritchie","try","Both are mutable","#include <math.h>"];

var optd=["cout<<\"text\"","7","KeyError","False","pass","python do not have any data type for characters they are treated as string.","Tom Cruise","import","None of these","using math"];

var rtopt=["c","b","c","a","d","d","a","b","b","a"];

function startquiz()
{//var u=document.getElementById("name");
//var name=u.value;
 //var formm=document.getElementById("formm");
    //formm.removeChild(loginform);
    //alert("WELCOME "+name);
    //alert("FOR EVERY CORRECT ANSWER YOU GOT 10 RUNS..LET'S SEE WHO SCORE CENTURY🤩")
    //show();
}
function a()
{
    if(rtopt[i]=="a")
    {
        counter++;
        alert("Correct 💯");
    }
    else
    {
        alert("Wrong ❌..The correct option will be "+rtopt[i]);
    }
    if(i==9)
    {
        score();
    }
    i++;
    show();
}
function b()
{
if(rtopt[i]=="b")
    {
        counter++;
        alert("Correct 💯");
    }
    else
    {
        alert("Wrong ❌..The correct option will be "+rtopt[i]);
    }
    if(i==9)
    {
        score();
    }
    i++;
    show();
}
function c()
{
    if(rtopt[i]=="c")
    {
        counter++;
        alert("Correct 💯");
    }
    else
    {
        alert("Wrong ❌..The correct option will be "+rtopt[i]);
    }
    if(i==9)
    {
        score();
    }
    i++;
    show();
}
function d()
{
    if(rtopt[i]=="d")
    {
        counter++;
        alert("Correct 💯");
    }
    else
    {
        alert("Wrong ❌..The correct option will be "+rtopt[i]);
    }
    if(i==9)
    {
        score();
    }
    i++;
    show();
}
var i=0;var counter=0;
function show()
{

    question.innerHTML="Q"+(i+1)+":"+" "+questions[i]+"❓";
    opt1.value="a) "+opta[i];
    opt2.value="b) "+optb[i];
    opt3.value="c) "+optc[i];
    opt4.value="d) "+optd[i];
}
function score()
{
    quizbox.removeChild(question);
    quizbox.removeChild(opt1);
    quizbox.removeChild(opt2);
    quizbox.removeChild(opt3);
    quizbox.removeChild(opt4);
    var score=document.createElement("p");
    var node=document.createTextNode("You Finish Your Quiz");
    var mybr = document.createElement("br");
    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML="<b>Main menu</b>";
    // btn.onclick=function(){};              // Insert text
    score.appendChild(node);
    score.setAttribute('style',"font-size:28pt ;color:RED;font-weight:bolder;font-style:italic;position:absolute;top:20px;font-variant:small-caps;");
    quizbox.append(score);
    quizbox.append(mybr);
    switch(counter)
    {
        case 10:
        {score="Congratulations Coder.. You score 10🥳🥳";
        break;}
        case 9:
        {score="You score 9..👍🏻";
        
        break;
        }
        case 8:
        {
            score="You score 8..👍🏻"
            
        break;
        }
        case 7:
        {
            score="You score 7..👍🏻"
            
        break;
        }
        default:
        {score="YOU SCORE "+counter+"....YOU NEED MORE PRACTICE";
        
        break;
        }
        
    }
    var score1=document.createElement("p");
    var node1=document.createTextNode(score);
    score1.append(node1);
    score1.setAttribute("style","font-size:22pt;color:red; font-variant:small-caps; font-weight:bold;position:absolute;bottom:120px;");
    quizbox.append(score1);
    document.body.append(btn);
    btn.addEventListener('click',() => {
        location.replace("login.php");
    })
    btn.setAttribute("style","font-variant:small-caps; position:absolute;margin-right:20px;");
    
}
