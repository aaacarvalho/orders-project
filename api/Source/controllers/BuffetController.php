<?php

    namespace Source\controllers;
    use Source\controllers\Controller;
    use Source\models\BuffetModel;

    class BuffetController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function getBuffets(): void
        {
            $model = new BuffetModel();
            $buffets = $model->getBuffets();

            if ($buffets && !empty($buffets)) {
                parent::send(200, $buffets);
            } else {
                parent::send(204, []);
            }
        }
    }