<?php

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class BuffetCategoryModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct('buffets_categories', ['name']);
        }

        public function getCategories(): array
        {
            try {
                $query = "SELECT id, name FROM buffets_categories";
                $stmt = $this->connection->prepare($query);
                $stmt->execute();

                $categories = $stmt->fetchAll();
                return $categories;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }
    }