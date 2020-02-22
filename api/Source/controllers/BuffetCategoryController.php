<?php

    namespace Source\Controllers;
    use Source\controllers\Controller;
    use Source\models\BuffetCategoryModel;

    class BuffetCategoryController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function getCategories(): void
        {
            $model = new BuffetCategoryModel();
            $categories = $model->getCategories();

            if ($categories && !empty($categories)) {
                parent::send(200, $categories);
            } else {
                parent::send(204, []);
            }
        }
    }