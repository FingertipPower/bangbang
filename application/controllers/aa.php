<?php
    header("Content-type: text/html; charset=gb2312/utf-8");
    $basedir = dirname(__FILE__);
    $file_name="aabb.txt";
    $fp=fopen($file_name,'r');
    while(!feof($fp))
    {
        $buffer=fgets($fp,4096);
        echo $buffer."<br/>";
    }
    fclose($fp);
?>
