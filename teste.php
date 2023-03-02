<?php
$valor_original = 75.00;
$valor_final = 62.25;

$desconto = (($valor_original - $valor_final) / $valor_original) * 100;

echo "O desconto aplicado foi de " . $desconto . "%";