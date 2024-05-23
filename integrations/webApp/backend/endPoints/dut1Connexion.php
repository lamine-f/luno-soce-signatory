<?php
    session_start();
    require("conf/bd.php");
    
    $login = $_POST["login"];
    $password = $_POST["passord"];

    if ( verifyCredentials($login, $password) ) {
        $user = getUserWith($login);
        $_SESSION["user"]["id"] = $user["id"] ; 
        $_SESSION["user"]["firstName"] = $user["firstName"] ; 
        $_SESSION["user"]["lastName"] = $user["lastName"] ; 
        navigate("home", "SUCCESS" , "Welcom");

    }else {
        navigate("connexion", "FAILED", "Bad credentials");
    }    
    
    
