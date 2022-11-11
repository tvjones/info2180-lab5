<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $country = $_GET["country"];
  $country = strip_tags($country);
  $country = strtolower($country);
  $lookup = $_GET["lookup"];


  
  if ($lookup == "countries") {
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "<table>";
    echo
    "<tr>
  <th>Country Name</th>
  <th>Continent</th>
  <th>Independence Year</th>
  <th>Head of State</th>
</tr>";
    foreach ($results as $row) :
      echo "<tr>
  <td>" . $row['name'] . "</td>
    <td>" . $row['continent'] . "</td>
    <td>" . $row['independence_year'] . "</td>
    <td>" . $row['head_of_state'] . "</td>
  </tr>";
    endforeach;
    echo "</table>";
  } 
  else if ($lookup ="cities"){


    echo "<table>";
    echo
    "<tr>
  <th>Name</th>
  <th>District</th>
  <th>Population</th>
</tr>";
    
      $stmt = $conn->query("SELECT cities.name, cities.district, cities.population FROM cities JOIN countries ON cities.country_code = countries.code WHERE countries.name LIKE '%$country%'");
      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
      foreach ($results as $row) :
        echo "<tr>
  <td>" . $row['name'] . "</td>
    <td>" . $row['district'] . "</td>
    <td>" . $row['population'] . "</td>
  </tr>";
      endforeach;

    echo "</table>";
  }
}
