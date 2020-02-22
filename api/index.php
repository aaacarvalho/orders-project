<?php

    require __DIR__ . '/vendor/autoload.php';

    use CoffeeCode\Router\Router;

    $router = new Router(ROOT);

    /*
        Controllers
    */

    $router->namespace('Source\controllers');

    /*
        Snacks
    */

    $router->get('/snacks', 'SnackController:getSnacks');
    $router->get('/snacks/categories', 'SnackCategoryController:getCategories');

    /*
        Cities
    */

    $router->get('/cities', 'CityController:getCities');

    /*
        Neighborhoods
    */

    $router->get('/neighborhoods', 'NeighborhoodController:getNeighborhoods');

    /*
        Buffets
    */

    $router->get('/buffets', 'BuffetController:getBuffets');
    $router->get('/buffets/categories', 'BuffetCategoryController:getCategories');

    /* 
        Dispatch
    */

    $router->dispatch();

    if($router->error()){
        echo $router->error();
    }