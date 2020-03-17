<?php 
include("connection.php");
//error_reporting(0);
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!-- Responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Philosopher&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Faster+One&display=swap" rel="stylesheet">
	<script src="https://kit.fontawesome.com/668dd02108.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Monoton&display=swap" rel="stylesheet">



	<style type="text/css">
		body{
			margin:0; padding: 0;
			background:url("bgimage1.jpg");
			background-size: 100% 115%;
		}
		.greeting{
			font-family: 'Philosopher', sans-serif;
			font-size: 25pt;
		}
		.error-msg{color:red; font-size: 25pt;}
		button{ outline:none; outline-color: transparent;	}
		#update_form_div{
			border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top:4px solid black; 
			background-color: white; 
		}
		#email_update{ font-size: 16pt;100
		100date_table{ background-color: lightblue; }
		#update_table input{
			width: 120px;
		}
		td{ font-size: 12pt; }
		#up_email_box{
			min-width:250px; font-size: 12pt; background-color: transparent; border-color: transparent;
			font-weight: bold;
		}
		.eye{
			background-color: transparent; border:1px solid transparent;
		}
		#update_name,#update_password,#update_password_retype,#old_password{
			background-color: transparent; border-color: transparent; border-bottom:1px solid black; outline-color: transparent;
		}
		/*quiz css adeded    */
		#loginform
{
    height:500px;
    width:300px;
    border:5px solid black;
    position:absolute ;
    top:20px;left:25px;
    border-radius:5%;
    background-image:url(https://images.unsplash.com/photo-1512719994953-eabf50895df7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60);
    background-size:100% 100%
}
#marquee
{
    color:coral;
    font-size:18pt;
    font-family:'Monoton',cursive;
}
.label
{
    color:lightgreen;
    font-weight:bolder;
    font-size:12pt;
}
#start
{
    height:40px;
    width:80px;
}
.input
{
    width:175px;
    height:25px;
    background-color:transparent ;
    outline:none;
    border-color:none;
    border:none;
    border-bottom:1px solid black;
    color:#F0F8FF;
}
.input:focus{
    border-bottom:1px solid lightgreen;
    transition:0.7s;
    transform:rotateY(360deg);
}

#quizbox
{
    height:500px;
    width:300px;
    border:5px solid black;:;
    position:absolute ;
    top:20px;left:25px;
    border-radius:5%;
    background-image:url("https://wallpapercave.com/wp/wp1862744.jpg");
    background-size:100% 100%;
    background:;
}
#question
{
    font-size:16pt;
    font-weight:bolder;
    color:yellow;
    font-family:'Concert one',cursive;
}
.button
{
    height:50px;
    width:260px;
    border-radius:50px;
    font-variant:small-caps;
    font-size:14pt;
    font-weight:bolder ;
    color:mediumblue;
    background:linear-gradient(lime,seagreen);
    border-color:mediumblue;
    outline:none;
}
#udbtn{
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
}
.mycard{
	background-color:black;

}
	</style>

</head>

<body>

	<br>
	<marquee style="color:darkblue; font-family: 'Monoton', cursive; font-size: 24pt">THIS   QUIZ   MADE   BY   SHAKSHAM    AGARWAL</marquee>
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<?php	
					if(!isset($_SESSION['user_name'])){
						header('location:index.php');
					}
					echo "<p class='greeting'>Hi ".$_SESSION['user_name']." !!!</p>";	///    DISPLAY USER NAME........
				?>
			</div>
		
			
			<div class="col-lg-3">		
				<div style="display:inline;">
					<a href="delete.php" onclick='return confirm("Are you sure you want to delete your account???");'><button class="btn btn-warning">DELETE Account</button></a>
					<a href="logout.php" onclick='return confirm("Are you sure you want to Logout ?");'><button class="btn btn-danger" style="margin-left:45px;">Logout</button></a>
				</div>
			</div>
			
			<div class="col-lg-4">
				<div id="data_update" align="center">
					<button id="udbtn" data-toggle="collapse" data-target="#update_form_div" class="btn btn-info"> Update Profile Info </button><br><br>
					<div class="collapse" id="update_form_div" align="center">
						<form action="update.php" method="post">   <!--////////////////////    UPDATE FORM     //////////////////////-->
							<div class="table-responsive">
								<table class="table table-striped" id="update_table">
									<tr>
										<td colspan="3">
								<<br>			<label id="email_update">UserID:</label>
											<i><input type="email" name="login_email_up" value="<?php echo $_SESSION['email'];?>" id="up_email_box"></i>
										</td>
									</tr>
									<tr>
										<td><label><b>User Name</b></label></td>
										<td><input type="text" name="update_name" id="update_name" value="<?php echo $_SESSION['user_name'];?>"></td>
										<td></td>
									</tr>
									<tr>
										<td><label><b>Old Password</b></label></td>
										<td><input type="password" name="old_password" id="old_password"></td>
										<td><button class="eye" id="eye-btn3" type="button" onclick="eyeblink('old_password','eye-btn3')"><i class="fas fa-eye"></i></button></td>
									</tr>
									<tr>
										<td><label><b>New Password</b></label></td>
										<td><input type="password" name="update_password" id="update_password" ></td>
										<td><button class="eye" id="eye-btn" type="button" onclick="eyeblink('update_password','eye-btn')"><i class="fas fa-eye"></i></button></td>
									</tr>
									<tr>
										<td><label><b>Retype new Password</b></label></td>
										<td><input type="password" name="update_password_retype" id="update_password_retype" ></td>
										<td><button class="eye" id="eye-btn2" type="button" onclick="eyeblink('update_password_retype','eye-btn2')"><i class="fas fa-eye"></i></button></td>
									</tr>
									<tr>
										<td colspan="3" align="center"><input type="submit" name="update_info" value="Update Info"></td>
									</tr>
								</table>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		
	</div>
			

			
	
	<div align="center">
		<p style="font-family: 'Faster One', cursive; font-size: 44pt;font-variant: small-caps;">Choose Your Weapon !!!</p>
		
	</div>
<script type="text/javascript">
		


		function eyeblink(id_input,button_id){
			let status=document.getElementById(id_input).type;
			if(status=="password"){ 
				document.getElementById(id_input).type="text"; 
				document.getElementById(button_id).innerHTML="<i class='fas fa-eye-slash'></i>"; 
				setTimeout(()=>{
					document.getElementById(id_input).type="password";
					document.getElementById(button_id).innerHTML="<i class='fas fa-eye'></i>"; 
				},1000);
			}
		}
		</script>

<!--  <script src="quiz.js"></script>
        <div id="quizbox" align="center">
        
        
        <div class="question" id="question"></div> <br>
        <input type="button" class="button" id="opt1" onclick=a() > <br> <br>
        <input type="button" class="button" id="opt2" onclick=b()> <br> <br>
        <input type="button" class="button" class="button" id="opt3" onclick=c()> <br> <br>
        <input type="button" class="button" id="opt4" onclick=d()>
        </div> -->
            
         <!-- <form id="formm">
        <div id="loginform" class="loginform" align="center">
       <br> <br>
        <marquee id="marquee"><h1> WELCOME‼️       CRICKET    QUIZ     MADE     BY  SHAKSHAM    AGARWAL</h1></marquee> <br> <br>
        <label class="label">NAME :</label>
        <input type="text" class="input" id="name" required/> <br> <br>
        <label class="label">AGE :  </label>
        <input type="number" class="input">
        <br> <br>
        <label class="label">Gender:</label>
        
        <input type="radio" name="Gender" ><label class="label">MALE</label>
        <input type="radio" name="Gender"><label class="label">FEMALE</label>
        <br> <br>
        <label class="label" >EM@IL :</label>
        <input type="email" class="input">
        <br> <br>
            <input type="button" value="START" class="btn btn-success" id="start" onclick=startquiz()> -->




       <!-- CODE STARTWS FOR CARDS TO CHOOSE LANGUAGE -->
<div class="container">
	<div class="row text-center">
  			<div class="col-lg-4">
				<div class="mycard" style="width: 20rem">
						<h2><b>C++</b></h2>
  								<img src="C.png" class="card-img-top" alt="..." width="105%" height="105%">
  										<div class="card-body">
    
    											<p class="card-text"></p>
   											 <a href="cpp.html" class="btn btn-success">Start..</a>
  										</div>
				</div>
</div>
  	
  <div class="col-lg-4">
<div class="mycard" style="width: 20rem;">
	<h2><b>JAVA</b></h2>
  <img src="javaimg.png" class="card-img-top" alt="..." width="80%" height="50%">
  <div class="card-body">
    <p class="card-text"></p>
    <a href="java.html" class="btn btn-success">Start..</a>
  </div>
</div>
</div>
<div class="col-lg-4">
		<div class="mycard" style="width:20rem;">
	<H2 style=" color:black"><b>PYTHON</b></H2>
  <img src="pythonlogo.png" class="card-img-top" alt="..." width="95%" height="100%">
  <div class="card-body">
    
    <p class="card-text"></p>
    <a href="python.html" class="btn btn-success">Start..</a>
  </div>
</div>
</div>
</div>
</div>

</body>
</html>