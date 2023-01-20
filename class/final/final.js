const changeFocus1 = () => {
    let phone1 = document.getElementById("p1").value
    if(phone1.length === 3) {
        document.getElementById("p2").focus()
    }
}

