function onSubmit() {
    var name = document.getElementsByTagName("input")[0];
    var age = document.getElementsByTagName("input")[1];
    var email = document.getElementsByTagName("input")[2];
    var date = document.getElementsByTagName("input")[3];
    var dateTimeLocal = document.getElementsByTagName("input")[4];
    
    
    if (name.value === ""){
        alert("Informe o nome");
        name.focus();
        return;
    }

    if (age.value === ""){
        alert("Informe a idade");
        age.focus();
        return;
    }

    if (email.value === ""){
        alert("Informe seu e-mail");
        email.focus();
        return;
    }

    if (date.value === ""){
        alert("Informe a data");
        date.focus();
        return;
    }

    if (dateTimeLocal.value === ""){
        alert("Informe a data e hora local");
        dateTimeLocal.focus();
        return;
    }

    document.getElementsByTagName("form")[0].submit();
    document.getElementsByTagName("form")[1].submit();
    document.getElementsByTagName("form")[2].submit();
    document.getElementsByTagName("form")[3].submit();
    document.getElementsByTagName("form")[4].submit();
    
}