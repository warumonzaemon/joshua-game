// This is for the instructions button that will pop up if clicked in the center of the page
let instructionBtn = document.querySelector('.instructions-button');
let instructionBg = document.querySelector('.instructions-bg');
let instructionCloseBtn = document.querySelector('.close-button-instructions');

/* If instructions button is clicked, A small box or modal will pop up in the center with the set of instructions of how
to play this game */

    instructionBtn.addEventListener('click', function(){
        instructionBg.classList.add('instructions-bg-active');
    });

// This button will close the instructions pop-up modal
    instructionCloseBtn.addEventListener('click', function(){
        instructionBg.classList.remove('instructions-bg-active');
    });



// This is for the start-game button that will pop up two buttons which is 'Yes' or 'No'
let gameStartBtn = document.querySelector('.start-game');
let gameStartBg = document.querySelector('.start-game-bg');
let gameCloseBtn = document.querySelector('.close-button-game');

/* If Start the game button is clicked, A small box or modal will pop up in the center asking if you 
want to play the game or no */
    gameStartBtn.addEventListener('click', function() {
        gameStartBg.classList.add('start-game-bg-active');
        // playOpeningAudio();
       
    });

// We're getting the yes and no button work
    let startGameYes = document.querySelector('.yes')
    let startGameNo = document.querySelector('.no');


// This button will close the small box or pop-up modal.
    gameCloseBtn.addEventListener('click', function() {
        gameStartBg.classList.remove('start-game-bg-active');
 
    });

// This button will refresh the page making the game back to zero
    let restartGameBtn = document.querySelector('.restart-game');
        restartGameBtn.addEventListener('click', function() {
            location.reload();
        })


// This is the close button for 'Choose' buttons
let chooseBtnClose = document.querySelector('.close-button-choose');


// sound effects
let soundEffect = new Audio('./mp3/mario-coin.mp3');
let peraKahonSound = new Audio('./mp3/pera-o-kahon-wil-shout.mp3');
let siguradoPoBaKayo = new Audio('./mp3/sigurado-po-ba-kayo.mp3');
let twoHundredThousandMax = new Audio('./mp3/twohundredthousand.mp3');
let wowowin = new Audio('./mp3/wowowin-credits.mp3');


//  Fisher–Yates Shuffle - This function will automatically shuffle the prizes inside the box
function shuffleArray (array) {

    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

// This array contains the prizes inside of our boxes. These are getting randomized every reset of the game
let prizes = ['₱1', '₱5', '₱10', 'BOKYA', '₱50', '₱100', '₱200', 'House & Lot', 'One Million Pesos', 'Mega Jackpot'];

// let prizes = ['bokya', 'bokya', 'bokya', 'bokya', 'bokya', 'bokya', 'bokya', 'House & Lot', 'One Million Pesos', 'Mega Jackpot'];

// let prizes = ['BOKYA', 'BOKYA', 'BOKYA', 'BOKYA', 'BOKYA', 'BOKYA', 'BOKYA', 'House & Lot', 'One Million Pesos', 'Mega Jackpot'];

// We're passing the randomized prizes in the randomizePrizes variable
let randomizePrizes = shuffleArray(prizes);


// colors of array;
let boxColors = ['yellow', 'yellowgreen', 'green', 'teal', 'blue', 'blueviolet', 'violet', 'redviolet', 'red', 'yelloworange'];
let peraKahonContainer = document.querySelector('.pera-kahon-container');



// openCount gives us a limit of 3 button click, any button. Then the fourth one will ask for prompt and the real game starts
let openCount = 0;

// These variables here for consolation prize, each consolation prize increments randomly depends on the prize that box contains
let consolationPrizeCount = 10000;
let consolationPrizeMegaJackpot = Math.floor((Math.random() * 20000) + 10000);
let consolationPrizeHouseAndLot = Math.floor((Math.random() * 15000) + 1000);
let consolationPrizeOneMillionPesos = Math.floor((Math.random() * 10000) + 200);
let consolationPrizeIncrementor = Math.floor((Math.random() * 8500) + 500);


// These variables here are for counting how many times did you clicked the btnKahon or btnPera
let btnKahonCount = 0;
let btnPeraCount = 0;


// Thanks to Sir JC for helping me about this, instead of manually doing the boxes on HTML. He suggested to implement to make multiple boxes using for loop
    for (let i = 0; i < boxColors.length; i++) {
        let colorContainer = document.createElement('div');
        colorContainer.classList.add('box', `bg-${boxColors[i]}`);
        colorContainer.style.position = 'relative';
        colorContainer.style.padding = '10px';
        colorContainer.style.boxShadow = '5px 10px 5px 2px';
     

        let txtPrize = document.createElement('p');
        txtPrize.textContent = randomizePrizes[i];
        txtPrize.style.position = 'absolute';
        txtPrize.style.width = '90%';
        txtPrize.style.backgroundColor = 'white';
        txtPrize.style.display = 'none';

        let imgBox = document.createElement('img');
        imgBox.setAttribute('src', './assets/box.png');

        let btnOpen = document.createElement('button');
        btnOpen.textContent = 'OPEN';
        btnOpen.style.color = 'rgb(36,84,202)';
        btnOpen.style.fontWeight = 'bold';
        btnOpen.style.borderRadius = '10px';
        btnOpen.style.backgroundColor = 'black';
        btnOpen.style.color = 'white';
        btnOpen.style.display = 'none';
        
        /* If the button clicked was yes, it will close the small box or pop-up modal and will enable our buttons for each boxes. */
        startGameYes.addEventListener('click', function() {
            gameStartBg.classList.remove('start-game-bg-active');
            btnOpen.textContent = 'OPEN';
            btnOpen.style.color = 'rgb(36,84,202)';
            btnOpen.style.fontWeight = 'bold';
            btnOpen.style.borderRadius = '10px';
            btnOpen.style.backgroundColor = 'black';
            btnOpen.style.color = 'white'
            btnOpen.style.display = 'flex';
            btnOpen.style.justifyContent = 'center';
            
        });


        /* If the button clicked was no, it will just close the small box or pop-up modal. 
        The function is the same with gameCloseBtn below */
        startGameNo.addEventListener('click', function() {
            gameStartBg.classList.remove('start-game-bg-active');
            instructionBg.classList.add('instructions-bg-active');
            
        });

        colorContainer.appendChild(txtPrize);
        colorContainer.appendChild(imgBox);
        colorContainer.appendChild(btnOpen);
        peraKahonContainer.appendChild(colorContainer);

        
        btnOpen.addEventListener('click', function() {
            openCount++;
            
            if (openCount <= 3) {
                soundEffect.pause();
                soundEffect.currentTime = 0;
                soundEffect.play();
                txtPrize.style.height = '67%';
                txtPrize.style.width = '70%';
                txtPrize.style.marginBottom = '37px';
                txtPrize.style.borderRadius = '10px';
                txtPrize.style.border = '6px solid black';
                txtPrize.style.display = 'flex';
                txtPrize.style.flexDirection = 'column';
                txtPrize.style.justifyContent = 'center';
                txtPrize.style.alignItems = 'center'
                txtPrize.style.fontSize = '27px';
                txtPrize.style.textAlign = 'center';
                txtPrize.style.textTransform = 'uppercase';
                txtPrize.style.fontWeight = 'bold';
                btnOpen.style.textTransform = 'uppercase';
                btnOpen.style.backgroundColor = 'red';
                btnOpen.textContent = 'Eliminated'; 
                btnOpen.disabled = true;
                gameStartBtn = gameStartBtn.disabled = true;
                
          // If btnOpen is >=4, then the actual pera or kahon game starts
            } else if (openCount >= 4) {
                alert('This is the last box you can choose to win any of our 3 main prizes!\n\nPwede ka pang pumili ng ibang box, pero pag nagstart na ka nag mag pera or kahon. Your game starts!\n\nPro tip: Kung ano isinisigaw ng puso mo, sundin mo!')
                peraKahonSound.pause();
                peraKahonSound.currentTime = 0;
                peraKahonSound.play();

                // starting offer
                txtPrize.style.display = 'none';
                btnOpen.textContent = 'OPEN'; 
                btnOpen.style.backgroundColor = 'black';
                btnOpen.disabled = false;
                imgBox.setAttribute('src', './assets/box.png');
                colorContainer.style.backgroundColor = 'null';
                
                // creating html elements with css for pera or kahon questions
                let chooseModalBg = document.createElement('div');
                let chooseModal = document.createElement('div');
                let hostQuestion = document.createElement('h1');
                let currentOffer = document.createElement('h1');
                let offerMoney = document.createElement('h1');
              

                let btnPeraKahonContainer = document.createElement('div');
                let btnPera = document.createElement('button');
                let btnKahon = document.createElement('button');

                let restartGameContainer = document.createElement('div');
                let restartGameBtnInsideModal = document.createElement('button');

                // The same style of modal of 'start game button' we also passed it to our pera or kahon, restart button containers
                chooseModalBg.classList.add('btn-choose-bg', 'btn-choose-bg-active');
                chooseModal.classList.add('btn-choose-modal');

                offerMoney.style.fontSize = '100px';
                offerMoney.style.width = '100%';
                offerMoney.style.display = 'flex';
                offerMoney.style.justifyContent = 'center';
                offerMoney.style.alignItems = 'center';


                btnPeraKahonContainer.classList.add('btn-pera-kahon-container');
                restartGameContainer.classList.add('btn-pera-kahon-container');
                restartGameContainer.style.position = 'relative';
                restartGameContainer.style.bottom = '130px';
                
                // This are the text asking the user to choose between Pera o Kahon? 
                hostQuestion.textContent = 'PERA O KAHON?'
                currentOffer.textContent = 'CURRENT OFFER:'
                offerMoney.textContent = `₱${consolationPrizeCount}`;
                offerMoney.style.color = 'gold';

                        // This function makes our consolation prize blinking.
                        let blinkOfferMoney = offerMoney;
                        setInterval(function () {
                            blinkOfferMoney.style.opacity = 
                            (blinkOfferMoney.style.opacity == 0 ? 1 : 0);
                        }, 300); 


                // These are your button options, PERA O KAHON?
                btnPera.textContent = 'Pera';
                btnKahon.textContent = 'Kahon';
                restartGameBtnInsideModal.textContent = 'Restart';

                let chooseBtnClose = document.createElement('span');
                chooseBtnClose.classList.add('close-button-choose');
                chooseBtnClose.textContent = 'X';
                chooseBtnClose.style.fontWeight = 'bold';

                // Adding styles to our button options
                btnPera.classList.add('btn-pera-kahon');
                btnKahon.classList.add('btn-pera-kahon');
                restartGameBtnInsideModal.classList.add('btn-pera-kahon');
                
                chooseModalBg.appendChild(chooseModal);
                chooseModal.appendChild(currentOffer); 
                chooseModal.appendChild(offerMoney);
                chooseModal.appendChild(hostQuestion);
                chooseModal.appendChild(btnPeraKahonContainer);
                chooseModal.appendChild(restartGameContainer);
                chooseModal.appendChild(chooseBtnClose);
                btnPeraKahonContainer.appendChild(btnPera);
                btnPeraKahonContainer.appendChild(btnKahon);
                btnPeraKahonContainer.appendChild(restartGameBtnInsideModal);
               
                document.body.appendChild(chooseModalBg);

                // restart game inside the modal of pera or kahon
                restartGameBtnInsideModal.addEventListener('click', function() {
                    location.reload();
                })
                // close the modal, giving you a chance to choose another box
                 chooseBtnClose.addEventListener('click', function (){
                    chooseModalBg.classList.remove('btn-choose-bg-active');
                });

                // If btnKahon is chosen, this is what will happen
                btnKahon.addEventListener('click', function () {
                    openCount++;
                    btnKahonCount++;
                    console.log(btnKahonCount++);
                    // Comments by sir JC, add dynamic consolation prizing when the prize is Mega Jackpot, House & Lot, One Million Pesos

                    if (consolationPrizeCount < 100000 && prizes[i] === 'Mega Jackpot') {
                    chooseBtnClose.style.display = 'none';
                    alert(`Dahil pinili mo ang kahon, heto na ang ₱${consolationPrizeCount += consolationPrizeMegaJackpot}.\nKunin mo na to!`);
                    hostQuestion.textContent = 'PERA O KAHON?'
                    currentOffer.textContent = `CURRENT OFFER:`;
                    offerMoney.textContent = `₱${consolationPrizeCount += consolationPrizeMegaJackpot}`;
                    offerMoney.style.color = 'gold';   
                    offerMoney.style.fontSize = '100px';
                    offerMoney.style.width = '100%';
                    offerMoney.style.display = 'flex';
                    offerMoney.style.justifyContent = 'center';
                    offerMoney.style.alignItems = 'center';
                    peraKahonSound.pause();
                    peraKahonSound.currentTime = 0;
                    peraKahonSound.play();
                        
                    } else if (consolationPrizeCount < 100000 && prizes[i] === 'House & Lot') {
                        chooseBtnClose.style.display = 'none';
                        alert(`Dahil pinili mo ang kahon, heto na ang ₱${consolationPrizeCount += consolationPrizeHouseAndLot}.\nKunin mo na to!`);
                        hostQuestion.textContent = 'PERA O KAHON?'
                        currentOffer.textContent = `CURRENT OFFER:`;
                        offerMoney.textContent = `₱${consolationPrizeCount}`;
                        offerMoney.style.color = 'gold';   
                        offerMoney.style.fontSize = '100px';
                        offerMoney.style.width = '100%';
                        offerMoney.style.display = 'flex';
                        offerMoney.style.justifyContent = 'center';
                        offerMoney.style.alignItems = 'center';
                        openCount++;
                        btnKahonCount++;
                        peraKahonSound.pause();
                        peraKahonSound.currentTime = 0;
                        peraKahonSound.play();
                      
                    } else if (consolationPrizeCount < 100000 && prizes[i] === 'One Million Pesos') {
                        chooseBtnClose.style.display = 'none';
                        alert(`Dahil pinili mo ang kahon, heto na ang ₱${consolationPrizeCount += consolationPrizeOneMillionPesos}.\nKunin mo na to!`);
                        hostQuestion.textContent = 'PERA O KAHON?'
                        currentOffer.textContent = `CURRENT OFFER:`;
                        offerMoney.textContent = `₱${consolationPrizeCount}`;
                        offerMoney.style.color = 'gold';   
                        offerMoney.style.fontSize = '100px';
                        offerMoney.style.width = '100%';
                        offerMoney.style.display = 'flex';
                        offerMoney.style.justifyContent = 'center';
                        offerMoney.style.alignItems = 'center';
                        peraKahonSound.pause();
                        peraKahonSound.currentTime = 0;
                        peraKahonSound.play();
                        
                    } else {
                        chooseBtnClose.style.display = 'none';
                        openCount++;
                        btnKahonCount++;
                        alert(`Dahil pinili mo ang kahon, heto na ang ₱${consolationPrizeCount += consolationPrizeIncrementor}.\nKunin mo na to!`);
                        hostQuestion.textContent = 'PERA O KAHON?'
                        currentOffer.textContent = `CURRENT OFFER:`;
                        offerMoney.textContent = `₱${consolationPrizeCount}`;
                        offerMoney.style.color = 'gold';   
                        offerMoney.style.fontSize = '100px';
                        offerMoney.style.width = '100%';
                        offerMoney.style.display = 'flex';
                        offerMoney.style.justifyContent = 'center';
                        offerMoney.style.alignItems = 'center';
                        peraKahonSound.pause();
                        peraKahonSound.currentTime = 0;
                        peraKahonSound.play();
                    } 
                    
                    if (consolationPrizeCount > 100000 && consolationPrizeCount <= 200000) {
     
                    chooseBtnClose.style.display = 'none';
                    console.log(openCount);
                    openCount++;
                    btnKahonCount++;
                    alert = function(){};
                    currentOffer.textContent = 'LAST OFFER:'
                    offerMoney.textContent = `₱${consolationPrizeCount += 100000}`;
                    hostQuestion.textContent = 'PERA O KAHON?';
                    offerMoney.style.color = 'gold';   
                    offerMoney.style.fontSize = '100px';
                    offerMoney.style.width = '100%';
                    offerMoney.style.display = 'flex';
                    offerMoney.style.justifyContent = 'center';
                    offerMoney.style.alignItems = 'center';
                    twoHundredThousandMax.pause();
                    twoHundredThousandMax.currentTime = 0;
                    twoHundredThousandMax.play();
                        
                    }  
                    else if (consolationPrizeCount >= 200000 ) {              
                        chooseBtnClose.style.display = 'inherit';
                        chooseModal.style.width = '80%';
                        hostQuestion.style.display = 'none';
                        currentOffer.style.display = 'none';
                        hostQuestion.textContent = 'PERA O KAHON?';
                        currentOffer.textContent = 'CURRENT OFFER:';
                        offerMoney.style.color = 'gold';   
                        offerMoney.style.fontSize = '100px';
                        offerMoney.style.width = '100%';
                        offerMoney.style.display = 'flex';
                        offerMoney.style.justifyContent = 'center';
                        offerMoney.style.alignItems = 'center';
                        offerMoney.style.textTransform = 'uppercase';
                        offerMoney.innerHTML = `Ang laman ng kahon ay ${prizes[i]}!`;
                        txtPrize.style.height = '67%';
                        txtPrize.style.width = '70%';
                        txtPrize.style.marginBottom = '37px';
                        txtPrize.style.borderRadius = '10px';
                        txtPrize.style.border = '6px solid black';
                        txtPrize.style.display = 'flex';
                        txtPrize.style.flexDirection = 'column';
                        txtPrize.style.justifyContent = 'center';
                        txtPrize.style.alignItems = 'center'
                        txtPrize.style.fontSize = '27px';
                        txtPrize.style.textAlign = 'center';
                        txtPrize.style.textTransform = 'uppercase';
                        txtPrize.style.fontWeight = 'bold';
                        txtPrize.style.backgroundColor = 'gold';
                        btnOpen.textContent = 'Opened';
                        btnOpen.disabled = true;
                        wowowin.pause();
                        wowowin.currentTime = 0;
                        wowowin.play();         
                    }
                });
                
                // If you choose Pera button, this is what will happen
                btnPera.addEventListener('click', function() {
                    btnPeraCount++;
                    let confirmYesOrNoModalBg = document.createElement('div');
                    let confirmYesOrNoModal = document.createElement('div');
                    let lastQuestion = document.createElement('h1');
                    let lastAnotherQuestion = document.createElement('h2');
                    let btnConfirmContainer = document.createElement('div');

                    lastQuestion.innerHTML = `₱${consolationPrizeCount} CASH!`
                    lastQuestion.style.display = 'flex';
                    lastQuestion.style.justifyContent = 'center';
                    lastQuestion.style.textAlign = 'center';
                    lastQuestion.style.textTransform = 'uppercase';
                    lastQuestion.style.fontSize = '50px';
                    lastQuestion.style.color = 'gold';
                    
                    lastAnotherQuestion.innerHTML = 'Sigurado po ba kayo??!?!?!!';
                    siguradoPoBaKayo.pause();
                    siguradoPoBaKayo.currentTime = 0;
                    siguradoPoBaKayo.play();
                    lastAnotherQuestion.style.display = 'flex';
                    lastAnotherQuestion.style.justifyContent = 'center';
                    lastAnotherQuestion.style.textAlign = 'center';
                    lastAnotherQuestion.style.fontSize = '45px';
                    lastAnotherQuestion.style.textTransform = 'uppercase';
                    

                    let btnConfirmYes = document.createElement('button');
                    let btnConfirmNo = document.createElement('button');


                    btnConfirmYes.textContent = 'OPO KUYA WEL';
                    btnConfirmNo.textContent = 'KAHON PA RIN PO KUYA WEL';
                    btnConfirmYes.style.fontSize = '30px';
                    btnConfirmNo.style.fontSize = '30px';
    

                    btnConfirmYes.style.width = '50%';
                    btnConfirmYes.style.borderRadius = '10px';
                    btnConfirmYes.style.backgroundColor = 'black';
                    btnConfirmYes.style.color = 'white';
                    btnConfirmYes.style.textAlign = 'center';
                    btnConfirmYes.style.display = 'flex';
                    btnConfirmYes.style.marginRight = '20px';

                    btnConfirmNo.style.width = '50%;';
                    btnConfirmNo.style.borderRadius = '10px';
                    btnConfirmNo.style.backgroundColor = 'black';
                    btnConfirmNo.style.color = 'white';
                    btnConfirmNo.style.display = 'flex';
                    btnConfirmNo.style.textAlign = 'center';

                    confirmYesOrNoModalBg.classList.add('btn-choose-bg', 'btn-choose-bg-active');
                    confirmYesOrNoModal.classList.add('btn-confirmation-modal');
                    btnConfirmContainer.style.width = '80%';
                    btnConfirmContainer.style.display = 'flex';
                    btnConfirmContainer.style.justifyContent = 'space-evenly';


                    confirmYesOrNoModalBg.appendChild(confirmYesOrNoModal); 
                    confirmYesOrNoModal.appendChild(lastQuestion);
                    confirmYesOrNoModal.appendChild(lastAnotherQuestion);
                    confirmYesOrNoModal.appendChild(btnConfirmContainer);
                    btnConfirmContainer.appendChild(btnConfirmYes);
                    btnConfirmContainer.appendChild(btnConfirmNo);
                    document.body.appendChild(confirmYesOrNoModalBg);


                    /*  After clicking Pera button, there will be a prompt letting you confirm your decision. I did this if the player accidentaly misclicks pera.
                      If the user choose 'OPO KUYA WEL', then the user will get the money*/
                    btnConfirmYes.addEventListener('click', function(){
                            wowowin.pause();
                            wowowin.currentTime = 0;
                            wowowin.play();
                        if ((prizes[i] === 'Mega Jackpot') || (prizes[i] === 'House & Lot') || (prizes[i] === 'One Million Pesos') && (prizes[i] !== '₱1' && '₱5' && '₱10' && '₱15' && '₱20' && '₱50' && '₱100' && '₱200')) {
                            console.log(wowowin);
                            confirmYesOrNoModalBg.classList.remove('btn-choose-bg-active');
                            confirmYesOrNoModal.classList.remove('btn-confirmation-modal');
                            chooseBtnClose.style.display = 'inherit';
                            restartGameBtnInsideModal.style.display = 'none';
                            currentOffer.style.display = 'none';
                            hostQuestion.style.display = 'none';
                            btnPera.style.display = 'none';
                            btnKahon.style.display = 'none';
                            chooseModal.style.width = '50%';
                            offerMoney.style.width = '100%';
                            offerMoney.style.display = 'flex';
                            offerMoney.style.justifyContent = 'center';
                            offerMoney.style.alignItems = 'center';
                            offerMoney.style.textAlign = 'center';
                            offerMoney.style.fontSize = '50px';
                            offerMoney.style.textTransform = 'uppercase';
                            txtPrize.style.height = '67%';
                            txtPrize.style.width = '70%';
                            txtPrize.style.marginBottom = '37px';
                            txtPrize.style.borderRadius = '10px';
                            txtPrize.style.border = '6px solid black';
                            txtPrize.style.display = 'flex';
                            txtPrize.style.flexDirection = 'column';
                            txtPrize.style.justifyContent = 'center';
                            txtPrize.style.alignItems = 'center'
                            txtPrize.style.fontSize = '27px';
                            txtPrize.style.textAlign = 'center';
                            txtPrize.style.textTransform = 'uppercase';
                            txtPrize.style.fontWeight = 'bold';
                            txtPrize.style.backgroundColor = 'gold';   
                            btnOpen.textContent = 'Opened';
                            btnOpen.disabled = true;
                            offerMoney.innerHTML = `Pambihira! <br> Pinagpalit mo yung <br>${prizes[i]} sa ₱${consolationPrizeCount} `;
                        } else {
                            wowowin.pause();
                            wowowin.currentTime = 0;
                            wowowin.play();
                            confirmYesOrNoModalBg.classList.remove('btn-choose-bg-active');
                            confirmYesOrNoModal.classList.remove('btn-confirmation-modal');
                            chooseBtnClose.style.display = 'inherit';
                            restartGameBtnInsideModal.style.display = 'none';
                            currentOffer.style.display = 'none';
                            hostQuestion.style.display = 'none';
                            btnPera.style.display = 'none';
                            btnKahon.style.display = 'none';
                            chooseModal.style.width = '50%';
                            offerMoney.style.width = '100%';
                            offerMoney.style.display = 'flex';
                            offerMoney.style.justifyContent = 'center';
                            offerMoney.style.alignItems = 'center';
                            offerMoney.style.textAlign = 'center';
                            offerMoney.style.fontSize = '50px';
                            offerMoney.style.textTransform = 'uppercase';
                            txtPrize.style.height = '67%';
                            txtPrize.style.width = '70%';
                            txtPrize.style.marginBottom = '37px';
                            txtPrize.style.borderRadius = '10px';
                            txtPrize.style.border = '6px solid black';
                            txtPrize.style.display = 'flex';
                            txtPrize.style.flexDirection = 'column';
                            txtPrize.style.justifyContent = 'center';
                            txtPrize.style.alignItems = 'center'
                            txtPrize.style.fontSize = '27px';
                            txtPrize.style.textAlign = 'center';
                            txtPrize.style.textTransform = 'uppercase';
                            txtPrize.style.fontWeight = 'bold';
                            txtPrize.style.backgroundColor = 'gold';   
                            btnOpen.textContent = 'Opened';
                            btnOpen.disabled = true;
                            offerMoney.innerHTML = `Congratulations!! <br> Nanalo ka ng ₱${consolationPrizeCount}! <br> Ang laman ng kahon mo ay ${prizes[i]}!!!.`;
                        }
                    });
                    /*  After clicking Pera button, there will be a prompt letting you confirm your decision. I did this if the player accidentaly misclicks pera.
                      If the user choose 'KAHON', then the user will get the money*/
                    btnConfirmNo.addEventListener('click', function (){
                        confirmYesOrNoModalBg.classList.remove('btn-choose-bg-active');
                        confirmYesOrNoModal.classList.remove('btn-confirmation-modal');
                        peraKahonSound.pause();
                        peraKahonSound.currentTime = 0;
                        peraKahonSound.play();
                        
                    });
                 });  
             } 
         });
     }








        







