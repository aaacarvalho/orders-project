<?php

    namespace Source\controllers;

    abstract class Controller
    {
		public function __construct()
		{
			header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Headers: *");
            header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
		}

		public static function send(int $statusCode, $data): void
        {
        	http_response_code($statusCode);
			echo '<pre>'; 
			echo json_encode($data, JSON_PRETTY_PRINT);
       	}

       	public static function isSuccessful(object $object): array
       	{
        	if ($object->fail()) {
				$result["success"] = false;
            	$result["messsage"] = $object->fail()->getMessage();
          	} else {
            	$result["success"] = true;
            	$result["message"] = "Operação realizada com sucesso!";
			}
			  
			return $result;
       	}
    }