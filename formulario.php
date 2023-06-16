<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

   
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "laboratorio";

       
        $conn = new mysqli($servername, $username, $password, $dbname);
       
        if ($conn->connect_error) {
            die("Conexión fallida: " . $conn->connect_error);
        }

   
        $nombre = $_POST['nombre'];
        $apellido1 = $_POST['apellido1'];
        $apellido2 = $_POST['apellido2'];
        $email = $_POST['email'];
        $login = $_POST['login'];
        $password = $_POST['password'];

   
        if (empty($nombre) || empty($apellido1) || empty($email) || empty($login) || empty($password)) {
            echo "Por favor, completa todos los campos obligatorios.<br>";
            echo "<br>Redireccionando al formulario...";
            header("refresh:2;url=index.html" );
        } else {
            
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo "El email ingresado no es válido.";
                echo "<br>Redireccionando al formulario...";
                header("refresh:2;url=index.html" );
            } else {
               
                if (strlen($password) < 4 || strlen($password) > 8) {
                    echo "La contraseña debe tener una longitud entre 4 y 8 caracteres.";
                    echo "<br>Redireccionando al formulario...";
                    header("refresh:2;url=index.html" );
                } else {
                    
                    $sql = "SELECT * FROM usuarios WHERE email = '$email'";
                    $result = $conn->query($sql);
                    
                    if ($result->num_rows > 0) {
                        echo "El email ingresado ya está registrado.";
                        echo "<br>Redireccionando al formulario...";
                        header("refresh:2;url=index.html" );
                    } else {
                        
                        $password_encriptada = password_hash($password, PASSWORD_DEFAULT);

                       
                        $sql = "INSERT INTO usuarios (nombre, apellido1, apellido2, email, login, password)
                                VALUES ('$nombre', '$apellido1', '$apellido2', '$email', '$login', '$password_encriptada')";

                       
                        if ($conn->query($sql) === TRUE) {
                            echo "Registro completado con éxito.";
                            echo "<br>";
                            echo "<button onclick=\"location.href='consulta.php'\">Consulta</button>";
                        } else {
                            echo "Error al registrar los datos: " . $conn->error;
                            echo "<br>Redireccionando al formulario...";
                            header("refresh:2;url=index.html" );
                        }
                    }
                }
            }
        }
       
        $conn->close();
    }
?>
