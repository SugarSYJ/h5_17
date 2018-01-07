<?php
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $path = 'data/temai.json';
    $file = fopen($path,'r');
    $content = fread($file,filesize($path));
    $data = json_decode($content,true);
    fclose($file);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>