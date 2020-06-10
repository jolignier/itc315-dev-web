function initialize () {

    var bSupportsLocal = (('localStorage' in window) && window['localStorage'] !== null)
    if (! bSupportsLocal ){
        document.getElementById("infoform").innerHTML = "<p>Désolé, ce navigateur ne supporte pas l’API Web Storage du W3C.</p>";
        return;
    }
    if (window.localStorage.length != 0) {
        document.getElementById('firstName').value = window.localStorage.getItem('firstName');
        document.getElementById('lastName').value = window.localStorage.getItem('lastName');
        document.getElementById('postCode').value = window.localStorage.getItem('postCode');
    }
}

function storeLocalContent(fName, lName, pCode){
    window.localStorage.setItem('firstName', fName);
    window.localStorage.setItem('lastName', lName);
    window.localStorage.setItem('postCode', pCode);
}

function clearLocalContent(){
    window.localStorage.removeItem('firstName');
    window.localStorage.removeItem('lastName');
    window.localStorage.removeItem('postCode');
}

window.onload = initialize;