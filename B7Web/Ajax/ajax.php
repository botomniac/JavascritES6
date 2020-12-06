<?php

$x = isset($_GET['x']);
$y = isset($_GET['y']);

$resultado = 0;
$resultado = $x + $y;

echo "Sum: ",$resultado;

?>