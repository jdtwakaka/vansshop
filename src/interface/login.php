<?php
header("content-type:text/html;charset=utf-8;");
$link=mysqli_connect('127.0.0.1','root','root','jdt');
$uname=$_POST["username"];
$upassword=$_POST["password"];
$sql="SELECT * FROM `info` WHERE `uname`='$uname' AND `password`='$upassword'";
$check=mysqli_query($link,$sql);
$res=mysqli_fetch_assoc($check);
if($res){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
?>