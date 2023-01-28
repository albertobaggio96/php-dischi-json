<?php

    $dischiJason = file_get_contents(__DIR__ . "/dischi.json");

    
    $dischiJason = json_decode($dischiJason, true);

    if(isset($dischiJason)){
        
        header('Content-Type: application/json');
        
        echo json_encode($dischiJason);

    }else{

        $dischiJason = [];

    }




?>