<?php

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class BuffetModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct('buffets', ['name']);
        }

        public function getBuffets(): array
        {
            try {
                $query = "SELECT id, name, category_id FROM buffets";
                $stmt = $this->connection->prepare($query);
                $stmt->execute();

                $buffets = $stmt->fetchAll();
                return $buffets;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }
    }
