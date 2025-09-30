let photos =[
            "ai-generated-8006921_1280.jpg",
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
];

function getPhotos(){
    for (let index = 0; index < photos.length; index++) {
        const element = photos[index];
        console.log(element);
        
    }
}

function renderPhotos(){
    let contentRef = document.getElementById('main_content');
   
    for (let index = 0; index < photos.length; index++) {
        contentRef.innerHTML += getPhotoTemplate(index);
   
    }

}

function getPhotoTemplate(index) {
    return `<img onclick="openDialog(${index})" id="${index}" class="photo" src="./assets/images/${photos[index]}" alt="">`;
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
                                <button onclick="closeDialog()" id="closebutton class="closebutton">X</button>
                            </nav>
                            <h2>Der Dialog !!</h2>
                            <figure id="image_wrapper">
                                <img id="${index}" class="dialog_image" src="./assets/images/${photos[index]}" alt="">
                            </figure>
                            <nav>
                                <button onclick="navigatePrevious(${index})">
                                    Prev
                                </button>
                                <button onclick="navigateNext(${index})">
                                    next
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
    if(imageIndex < photos.length-1){
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
