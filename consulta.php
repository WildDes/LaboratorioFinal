<!DOCTYPE html>
<html>
<head>
    <title>Lista de usuarios registrados</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        h2{
            color: #153B49;
            font-size: 20px;
            font-family: 'Titillium Web', sans-serif;
        }

        th{
            border: 1px solid black;
            padding: 8px;
            color: yellow;
            font-family: 'Titillium Web', sans-serif;
        }
        td {
            border: 1px solid black;
            padding: 8px;
            color: black;
            font-family: 'Titillium Web', sans-serif;
        }

        th {
            background-color: #153B49;
        }
    </style>
</head>
<body>
    <?php
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "laboratorio";

    
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    
    $sql = "SELECT * FROM usuarios";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
      
        echo "<h2>Lista de usuarios registrados:</h2>";
        echo "<table>";
        echo "<tr><th>Nombre</th><th>Primer Apellido</th><th>Segundo Apellido</th><th>Email</th><th>Login</th></tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row["nombre"] . "</td>";
            echo "<td>" . $row["apellido1"] . "</td>";
            echo "<td>" . $row["apellido2"] . "</td>";
            echo "<td>" . $row["email"] . "</td>";
            echo "<td>" . $row["login"] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "No se encontraron usuarios registrados.";
    }

   
    $conn->close();
    ?>
</body>
</html>
