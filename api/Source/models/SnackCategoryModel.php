<?php

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class SnackCategoryModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct('snacks_categories', ['id', 'name']);
        }

        public function getAllCategories(): array
        {
            try {
                $query = 'SELECT id, name FROM snacks_categories';
                $stmt = $this->connection->prepare($query);
                $stmt->execute();
    
                $categories = $stmt->fetchAll();
                return $categories;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }
    }
