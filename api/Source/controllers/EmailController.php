<?php

    namespace Source\controllers;
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use Source\controllers\Controller;
    use \stdClass;

    class EmailController extends Controller
    {
        private $mail;
        private $exception;
        private $data;

        public function __construct()
        {
            parent::__construct();
        }

        private function create($orderContent): void
        {
            $this->mail = new PHPMailer(true);
            $this->exception = new Exception();
            $this->data = new stdClass;
        
            $this->mail->isHTML(true);
            $this->mail->setLanguage("br");

            $this->mail->SMTPAuth = MAIL["SMTPAuth"];
            $this->mail->SMTPSecure = MAIL["SMTPSecure"];
            $this->mail->CharSet = "utf-8";

            $this->mail->Host = MAIL["host"];
            $this->mail->Port = MAIL["port"];
            $this->mail->Username = MAIL["user"];
            $this->mail->Password = MAIL["passwd"];

            $this->data->subject = "Você recebeu um novo pedido!";
            
            $total = 0;
            $deliveryPrice = number_format($orderContent->customerData->price, 2, ',', '.');
            $date = date('d/m/Y', strtotime($orderContent->customerData->date));

            $template = file_get_contents(__DIR__ . '/../templates/email.html', 0, NULL);

            $content = "<h2 class='order-title'>Informações do Cliente</h2></br>";
            $content .= "<table class='order-data'>";
            $content .= "<tr><th>Nome:</th><td>{$orderContent->customerData->name}</td></tr>";
            $content .= "<tr><th>Celular:</th><td>{$orderContent->customerData->cellphone}</td></tr>";
            $content .= $orderContent->customerData->phone ? "<tr><th>Telefone:</th><td>{$orderContent->customerData->phone}</td></tr>" : "";
            $content .= $orderContent->customerData->email ? "<tr><th>Email:</th><td>{$orderContent->customerData->email}</td></tr>" : "";
            $content .= "<tr><th>Bairro:</th><td>{$orderContent->customerData->neighborhood}</td></tr>";
            $content .= "<tr><th>Rua:</th><td>{$orderContent->customerData->street} - Nº {$orderContent->customerData->number}</td></tr>";
            $content .= $orderContent->customerData->comp ? "<tr><th>Complemento:</th><td>{$orderContent->customerData->comp}</td></tr>" : "";
            $content .= $orderContent->customerData->delivery ? "<tr><th>Delivery:</th><td>Sim</td></tr>" : "<tr><th>Delivery:</th><td>Não</td></tr>";
            $content .= $orderContent->customerData->delivery ? "<tr><th>Preço de entrega:</th><td>R$ {$deliveryPrice}</td></tr>" : "";
            $content .= "<tr><th>Data de entrega do pedido:</th><td>{$date} às {$orderContent->customerData->time}h</td></tr>";
            $content .= "</table>";
            
            $content .= "<h2 class='order-title'>Descrição do Pedido</h2></br>";
            
            $content .= "<table class='order-content'>";
            $content .= "<tr><th>Nome do Produto</th><th>Categoria</th><th>Preço Unitário</th><th>Quantidade</th><th>Total</th></tr>";

            foreach ($orderContent->order as $item) {
                $total += $item->total;
                $price = number_format($item->price, 2, ',', '.');
                $itemTotal = number_format($item->total, 2, ',', '.');
                $content .= "<tr><td>$item->name</td><td>{$item->category->name}</td><td>R$ {$price}</td><td>$item->quantity</td><td>R$ $itemTotal</td>";
            }

            $content .= "</table>";

            $parsedTotal = number_format($total, 2, ',', '.');
            $content .= "<h3 class='order-total'> Total do pedido: R$ {$parsedTotal} </h3>";

            $body = str_replace("%TABLE%", $content, $template);

            $this->data->body = $body;
        }

        public function sendEmail(): void
        {
            $orderContent = json_decode(file_get_contents('php://input'));

            $this->create($orderContent);
            
            try {
                $this->mail->IsSMTP();
                $this->mail->Subject = $this->data->subject;
                $this->mail->Body = $this->data->body;
                $this->mail->AltBody = $this->data->body;
                $this->mail->addAddress($orderContent->customerData->city->email, "Chicre Cheme");
                $this->mail->setFrom(MAIL["fromMail"], MAIL["fromName"]);

                $this->mail->send();

                parent::send(200, ["success" => true, "message" => "Seu pedido foi criado com sucesso!"]);
            } catch (Exception $exception) {
                $this->error = $exception;

                parent::send(200, ["success" => false, "message" => $exception]);
            }
        }
    }