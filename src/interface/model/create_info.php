<?php
require('./_connectjdt.php');

//书写sql语句
$sql = "CREATE TABLE info (
            id INT primary key NOT NULL AUTO_INCREMENT,
            uname VARCHAR(300) NOT NULL,
			password VARCHAR(300) NOT NULL
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>