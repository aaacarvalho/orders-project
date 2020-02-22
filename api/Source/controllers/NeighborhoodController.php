<?php

    namespace Source\Controllers;
    use Source\controllers\Controller;
    use Source\models\NeighborhoodModel;

    class NeighborhoodController extends Controller
    {
        public function __construc()
        {
            parent::__construct();
        }

        public function getNeighborhoods(): void
        {
            $model = new NeighborhoodModel;
            $neighborhoods = $model->getNeighborhoods();

            if ($neighborhoods && !empty($neighborhoods)) {
                parent::send(200, $neighborhoods);
            } else {
                parent::send(204, []);
            }
        }
    }