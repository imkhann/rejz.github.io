<html>
<head>
</head>
<body>
<?php
$makanan = $Jenis Kelamin = $Alamat = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 $makanan = test_input($_POST["makanan"]);
 $Jenis Kelamin = test_input($_POST["Jenis Kelamin"]);
 $Alamat = test_input($_POST["Alamat"]);
}
function test_input($data) {
 $data = trim($data);
 $data = stripslashes($data);
 $data = htmlspecialchars($data);
 return $data;
}
?>
<h2>Pemilihan:</h2>
<form method="post" action="<?php echo
htmlspecialchars($_SERVER["PHP_SELF"]);?>">
 Makanan: <input type="select" name="makanan">
 <br><br>
 Jenis Kelamin:
 <input type="radio" name="gender" value="Laki-laki">Laki-laki
 <input type="radio" name="gender" value="Perempuan">Perempuan
 <br><br>
 Alamat: <textarea name="alamat" rows="5" cols="40"></textarea>
 <br><br>
 <input type="submit" name="selesai" value="Selesai">
</form>
<?php
echo "<h2>Hasil:</h2>";
echo $makanan;
echo "<br>";
echo $Jenis Kelamin;
echo "<br>";
echo $Alamat;
?>
</body>
</html>
