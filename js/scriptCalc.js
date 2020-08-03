let int = parseInt,
    float = parseFloat,
    calc = document.getElementById("calc"),
    start = document.getElementById("start"),
    sold = document.getElementById("sold"),
    salaire = document.getElementById("salaire"),
    appartement = document.getElementById("appartement"),
    transport = document.getElementById("transport"),
    lydec = document.getElementById("lydec"),
    frais = document.getElementById("frais"),
    sold2 = document.getElementById("sold2"),
    salaire_time = document.getElementById("salaire_time"),
    salaire_year = document.getElementById("salaire_year"),
    temps_neccesaire = document.getElementById("temps_neccesaire"),
    internet = document.getElementById("internet"),
    appartement2 = document.getElementById("appartement2"),
    car = document.getElementById("car"),
    save_money = document.getElementById("save_money"),
    time = document.getElementById("time"),
    sold_out = document.getElementById("sold_out"),
    salaire_out = document.getElementById("salaire_out"),
    appartement_out = document.getElementById("appartement_out"),
    transport_out = document.getElementById("transport_out"),
    lydec_out = document.getElementById("lydec_out"),
    internet_out = document.getElementById("internet_out"),
    frais_out = document.getElementById("frais_out"),
    appartement_but_out = document.getElementById("appartement_but_out"),
    car_but_out = document.getElementById("car_but_out"),
    save_but_out = document.getElementById("save_but_out"),
    time_but_out = document.getElementById("time_but_out"),
    total_frais_output = document.getElementById("total_frais_output"),
    total_but_output = document.getElementById("total_but_output"),
    montantafterbutAndSold = document.getElementById("montantafterbutAndSold"),
    somme_save_output = document.getElementById("somme_save_output"),
    all_out = document.getElementById("all_out"),
    ver_icone = document.getElementById("ver_icone"),
    icone = document.getElementById("icone"),
    montantSavePerYear = document.getElementById("montantSavePerYear"),
    montantafterbut = document.getElementById("montantafterbut"),
    possibiliter = document.getElementById("possibiliter");


// parte varible Alert 

let inputEmpty = document.getElementById("inputEmpty"),
    salaireFailed = document.getElementById("salaireFailed"),
    overly = document.getElementById("overly"),
    close2 = document.getElementById("close2"),
    close = document.getElementById("close");

// End parte varible Alert 


// parte button start 

start.addEventListener('click' , () => {
    sold.focus();
})

// End Section button Start

// Section calc 

let calcInfo = () => {
    let total_frais = (int(appartement.value) + int(internet.value) + int(transport.value) + int(lydec.value) + int(frais.value));
    let total_but = (int(appartement2.value) + int(car.value) + int(save_money.value));
    let somme_save = (int(salaire.value) - int(total_frais));

    let objet_total = {
        totalFrais : total_frais,
        totalBut : total_but,
        sommeSave : somme_save,
    }
    return objet_total;
}

// End Section calc 


// Section affiche 2 time and salaire per time

let calcTimeSalaire = () => {
    let salairePerYear = (int(salaire.value) * 12);
    let salairePerTimeBut = (calcInfo().sommeSave * float(time.value) + int(sold.value));            
    let timeRequest = ( (calcInfo().totalBut) / salairePerTimeBut); // modifier maintenant 

    let objet_time = {
        salaireYear : salairePerYear,
        salaireTime : salairePerTimeBut,
        timeNess : timeRequest,
    }

    return objet_time;
}

// End Section affiche 2 time and salaire per time

// possiblité dans le time value 

let possTime = () => {
    let x = calcTimeSalaire().salaireTime,
        y = calcInfo().totalBut,
        e = y - int(sold.value);

    let z = calcInfo().sommeSave;
    let f = (z * 12);

    let timeFinal = e / f;

    let timeFinalOne = timeFinal.toFixed(1);
    let timeFinalAll = timeFinalOne.toString().split(".");

    let timeFinalYear = timeFinalAll[0]; // year 
    let timeFinalMonth = (timeFinalAll[1]) * 1.2;
    let timeFinalMonthLast = Math.round(timeFinalMonth);

    let allTimePerMonth = ((timeFinalYear * 12) + timeFinalMonthLast),
        allTimePerYear = (allTimePerMonth / 12);

    let soldAndSommeSavePerTime = (Math.round(calcInfo().sommeSave * 12 * float(time.value)) + int(sold.value));

    let h = calcInfo().sommeSave * 12 * float(time.value) + int(sold.value);

    let saveMoneyAfterBut = (h - y);

    if (h > y){
        montantSavePerYear.textContent = (`Montant save chaque Anneés sans Frais : ${calcInfo().sommeSave * 12} dhs`);
        possibiliter.children[0].textContent = (`C'est possible , dans ${time.value} Anneés/${Math.round(time.value * 12)} Mois`);
        possibiliter.children[1].textContent = null;
        temps_neccesaire.firstElementChild.classList.add("fas" , "fa-check");
        temps_neccesaire.firstElementChild.style.color = "#4cd137";
        montantafterbut.textContent = (`Aprés d'atteindre les objectifs , la Montant restant : ${Math.round(saveMoneyAfterBut)} dhs NB: dans ${Math.round(time.value * 12)} Mois`);
        temps_neccesaire.style.background = "green";
        montantafterbutAndSold.textContent = (`(L'argent save + sold) :  ${soldAndSommeSavePerTime} dhs , dans ${time.value} Anneés/${Math.round(time.value * 12)} Mois`);
        temps_neccesaire.children[1].textContent = (`NB : C'est possible d'attendre les objectifs et dans ${timeFinalYear > 0 ? (timeFinalYear + " Anneés") : ("")} et ${timeFinalMonthLast} Mois , (${allTimePerMonth} Mois) , (${allTimePerYear.toFixed(1)} years) Avec save de chque mois : ${calcInfo().sommeSave} dhs`);

    }else{
        montantSavePerYear.textContent = (`Montant save chaque Anneés sans Frais : ${Math.round(calcInfo().sommeSave * 12)} dhs`);
        possibiliter.children[0].textContent = (`pas possible , dans ${time.value} Anneés/${Math.round(time.value * 12)} Mois`);
        possibiliter.children[1].textContent = (`Essayer de Modifier les Inforamation , et optimiser plus de salaire Pour Atteindre le but`);
        temps_neccesaire.firstElementChild.classList.add("fas" , "fa-check");
        temps_neccesaire.firstElementChild.style.color = "#4cd137";
        montantafterbut.textContent = ("Montant save : 0 dhs");
        temps_neccesaire.style.background = "green";
        montantafterbutAndSold.textContent = (`(L'argent save + sold) :  ${soldAndSommeSavePerTime} dhs , dans ${time.value} Anneés/${Math.round(time.value * 12)} Mois`);
        temps_neccesaire.children[1].textContent = (`NB : C'est possible d'attendre les objectifs et dans ${timeFinalYear > 0 ? (timeFinalYear + " Anneés") : ("")} et ${timeFinalMonthLast} Mois , (${allTimePerMonth} Mois) , (${allTimePerYear.toFixed(1)} years) Avec save de chque mois : ${calcInfo().sommeSave} dhs`);
    }
}

// End possiblité dans le time value 


// parte collect des information Entreé 

let collectInfo = () => {
    // parte sold
    sold_out.textContent = (`Sold : ${sold.value} dhs`);
    // parte salaire 
    salaire_out.textContent = (`Salaire : ${salaire.value} dhs`);
    // parte appartement
    appartement_out.textContent = (`Appatement frais : ${appartement.value} dhs`);
    // parte transport
    transport_out.textContent = (`transport frais : ${transport.value} dhs`);
    // parte lydec 
    lydec_out.textContent = (`L'eau & Electricité : ${lydec.value} dhs`);
    // parte internet 
    internet_out.textContent = (`Internet : ${internet.value} dhs`);
    // parte autre frias 
    frais_out.textContent = (`Autre frais : ${frais.value} dhs`);
    // parte appartement but
    appartement_but_out.textContent = (`Prix Appartement : ${appartement2.value} dhs`);
    // parte car but
    car_but_out.textContent = (`prix de car : ${car.value} dhs`);
    // parte money save
    save_but_out.textContent = (`somme save : ${save_money.value} dhs`);

    // time but 

    time_but_out.textContent = (`time : ${time.value} Anneés/${Math.round(time.value * 12)} Mois`);

    // parte cacl info 

    total_frais_output.textContent = (`Total frais Par Mois : ${calcInfo().totalFrais} dhs`);
    somme_save_output.textContent = (`L'argent save par mois : ${calcInfo().sommeSave > 0 ? (calcInfo().sommeSave + "dhs") : ("0 dh parce que les frais extérieure de le salaire, Essayer de modifier les Information pour une bon calcule.")}`);
    total_but_output.textContent = (`Total but : ${calcInfo().totalBut} dhs`);
    // parte time salaire 

    salaire_year.textContent = (`Salaire par Anneé : ${calcTimeSalaire().salaireYear} dhs`);
    sold2.textContent = (`Sold : ${sold.value} dhs`);
    salaire_time.textContent = (`Montant collecter sans frais dans ${Math.round(time.value * 12)} Mois, C'est : ${Math.round(calcInfo().sommeSave * 12 * float(time.value))} dhs`);
}

// End parte collect des information Entreé

// C'est l'affichage ne functionne pas 

calc.addEventListener('click' , () =>{
    if(sold.value != "" && salaire.value != "" && appartement.value != "" && transport.value != "" && lydec.value != "" && internet.value != "" && frais.value != "" && appartement2.value != "" && car.value != "" && save_money.value != "" && time.value != ""){
        collectInfo();
        calcInfo();
        calcTimeSalaire();
        possTime();
        if (calcInfo().totalFrais < int(salaire.value)){
            all_out.style.display = "block";
            console.log("hey salaire > de frais");
        }else{
            overly.style.display = "block";
            all_out.style.display = "none";
            salaireFailed.style.display = "block";
            console.log("hey salaire < de frais");
        }
    }else{
        overly.style.display = "block";
        inputEmpty.style.display = "block";
    }
})


// parte declare Variable alert

let alertSold = document.getElementById("alertSold"),
    alertSalaire = document.getElementById("alertSalaire"),
    alertAppartement = document.getElementById("alertAppartement"),
    alertTransport = document.getElementById("alertTransport"),
    alertLydec = document.getElementById("alertLydec"),
    alertInternet = document.getElementById("alertInternet"),
    alertFrais = document.getElementById("alertFrais"),
    alertAppartement2 = document.getElementById("alertAppartement2"),
    alertCar = document.getElementById("alertCar"),
    alertSaveMoney = document.getElementById("alertSaveMoney"),
    alertTime = document.getElementById("alertTime");

// parte variable butoon Alert

let buttonOksold = document.getElementById("buttonOksold"),
    buttonOksalaire = document.getElementById("buttonOksalaire"),
    buttonOkAppartement = document.getElementById("buttonOkAppartement"),
    buttonOktransport = document.getElementById("buttonOktransport"),
    buttonOklydec = document.getElementById("buttonOklydec"),
    buttonOkinternet = document.getElementById("buttonOkinternet"),
    buttonOkfrais = document.getElementById("buttonOkfrais"),
    buttonOkappartement2 = document.getElementById("buttonOkappartement2"),
    buttonOkcar = document.getElementById("buttonOkcar"),
    buttonOksavemoney = document.getElementById("buttonOksavemoney"),
    buttonOktime = document.getElementById("buttonOktime");

// End parte variable butoon Alert

// loading page js 

let loadingPageDiv = document.getElementById("loadingPageDiv");

window.onload = setInterval(() => {
    loadingPageDiv.style.top = "-100%";
} , 3000);

// End loading page js 



// settings box

let iconeSettings = document.getElementById("icone-settings-box"),
    iconeSettings2 = document.getElementById("icone-spine"),
    settingsBox = document.getElementById("settingsBox");
 
iconeSettings.addEventListener('click' , () => {
    settingsBox.classList.toggle("plus_width");
    iconeSettings2.classList.toggle("fa-spin");
});

// parte change color box settings

let blackColor = document.getElementById("black-color"),
    whiteColor = document.getElementById("white-color"),
    greyColor = document.getElementById("grey-color");

blackColor.addEventListener('click' , () => {
    document.body.style.background = "black";
    ChangeColorFun("white");
})

whiteColor.addEventListener('click' , () => {
    document.body.style.background = "white";
    ChangeColorFun("black");
})

greyColor.addEventListener('click' , () => {
    document.body.style.background = "#c1c2c2";
    ChangeColorFun("black");
})

// End parte change color box settings

// parte active notification

// Section Alert active & block notification 

let alertActiveBlockNotif = document.getElementById("alertActiveBlockNotif"),
    messageAlertActiveBlockNotif = document.getElementById("messageAlertActiveBlockNotif"),
    iconeAlertCloseActiveBlockNotif = document.getElementById("iconeAlertCloseActiveBlockNotif");

let blockNotif = document.getElementById("blockNotif"),
    activeNotif = document.getElementById("activeNotif"),
    allAlert = document.getElementById("all-alert");

iconeAlertCloseActiveBlockNotif.addEventListener('click' , () => {
    alertActiveBlockNotif.style.top = "-10%";
})

// End Section Alert active & block notification 

let alertArray = [alertSold , alertSalaire , alertAppartement , alertTransport , alertLydec , alertInternet , alertFrais , alertAppartement2 , alertCar , alertSaveMoney , alertTime];

activeNotif.addEventListener('click' , () => {
    //  parte function add Event Display des alert 

    // parte Show Notification Alert Active Block

    messageAlertActiveBlockNotif.textContent = (`la documentation Activé`);
    alertActiveBlockNotif.style.top = "0";

    // End parte Show Notification Alert Active Block

    audio1.muted = false;

    allAlert.classList.remove("hide");

    let blockNotifFun = () => {
        for (let i = 0 ; i < alertArray.length ; i++){
            alertArray[i].style.left = "-25%";
        }
    }
    
    sold.addEventListener('focus' , () => {
        blockNotifFun();
        alertSold.style.left = "0";
        playAudio();
        buttonOksold.addEventListener('click' , () => {
            alertSold.style.left = "-25%";
        })
    })
    
    
    salaire.addEventListener('focus' , () => {
        blockNotifFun();
        alertSalaire.style.left = "0";
        playAudio();
        buttonOksalaire.addEventListener('click' , () => {
            alertSalaire.style.left = "-25%";
        })
    })
    
    appartement.addEventListener('focus' , () => {
        blockNotifFun();
        alertAppartement.style.left = "0";
        playAudio();
        buttonOkAppartement.addEventListener('click' , () => {
            alertAppartement.style.left = "-25%";
        })
    })
    
    transport.addEventListener('focus' , () => {
        blockNotifFun();
        alertTransport.style.left = "0";
        playAudio();
        buttonOktransport.addEventListener('click' , () => {
            alertTransport.style.left = "-25%";
        })
    })
    
    lydec.addEventListener('focus' , () => {
        blockNotifFun();
        alertLydec.style.left = "0";
        playAudio();
        buttonOklydec.addEventListener('click' , () => {
            alertLydec.style.left = "-25%";
        })
    })
    
    internet.addEventListener('focus' , () => {
        blockNotifFun();
        alertInternet.style.left = "0";
        playAudio();
        buttonOkinternet.addEventListener('click' , () => {
            alertInternet.style.left = "-25%";
        })
    })
    
    frais.addEventListener('focus' , () => {
        blockNotifFun();
        alertFrais.style.left = "0";
        playAudio();
        buttonOkfrais.addEventListener('click' , () => {
            alertFrais.style.left = "-25%";
        })
    })
    
    
    appartement2.addEventListener('focus' , () => {
        blockNotifFun();
        alertAppartement2.style.left = "0";
        playAudio();
        buttonOkappartement2.addEventListener('click' , () => {
            alertAppartement2.style.left = "-25%";
        })
    })
    
    car.addEventListener('focus' , () => {
        blockNotifFun();
        alertCar.style.left = "0";
        playAudio();
        buttonOkcar.addEventListener('click' , () => {
            alertCar.style.left = "-25%";
        })
    })
    
    save_money.addEventListener('focus' , () => {
        blockNotifFun();
        alertSaveMoney.style.left = "0";
        playAudio();
        buttonOksavemoney.addEventListener('click' , () => {
            alertSaveMoney.style.left = "-25%";
        })
    })
    
    time.addEventListener('focus' , () => {
        blockNotifFun();
        alertTime.style.left = "0";
        playAudio();
        buttonOktime.addEventListener('click' , () => {
            alertTime.style.left = "-25%";
        })
    })

    //  End parte function add Event Display des alert 

})

// End parte active notification 

// parte block notification

blockNotif.addEventListener('click' , () => {

    allAlert.classList.add("hide");
    // parte Show Notification Alert Active Block

    messageAlertActiveBlockNotif.textContent = (`la documentation Desactivé`);
    alertActiveBlockNotif.style.top = "0";
    
    // End parte Show Notification Alert Active Block

    audio1.muted = true;
})

// End parte block notification

// End parte son Controller 

// End settings box 

// close icone 

close.addEventListener('click' , () => {
    overly.style.display = "none";
    inputEmpty.style.display = "none";
})

close2.addEventListener('click' , () => {
    overly.style.display = "none";
    salaireFailed.style.display = "none";
})

// End close icone 

// Section Explication

// parte variable sound

let audio1 = document.getElementById("audio1");

let playAudio = () => {
    audio1.play();
};

// End parte variable sound 

// End parte declare Variable alert

// End Section Explication

// End C'est l'affichage ne functionne pas


// Change Color Fun

let ChangeColorFun = (color) => {
    let xt = Array.from(document.querySelectorAll(".all_section_input h2"));
    for (let t = 0 ; t < xt.length ; t++){
        xt[t].style.color = color;
    }
}

// End Change Color Fun