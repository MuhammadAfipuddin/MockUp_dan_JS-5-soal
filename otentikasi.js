let uname = document.getElementById("username");
        let pass = document.getElementById("pswd");
        let kirim = document.getElementById("btn-kirim");

        function masuk() {
            if (uname.value == "muha21080" && pass.value == "0110121080") {
                window.location = "berhasil.html";
                return false;
            } else {
                alert("Login gagal, coba lagi")
            }
        }