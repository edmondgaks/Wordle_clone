document.addEventListener("DOMContentLoaded", () => {

    let guessedWords = [];
    let availableSpace = 1;

    const wordsToGuess = ['horse',
    'hotel',
    'house',
    'human',
    'ideal',
    'image',
    'index',
    'inner',
    'input',
    'issue',
    'japan',
    'joint',
    'jones',
    'judge',
    'known',
    'label',
    'large',
    'laser',
    'later',
    'laugh',
    'layer',
    'learn',
    'lease',
    'least',
    'leave',
    'legal',
    'level',
    'lewis',
    'light',
    'limit',
    'links',
    'lives',
    'local',
    'logic',
    'loose',
    'lower',
    'lucky',
    'lunch',
    'lying',
    'magic',
    'major',
    'maker',
    'march',
    'maria',
    'match',
    'maybe',
    'mayor',
    'meant',
    'media',
    'metal',
    'might',
    'minor',
    'minus',
    'mixed',
    'model',
    'money',
    'month',
    'moral',
    'motor',
    'mount',
    'mouse',
    'mouth',
    'movie',
    'music',
    'needs',
    'never',
    'newly',
    'night',
    'noise',
    'north',
    'noted',
    'novel',
    'nurse',
    'occur',
    'ocean',
    'offer',
    'often',
    'order',
    'other',
    'ought',
    'paint',
    'panel',
    'paper',
    'party',
    'peace',
    'peter',
    'phase',
    'phone',
    'photo',
    'piece',
    'pilot',
    'pitch',
    'place',
    'plain',
    'plane',
    'plant',
    'plate',
    'point',
    'pound',
    'power',
    'press',
    'price',
    'pride',
    'prime',
    'print',
    'prior',
    'prize',
    'proof',
    'proud',
    'prove',
    'queen',
    'quick',
    'quiet',
    'quite',
    'radio',
    'raise',
    'range',
    'rapid',
    'ratio',
    'reach',
    'ready',
    'refer',
    'right',
    'rival',
    'river',
    'robin',
    'roger',
    'roman',
    'rough',
    'round',
    'route',
    'royal',
    'rural',
    'scale',
    'scene',
    'scope',
    'score',
    'sense',
    'serve',
    'seven',
    'shall',
    'shape',
    'share',
    'sharp',
    'sheet',
    'shelf',
    'shell',
    'shift',
    'shirt',
    'shock',
    'shoot',
    'short',
    'shown',
    'sight',
    'since',
    'sixth',
    'sixty',
    'sized',
    'skill',
    'sleep',
    'slide',
    'small',
    'smart',
    'smile',
    'smith',
    'smoke',
    'solid',
    'solve',
    'sorry',
    'sound',
    'south',
    'space',
    'spare',
    'speak',
    'speed',
    'spend',
    'spent',
    'split',
    'spoke',
    'sport',
    'staff',
    'stage',
    'stake',
    'stand',
    'start',
    'state',
    'steam',
    'steel',
    'stick',
    'still',
    'stock',
    'stone',
    'stood',
    'store',
    'storm',
    'story',
    'strip',
    'stuck',
    'study',
    'stuff',
    'style',
    'sugar',
    'suite',
    'super',
    'sweet',
    'table',
    'taken',
    'taste',
    'taxes',
    'teach',
    'teeth',
    'terry',
    'texas',
    'thank',
    'theft',
    'their',
    'theme',
    'there',
    'these',
    'thick',
    'thing',
    'think',
    'third',
    'those',
    'three',
    'threw',
    'throw',
    'tight',
    'times',
    'tired',
    'title',
    'today',
    'topic',
    'total',
    'touch',
    'tough',
    'tower',
    'track',
    'trade',
    'train',
    'treat',
    'trend',
    'trial',
    'tried',
    'tries',
    'truck',
    'truly',
    'trust',
    'truth',
    'twice',
    'under',
    'undue',
    'union',
    'unity',
    'until',
    'upper',
    'upset',
    'urban',
    'usage',
    'usual',
    'valid',
    'value',
    'video',
    'virus',
    'visit',
    'vital',
    'voice',
    'waste',
    'watch',
    'water',
    'wheel',
    'where',
    'which',
    'while',
    'white',
    'whole',
    'whose',
    'woman',
    'women',
    'world',
    'worry',
    'worse',
    'worst',
    'worth',
    'would',
    'wound',
    'write',
    'wrong',
    'wrote',
    'yield',
    'young',
    'youth',
    ];

   
    let num = Math.round(Math.random() * wordsToGuess.length);
    

    let wordToGuess = wordsToGuess[num].toUpperCase();
    console.log(wordToGuess);

    var height = 6;
    var width = 5;
    var row = 0;
    var col = 0;
    var gameOver = false;


    
    const keys = document.querySelectorAll(".keyboard-row button");
    console.log(keys);
    // const squares = document.querySelectorAll(".square");
    // console.log(squares);


    function createSquares() {
        const boxes = document.getElementById("boxes");

        for (let i = 0; i<height; i++) {
            for (let j = 0; j < width; j++) {
                let square = document.createElement("div");
                square.id = i.toString() + "-"+ j.toString();
                square.setAttribute("class", "text-white border white font-bold h-32 justify-center items-center text-2xl text-center");
                boxes.appendChild(square);
            }
        }
        let keyboard = [
            ["Q","W","E","R","T","Y","U","I","O","P"],
            ["A","S","D","F","G","H","J","K","L",""],
            ["Enter","Z","X","C","V","B","N","M","<"],
        ]

        for (let i=0;i <keyboard.length; i++) {
            let currRow = keyboard[i];
            let keyboardRow = document.createElement("div");
            keyboardRow.classList.add("keyboard-row");

            for (j=0;j<currRow.length; j++) {
                let keyTile = document.createElement("div");
                let key = currRow[j];
                // key.classList.add("background-wanted");
                keyTile.innerText = key;
                if (key == "Enter") {
                    keyTile.id = "Enter";
                } else if(key == "<") {
                    keyTile.id = "Backspace";
                } else if("A" <= key && key <= "Z") {
                    keyTile.id = "Key"+ key;
                }
                keyTile.addEventListener("click", processKey);

                if(key == "Enter") {
                    keyTile.classList.add("enter-key-tile");
                } else {
                    keyTile.classList.add("key-tile");
                }
                keyboardRow.appendChild(keyTile);
            }
            document.body.appendChild(keyboardRow)
        }
    }

    createSquares();


    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
    function processInput(e) {
        if (gameOver) return;

        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if(col < width) {
                let currSquare = document.getElementById(row.toString() + "-"+col.toString());
                if (currSquare.innerText == "") {
                    currSquare.innerText = e.code[3];
                    col += 1;
                }
            }
        }
        else if (e.code == "Backspace") {
            if (0 < col && col<= width ) {
                col -=1;
            }
            let currSquare = document.getElementById(row.toString() + "-"+col.toString());
            currSquare.innerText = "";
        }
        else if (e.code == "Enter") {
            // let currSquare = document.getElementById(row.toString() + "-"+col.toString());
            // console.log(currSquare);
            update();
            
        }
        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = wordToGuess;
        }
    }

    function processKey() {
        let e = {"code": this.id};
        processInput(e);
    }
    function update() {

        let guess = "";
        
        document.getElementById("answer").innerText = "";

        for (let c=0; c<width; c++) {
            let currTile = document.getElementById(row.toString()+ "-"+ c.toString());
            let letter = currTile.innerText;
            guess += letter;
        }
        guess = guess.toLowerCase();
        if(!wordsToGuess.includes(guess)) {
            document.getElementById("answer").innerText = "Not in Words list";
            return;
        } 
 
        let correct = 0;
        let letterCount = {};
        for (let i =0; i<wordToGuess.length; i++) {
            letter = wordToGuess[i];
            if (letterCount[letter]) {
                letterCount[letter] += 1;
            } else {
                letterCount[letter] = 1;
            }
        }

        for (let c = 0; c <width;c++) {
            let currSquare = document.getElementById(row.toString() + "-"+c.toString());
            currSquare.setAttribute("class","animate__flipOutX text-white border white font-bold justify-center items-center text-2xl text-center");
            // console.log(currSquare)
            const currSquareLocal = JSON.stringify({currSquare});
            window.localStorage.setItem("CurrentSquare",currSquareLocal);
            let letter = currSquare.innerText;
            // console.log(letter)
            if (wordToGuess.charAt(c) == letter) {
                currSquare.classList.add("red");
                let keyTile = document.getElementById("Key"+ letter);
                // console.log(keyTile);
                keyTile?.classList.remove("green") ;
                // keyTile?.classList.add("red");
                keyTile.setAttribute("style","background-color: rgb(34 197 94);")
                correct +=1;
                letterCount[letter] -= 1;
            } else if (wordToGuess.includes(letter)) {
                let keyTile = document.getElementById("Key"+ letter);
                // console.log(keyTile)
                // keyTile?.classList.add("green");
                keyTile.setAttribute("style","background-color: rgb(245 158 11);")
                // currSquare.classList.add("bg-yellow-500");
                currSquare.classList.add("green");
            }
            if (correct == width) {
                gameOver = true;
            }
        }

        for (let c = 0; c <width;c++) {
            let currSquare = document.getElementById(row.toString() + "-"+c.toString());
            let letter = currSquare.innerText;
            if(!currSquare.classList.contains("red")) {
                if (wordToGuess.charAt(c)=== letter  && letterCount[letter] > 0) {
                    currSquare.classList.add("green");
                    let keyTile = document.getElementById("Key"+letter);
                    if(!keyTile.classList.contains("red")) {
                        keyTile.classList.add("green");
                    }
                    keyTile.classList.add("red");
                    letterCount[letter] -=1;
                }  else {
                    currSquare.classList.add("bg-stone-500");

                }
            }
        }
        row += 1;
        col = 0;
    }


    const localSt = JSON.stringify({wordToGuess});
    window.localStorage.setItem('WordToGuess',localSt);



})
