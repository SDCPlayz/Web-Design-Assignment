function isLetter(character) {
    return /[a-zA-Z]/.test(character)   
}

function isNumber(character) {
    return /[0-9]/.test(character)   
}


$(window).on("load", function loadfunction() {
    var form = $("#form")
    var nameinput = $("#nameput")
    var surnameinput = $("#surnameput")
    var numberinput = $("#numberput")
    var emailinput = $("#emailput")

    form.on("submit", function onformsubmit(event) {
        event.preventDefault()
        var namevalue = nameinput.val()
        var surnamevalue = surnameinput.val()
        var numbervalue = numberinput.val()

        for (let index = 0; index < namevalue.length; index++) {
            const element = namevalue.charAt(index);
            
            if (isLetter(element)) {
            }
            else {
                return false
            }
        }

        for (let index = 0; index < surnamevalue.length; index++) {
            const element = surnamevalue.charAt(index);
            
            if (isLetter(element)) {
            }
            else {
                return false
            }
        }

        for (let index = 0; index < numbervalue.length; index++) {
            const element = numbervalue.charAt(index);
            
            if (isNumber(element)) {
            }
            else {
                return false
            }
        }

        alert("You are logged in")
        window.open("games.html")
    })
})