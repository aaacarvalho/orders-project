<?php

    namespace Source\controllers;
    use Source\controllers\Controller;
    use Source\models\SnackModel;

    class SnackController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function getSnacks(): void
        {
            $model = new SnackModel();
            $snacks = $model->getAll();

            if ($snacks && !empty($snacks)) {
                parent::send(200, $snacks);
            } else {
                parent::send(204, []);
            }
        }
    }