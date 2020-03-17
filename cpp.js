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


var questions= new Array("int i=12;<br> int j= sizeof(i++);<br> cout << i << j; <br> <b>What is the Output</b>","int i=1 << 2 + 3 <<4 <br> <b>Value of i</b>","int x=4>8?5!=1<5==0?1:2:3 <br> <b>Value of x</b>","The copy constructor...","Under which kind of a data structure do pointers fall","Which parameter is used to open a file in read-only mode","Where does the object created","How to access the object in class","How many objects can be present in a single class","Pick out the other definition of object");


var opta= ["12 4" , "112" , "1", "must contain the main() function." , "Non-primitive" , "ios::in" ,"class","Scope resolution operator" , "1", "Member of the class"];

var optb=["13 4", "512", "2","must always be implemented","Primitive", "ios::out" ,"constructor", "Ternary operator","2", "Associate of the class"]


var optc=["Compilation Error","52","3","is called when an object is passed as an argument to a function.","Linear","ios::only","destructor","Direct member access operator","3","Attribute in the class"];

var optd=["0 4","0","Compilation error","None of these","Non-linear","All the above","attributes","None of these","As much as you want","Instance of the class"];

var rtopt=["a","b","c","c","b","a","a","c","d","d"];

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
{   let msg="";
    if(rtopt[i]=="a")
    {
        counter++;
        msg="Correct 💯";
        document.getElementById("result_box").className="alert-success";
    }
    else
    {
        msg="Wrong ❌..The correct option will be "+rtopt[i];
        document.getElementById("result_box").className="alert-danger";
    }
    if(i==9)
    {
        score();
    }
    i++;
    document.getElementById('result').innerHTML=msg;
    setTimeout(() => {
        show();
    },2000);
}
function b()
{
if(rtopt[i]=="b")
    {
        counter++;
        msg="Correct 💯";
        document.getElementById("result_box").className="alert-success";
    }
    else
    {
        msg="Wrong ❌..The correct option will be "+rtopt[i];
        document.getElementById("result_box").className="alert-danger";
    }
    if(i==9)
    {
        score();
    }
    i++;
    document.getElementById('result').innerHTML=msg;
    setTimeout(() => {
        show();
    },2000);
}
function c()
{
    if(rtopt[i]=="c")
    {
        counter++;
        msg="Correct 💯";
        document.getElementById("result_box").className="alert-success";
    }
    else
    {
        msg="Wrong ❌..The correct option will be "+rtopt[i];
        document.getElementById("result_box").className="alert-danger";
    }
    if(i==9)
    {
        score();
    }
    i++;
    document.getElementById('result').innerHTML=msg;
    setTimeout(() => {
        show();
    },2000);
    
}
function d()
{
    if(rtopt[i]=="d")
    {
        counter++;
        msg="Correct 💯";
        document.getElementById("result_box").className="alert-success";
    }
    else
    {
        msg="Wrong ❌..The correct option will be "+rtopt[i];
        document.getElementById("result_box").className="alert-danger";
    }
    if(i==9)
    {
        score();
    }
    i++;
    document.getElementById('result').innerHTML=msg;
    setTimeout(() => {
        show();
    },2000);
}
var i=0;var counter=0;
function show()
{
    document.getElementById('result').innerHTML="";
    document.getElementById("result_box").className="alert-light";
    question.innerHTML="Q"+(i+1)+":"+" "+questions[i]+"❓";
    opt1.value="a) "+opta[i];
    opt2.value="b) "+optb[i];
    opt3.value="c) "+optc[i];
    opt4.value="d) "+optd[i];
}
function score()
{
    document.getElementById('result').innerHTML="";
    document.getElementById("result_box").className="alert-light";
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
        {score="You score 9..😲👍🏻";
        
        break;
        }
        case 8:
        {
            score="You score 8..🤓👍🏻"
            
        break;
        }
        case 7:
        {
            score="You score 7..😇👍🏻"
            
        break;
        }
        default:
        {score="YOU SCORE "+counter+" NEED MORE PRACTICE";
        
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
