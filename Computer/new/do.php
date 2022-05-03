<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="post">
        Name:<input type="text" name="Name" ><br>
        Roll No:<input type="number" name="Roll_no"><br>
        Address:<input type="text" name="Address"><br>
        Age:<input type="number" name="Age"><br>
        <input type="submit" name="Submit">
    </form>
</body>

</html>

<?php
$con = mysqli_connect('localhost','root','', 'project');
if (isset($_POST['Submit'])){
    $name= $_POST["Name"];
    $roll= $_POST["Roll_no"];
    $address=$_POST["Address"];
    $age=$_POST["Age"];
    $sql = "INSERT INTO student (Name,Roll_no,Address,Age)
        VALUES ('$name','$roll','$address','$age')";
    $result=mysqli_query($con,$sql);
   
   if ($result) {
     echo "Record added successfully";
   } else {
     echo "Error:"."<br>".mysqli_error($con);
   }
}
mysqli_close($con);
?>

<?php
$con = new mysqli('localhost','root','','project');
$sql="SELECT * FROM student ";
$result=mysqli_query($con,$sql);
echo "<table border=1 witdth=50%>";
echo " <tr><th>SID</th><th>Name</th><th>Roll no</th><th>Address</th><th>Age</th></tr>";
while($row = mysqli_fetch_assoc($result)){   
echo "<tr><td>" . $row['SID'] . "</td><td>" . $row['Name'] . "</td><td>".$row['Roll_no'].'</td><td>'.$row['Address'].'</td><td>'.$row['Age'].'</td></tr>';  
}
echo "</table>";
mysqli_close($con);
?>

<?php
$con = new mysqli('localhost','root','', 'project');
$sql = "DELETE FROM student WHERE SID=3";
if (mysqli_query($con,$sql) === TRUE) {
  echo "Record deleted";
} else {
  echo "Error:"."<br>".mysqli_error($con); 
}
mysqli_close($con);
?>


