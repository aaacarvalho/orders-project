<?php

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class SnackModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct('snacks', ['name', 'category_id', 'price', 'minimum']);
        }

        public function getAll(): array
        {
            try {
                $query = 'SELECT id, name, category_id, price, minimum FROM snacks';
                $stmt = $this->connection->prepare($query);
                $stmt->execute();

                $snacks = $stmt->fetchAll();
                return $snacks;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }
    }