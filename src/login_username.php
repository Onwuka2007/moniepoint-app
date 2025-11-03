<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);

    if ($username === "manny") {
        header("Location: dashboard.html");
        exit;
    } else {
        echo "<script>alert('Invalid username'); window.history.back();</script>";
        exit;
    }
}
?>
