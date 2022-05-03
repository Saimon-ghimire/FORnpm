<?php
$con = new mysqli('localhost','root','', 'project');
$sql = "CREATE TABLE employee(
    Emp_id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(30),
    Address VARCHAR(30),
    DOB DATE,
    Remarks VARCHAR(50)
    )";  
if (mysqli_query($con,$sql) === TRUE) {
      echo "Table created ";
} else {
     echo "Error:"."<br>".mysqli_error($con);
}
mysqli_close($con);
?>

<?php
$con = mysqli_connect('localhost','root','', 'project');

$sql1 = "INSERT INTO employee (Name, Address,DOB, Remarks)
VALUES ('Ram', 'Kathmandu', '1190-11-20','Good employee')";
$sql2 = "INSERT INTO employee (Name, Address,DOB, Remarks)
VALUES ('Shyam', 'Bhaktapur','1991-06-18', 'Works hard')";
$sql3 = "INSERT INTO employee (Name, Address,DOB, Remarks)
VALUES ('Hari', 'Kathmandu','1988-06-22', 'Irresponsible in work')";

$result1=mysqli_query($con,$sql1);
$result2=mysqli_query($con,$sql2);
$result3=mysqli_query($con,$sql3);

if ($result1 && $result2 & $result3) {
  echo "Record added";
} else {
  echo "Error:"."<br>".mysqli_error($con);
}

mysqli_close($con);
?>

<?php
$con = mysqli_connect('localhost','root','', 'project');

$sql = "UPDATE employee SET Address='Mumbai', Name='Salman Khan' WHERE Emp_id=3";

if (mysqli_query($con,$sql) === TRUE) {
  echo "Record updated";
} else {
  echo "Error:"."<br>".mysqli_error($con);
}

mysqli_close($con);
?>


<?php
$con = new mysqli('localhost','root','', 'project');
$sql = "DELETE FROM employee WHERE Emp_id=1";
if (mysqli_query($con,$sql) === TRUE) {
  echo "Record deleted";
} else {
  echo "Error:"."<br>".mysqli_error($con);
}
mysqli_close($con);
?>






