<?php
    include("db.php");    
    $data = array() ; 
    try{
        $data['name']    = $_POST["name"] ;
        $data['email']   = $_POST['email']; 
        $data['phone']   = $_POST['phone']; 
        $data['message'] = $_POST['message']; 
        $sqlStc = $conexion->prepare("INSERT INTO msg(id, name, email, phone, message) VALUES (NULL,:name, :email ,:phone,:message);") ; 
        $sqlStc->bindParam(":name" , $data['name'] ) ;
        $sqlStc->bindParam(":email" , $data['email']) ;
        $sqlStc->bindParam(":phone" , $data['phone']) ;
        $sqlStc->bindParam(":message" , $data['message'] ) ;
        $sqlStc->execute() ; 
        header("Location:../index.html?state=ok") ;
    }
    catch(Exception $err){
        header("Location:../index.html?state=wrong") ;
    }
    


?>