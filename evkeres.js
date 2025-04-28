function kereses() {
    let beEv=document.getElementById("beEv").value
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x=>x.json())
    .then(y=>{
        y.prizes.forEach(elem => {
            if (elem.year==beEv) {
                
                sz+=`
                <p>
                ${elem.year} ${elem.category}
                </p>
                `
            }
        });
        document.getElementById("kiadat").innerHTML=sz
    })
}