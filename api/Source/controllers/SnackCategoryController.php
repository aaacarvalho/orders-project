<?php

    namespace Source\Controllers;
    use Source\controllers\Controller;
    use Source\models\SnackCategoryModel;

    class SnackCategoryController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function getCategories(): void
        {
            $model = new SnackCategoryModel();
            $categories = $model->getAllCategories();

            if ($categories && !empty($categories)) {
                parent::send(200, $categories);
            } else {
                parent::send(204, []);
            }
        }
    }
