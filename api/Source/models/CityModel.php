<?php

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class CityModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct('cities', ['name']);
        }

        public function getCities(): array
        {
            try {
                $query = "SELECT id, name FROM cities";
                $stmt = $this->connection->prepare($query);
                $stmt->execute();

                $cities = $stmt->fetchAll();
                return $cities;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }
    }