<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phone = trim($_POST['phone']);

    // Validate length
    if (strlen($phone) !== 10) {
        echo "<script>alert('Invalid number'); window.history.back();</script>";
        exit;
    }

    // Check number
    if ($phone === "8131163888") {
        // ✅ Successful
        header("Location: dashboard.html");
        exit;
    } else {
        // ❌ Wrong number
        echo "<script>alert('Phone not recognized'); window.history.back();</script>";
        exit;
    }
}
?>
