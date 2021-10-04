function miseAlheure() {
    //Je récupère la date du diplome
    let dateDiplome = new Date('2022-07-20T17:00:00')
    //Je récupère la date et l'heur en cours
    let maintenant = new Date()

    //Je calcul les jours heures minutes secondes en millisecondes
    let jours = 1000 * 60 * 60 * 24
    let heures = 1000 * 60 * 60
    let minutes = 1000 * 60
    let secondes = 1000

    //Je soustrait mes dates pour avoir la durée en milliseconde
    let duree = dateDiplome - maintenant

    //On mets les jours en forme
    document.querySelector('.jours').innerHTML = Math.floor(duree / jours)
    //On mets les heures en forme (on oublie pas le modulo pour retirer les jours)
    document.querySelector('.heures').innerHTML = ("00" + (Math.floor(duree / heures) % 24)).slice(-2)
    //On mets les minutes en forme (on oublie pas le modulo pour retirer les heures)
    document.querySelector('.minutes').innerHTML = ("00" + (Math.floor(duree / minutes) % 60)).slice(-2)
    //On mets les secondes en forme (on oublie pas le modulo pour retirer les minutes)
    document.querySelector('.secondes').innerHTML = ("00" + (Math.floor(duree / secondes) % 60)).slice(-2)

}

//On appelle la fonction mise à l'heure toutes les 500ms
setInterval(miseAlheure, 500)