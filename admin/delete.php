<?php
    include('../helpers/db.php');
    $response = '' ; 
    try{
        $sqlStc = $conexion->prepare("DELETE FROM msg WHERE msg.id = :id") ; 
        $sqlStc->bindParam(":id" , $_POST['id'] ) ;
        $sqlStc->execute() ;
        $response= 'ok' ;
    }catch(Exception  $err){
        $response = 'wrong'; 
    }
    
    echo  $response ; 
    
?>