/*
let photos =[
            "steam-locomotive-3376093_640.jpg",
            "locomotive-2683012_1280.jpg",
            "locomotive-4231459_1280.jpg",
            "locomotive-7419624_1280.jpg",
            "railroad-8004014_1280.jpg",
            "railway-4999364_1280.jpg",
            "spiez-3114336_1280.jpg",
            "train-527849_1280.jpg",
            "train-5450300_1280.jpg",
            "train-5723095_1280.jpg",
            "train-6760568_1280.jpg",
            "electric-locomotive-4096298_1280.jpg"
];*/

let photo_collection =[
            {image:"steam-locomotive-3376093_640.jpg",
             title:"DR 01",
             alt:"Das Bild zeigt eine Lok der Baureihe DR 01",
             description:"Die Loks derBaureihe 01 ware die erste Einheitslokomotiven der Deutschen Reichsbahn, die für den schweren Schnellzugdienst konzipiert wurde. Sie wurden zwischen 1925 und 1938 gebaut und waren für ihre Leistungsfähigkeit bekannt. Die abgebildete Lokomotive 01 1075 ist eine Schlepptenderlokomotive mit der Achsfolge 2'C1', auch 'Pacific' genannt, und konnten eine Höchstgeschwindigkeit von bis zu 130 km/h erreichen"
            },
            {image:"locomotive-2683012_1280.jpg",
             title:"SNCF BB 12125",
             alt:"Das Bild zeigt eine Lok der Baureihe BB 12125",
             description:"Die SNCF BB 12125 ist eine französische Elektrolokomotive der Baureihe BB 12000, und bekannt für ihr markantes Aussehen. Sie wurde hauptsächlich für den Personen- und Gütertransport in Frankreich eingesetzt. In Frankreich werden Lokomotiven dieser Baureihen oft als 'Fer à repasser' (Bügeleisen) bezeichnet. Die BB 12125 gehört zu den sogenannten 'Französischen Krokodilen', ein Begriff, der auch für andere SNCF-Baureihen verwendet wird."
            },
            {image:"locomotive-4231459_1280.jpg",
             title:"ТУ10 (TU10)",
             alt:"Das Bild zeigt eine Lok der Baureihe ТУ10 (TU10)",
             description:"Das Bild zeigt eine Schmalspurdiesellokomotive des Typs TU10-002, die auf der Kleinen Moskauer Eisenbahn (Malaya Moskovskaya railway) eingesetzt wird. Diese Lokomotive ist speziell für den Betrieb auf Kindereisenbahnen konzipiert."
            },
            {image:"locomotive-7419624_1280.jpg",
             title:"Siemens Vectron BR 383",
             alt:"Das Bild zeigt eine Siemens Vectron Lok der Baureihe 383",
             description:"Das Bild zeigt eine Lokomotive des Typs Siemens Vectron mit der Betriebsnummer 383 415-7, die im Dienst von METRANS steht. METRANS ist ein führendes intermodales Eisenbahnverkehrsunternehmen in Mitteleuropa, das sich auf den Transport von Seecontainern und anderen Ladeeinheiten des kombinierten Verkehrs spezialisiert hat. Die METRANS Rail (Deutschland) GmbH ist eine 100%ige Tochtergesellschaft von METRANS und erbringt Traktionsleistungen auf dem deutschen Schienennetz. Die Lokomotiven des Typs Siemens Vectron sind moderne Elektrolokomotiven, die für den grenzüberschreitenden Güterverkehr in Europa konzipiert sind. "
            },
            {image:"railroad-8004014_1280.jpg",
             title:"EMD SD70MAC",
             alt:"Das Bild zeigt eine Lok der Baureihe EMD SD70MAC der Alaska Railroad ",
             description:"Bei der Lokomotive handelt es sich um eine EMD SD70MAC, ein Diesellokomotivmodell, das von Electro-Motive Diesel (EMD) hergestellt wurde. Dieses Modell ist bekannt für seine AC-Traktionsmotoren und wird häufig für den Güterverkehr eingesetzt. Die Alaska Railroad betreibt mehrere dieser Lokomotiven in ihrer charakteristischen blau-gelben Farbgebung."
            },
            {image:"railway-4999364_1280.jpg",
             title:"MSWY 1365",alt:"Das Bild zeigt eine Lok der Baureihe MSWY 1365 der Minnesota Southern Railway",
             description:"Das Bild zeigt die Diesellokomotive MSWY 1365 der Minnesota Southern Railway.Die Minnesota Southern Railway (MSWY) ist eine Kurzstreckenbahn, die in Luverne, Minnesota, beheimatet ist. Es handelt sich um eine Diesellokomotive, die für den Güterverkehr eingesetzt wird. "
            },
            {image:"spiez-3114336_1280.jpg",
             title:"DB 185",
             alt:"Das Bild zeigt eine Lok der Baureihe 185 der Deutschen Bahn ",
             description:"Es handelt sich um eine Elektrolokomotive der Baureihe 185 der Deutschen Bahn AG, die häufig im Güterverkehr eingesetzt wird. Der Betreiber ist die DB Cargo."
            },
            {image:"train-2467969_640.jpg",
             title:"Triebwagen der BZB",
             alt:"Das Bild zeigt einen Triebwagen der Bayerischen Zugspitzbahn Baureihe 12-16.",
             description:"Die Bayerische Zugspitzbahn, eine Zahnradbahn, die vom Garmisch-Partenkirchner Ortsteil Garmisch auf die Zugspitze, den höchsten Berg Deutschlands, führt."
            },
            {image:"train-5450300_1280.jpg",
             title:"ÖBB 1116",
             alt:"Das Bild zeigt eine Lok der Baureihe 1116 der Österreichischen Bundesbahnen",
             description:"Die ÖBB 1116 ist eine Elektrolokomotive der Österreichischen Bundesbahnen, auch bekannt als 'Taurus'. Sie ist eine vierachsige Universallokomotive, die von Siemens Transportation Systems und Krauss-Maffei entwickelt wurde."
            },
            {image:"train-5723095_1280.jpg",
             title:"EMD SD70ACe",
             alt:"Das Bild zeigt eine Lok der Baureihe EMD SD70ACe der Union Pacific Railroad",
             description:"Die Lokomotive im Bild ist eine SD70ACe, eine moderne Diesellokomotive, die von Electro-Motive Diesel (EMD) hergestellt wird. Sie gehört zur Union Pacific Railroad, eine der größten Güterbahngesellschaften in Nordamerika."
            },
            {image:"train-6760568_1280.jpg",
             title:"BR 99",
             alt:"Das Bild zeigt die Dampflokomotive 99 1772-5 der Fichtelbergbahn.",
             description:"Die Lokomotive im Bild ist die Dampflokomotive 99 1772-5. Sie wird oft im Zusammenhang mit der Fichtelbergbahn genannt und von der Sächsische Dampfeisenbahngesellschaft mbH (SDG) betrieben."
            },
            {image:"electric-locomotive-4096298_1280.jpg",
             title:"Siemens Vectron BR 193",
             alt:"Das Bild zeigt eine Lok der Baureihe 193 der 'PPD Transport'",
             description:"Der erste Vectron wurde im Jahr 2012 ausgeliefert. Der Betreiber der Lokomotive ist 'ELL' (European Locomotive Leasing), wie auf der Lokomotive durch das Logo und die Beschriftung 'enno ppd trans' (im Kontext von ELL-Lokomotiven, die an Betreiber wie enno vermietet werden) ersichtlich ist."
            }
];

/*
function getPhotos(){
    for (let index = 0; index < photos.length; index++) {
        const element = photos[index];
        console.log(element);
        
    }
}
*/

function renderPhotos(){
    let contentRef = document.getElementById('main_content');
   
    for (let index = 0; index < photo_collection.length; index++) {
        contentRef.innerHTML += getPhotoTemplate(index);
   
    }

}

function getPhotoTemplate(index) {
    //return `<img onclick="openDialog(${index})" id="${index}" class="photo" src="./assets/images/${photos[index]}" alt="">`;
    return `<figure id="image_wrapper-${index}" class="image_wrapper">
                <img onclick="openDialog(${index})" id="album_image-${index}" class="photo" src="./assets/images/${photo_collection[index].image}" alt="${photo_collection[index].alt}">
            </figure>`;
}
/*
function openDialog(element){
    console.log("ID: "+element.id);
}
*/

function renderDialog(index){
    let contentRef = document.getElementById("dialog_content");
    contentRef.innerHTML = `
                            <nav>
                                <button onclick="closeDialog()" id="closebutton" class="close_button dialog_button">Schließen</button>
                            </nav>
                            <h1>${photo_collection[index].title}</h1>
                            <figure id="image_wrapper" class="image_wrapper_dialog">
                                <img id="${index}" class="dialog_image" src="./assets/images/${photo_collection[index].image}" alt="${photo_collection[index].alt}">
                                <figcaption>${photo_collection[index].description}</figcaption>
                            </figure>
                            <nav id="dialog_footer" class="dialog_footer">
                                <button onclick="navigatePrevious(${index})" id="dialog_previous_button" class="dialog_button">
                                    Vorheriges Bid
                                </button>
                                <button onclick="navigateNext(${index})" id="dialog_next_button" class="dialog_button">
                                    Nächstes Bild
                                </button>
                            </nav>`;
    console.log(index);
}

function openDialog(index){
    let dialogRef = document.getElementById('dialog');
    dialogRef.classList.remove('d_none');
    renderDialog(index);
    console.log("HH");
    
}

function navigateNext(imageIndex) {
    if(imageIndex < photo_collection.length-1){
        imageIndex++;
        console.log('nextImage', imageIndex);
        renderDialog(imageIndex);
    }
}

function navigatePrevious(imageIndex) {
    if(imageIndex >=1){
        imageIndex--;
        console.log('nextImage', imageIndex);
        renderDialog(imageIndex);
    }
}

function closeDialog(){
    let dialogRef = document.getElementById('dialog');
    dialogRef.classList.add('d_none');
}
