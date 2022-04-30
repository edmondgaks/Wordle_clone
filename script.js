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
    console.log(keys)
    // const squares = document.querySelectorAll(".square");
    // console.log(squares);


    function createSquares() {
        const boxes = document.getElementById("boxes");

        for (let i = 0; i<height; i++) {
            for (let j = 0; j < width; j++) {
                let square = document.createElement("div");
                square.id = i.toString() + "-"+ j.toString();
                square.setAttribute("class", "text-white border white font-bold justify-center items-center");
                boxes.appendChild(square);
            }
        }
    }
    createSquares();

    document.addEventListener("keyup", (e) => {
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
            update();
            row += 1;
            col = 0;
        }
        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = wordToGuess;
        }
    })

    function update() {
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
        // first iteration, check all correct ones
        for (let c = 0; c <width;c++) {
            let currSquare = document.getElementById(row.toString() + "-"+c.toString());
            let letter = currSquare.innerText;
            if (wordToGuess.charAt(c)=== letter) {
                currSquare.classList.add("red");
                correct +=1;
                letterCount[letter] -= 1;
            } 
            if (correct == width) {
                gameOver = true;
            }
        }

        // go again and mark which ones are present 
        for (let c = 0; c <width;c++) {
            let currSquare = document.getElementById(row.toString() + "-"+c.toString());
            let letter = currSquare.innerText;
            if(!currSquare.classList.contains("red")) {
                if (wordToGuess.charAt(c)=== letter  && letterCount[letter] > 0) {
                    currSquare.classList.add("red");
                    letterCount[letter] -=1;
                }  else {
                    currSquare.classList.add("bg-stone-500");

                }
            }
        }
    }




})


//     const keys = document.querySelectorAll(".keyboard-row button");
//     // console.log(keys)
//     const squares = document.querySelectorAll(".square");
//     // console.log(squares);
//     let rows = 5
//     let start = 0
//     const getKey = (e)=>{
//         const keyName = e.key;
//         console.log(`${keyName} is pressed`);
//         if (keyName === 13) {
//             start += 5
//             rows += 5
//         }
//         // console.log(keyName, start, rows);
//     }
//    document.addEventListener('keydown', getKey)

//    let fullWord = [];

//    let prettyArr = [];

//     for (let i = 0; i < keys.length; i++) {
//         keys[i].onclick = ({target}) => {
//             const letter = target.getAttribute("data-key");
//             console.log(letter);
//             fullWord = userword.push(letter);
//             // squares[i].textContent = letter
//             console.log(userword);

//             // for (let j = start; j <rows;j++) {
//             //     squares[j].textContent = userword[j]
//             // }
//             prettyArr = userword.slice(0,5).join("");
//             console.log(prettyArr)
//         }
        
//     }

//     function checking() {
//         if (prettyArr == wordToGuess) {
//             alert("You won");
//         }
//     }
//     checking();