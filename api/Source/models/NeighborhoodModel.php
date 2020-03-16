<?php

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class NeighborhoodModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct('neighborhoods', ['name, city_id']);
        }
    
        public function getNeighborhoods(): array
        {
            try {
                $query = "SELECT id, name, city_id, price FROM neighborhoods";
                $stmt = $this->connection->prepare($query);
                $stmt->execute();

                $cities = $stmt->fetchAll();
                return $cities;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }
    }