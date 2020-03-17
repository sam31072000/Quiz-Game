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


var questions= new Array("class main{ public static void main(String args[]){<br>final int i;<br>i=20;<br>i=30;<br>System.out.print(i);}}<br><b>What is the output</b>","double x=Math.ceil(125.9)+Math.ceil(0.4873);<br>System.out.print(x);<br><b>What is the output</b>","What is the output of this code?<br>String a[]={\" Apple \",\" Samsung\",\"HTC\",\" Google\" };<br>System.out.print(a[1].length());","STATIC keyword is allowed for which things:","Which of these is correct way of calling a constructor having  no parameteres,of suprclass X by subclass Y","for(int i=0;i<5;i++)<br>{<br>System.out.print(\"hi\");<br>break;<br>}<br>How many times hi will print","Which interface does java.util.Hashtable implement","Which is a reserved word in the Java programming language","Which is a valid keyword in java","What is a numerical range of char");


var opta= ["30","127.0","1","Import statement","super();","0","Java.util.Map","method","interface","-128 to 127"];

var optb=["20","125.0","7","Class level block","superclass.();","1","Java.util.List","native","string","-32,768 to 32,767"]


var optc=["error","126.0","6","Class level variable","super.X();","4","Java.util.HashTable","subclasses","Float","0 to 32,767"];

var optd=["0","Error","5","All the above","super(void);","5","Java.util.Collection","reference","unsigned","0 to 65535"];

var rtopt=["c","a","b","d","a","b","a","b","a","d"];

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
