<?php
header("content-type:text/html;charset=utf-8;");
$conn=mysqli_connect('127.0.0.1','root','root','jdt');
$uname=$_POST["username"];
$upassword=$_POST["password"];
$sql="INSERT INTO `info` VALUES(null,'$uname','$upassword')";
$check=mysqli_query($conn,$sql);

if($check){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
mysqli_close($conn);
?>