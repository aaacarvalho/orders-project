<?php

    namespace Source\controllers;
    use Source\controllers\Controller;
    use Source\models\CityModel;

    class CityController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function getCities(): void
        {
            $model = new CityModel();
            $cities = $model->getCities();

            if ($cities && !empty($cities)) {
                parent::send(200, $cities);
            } else {
                parent::send(204, []);
            }
        }
    }