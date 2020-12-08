
let voteCounter = 0;
let maxVotes = 0;


let fourHalf = maxVotes / 100 * 95;
let four = maxVotes / 100 * 85;
let threeHalf = maxVotes / 100 * 75;
let three = maxVotes / 100 * 65;
let twoHalf = maxVotes / 100 * 55;
let two = maxVotes / 100 * 45;
let oneHalf = maxVotes / 100 * 35;
let one = maxVotes / 100 * 25;
let half = maxVotes / 100 * 15;
let zero = maxVotes / 100 * 5;

function oneCalc() {
    voteCounter += 1;
    maxVotes += 5;
    console.log(voteCounter)
    console.log(maxVotes)
}

function twoCalc() {
    voteCounter += 2;
    maxVotes += 5;
    console.log(voteCounter)
    console.log(maxVotes)
}

function threeCalc() {
    voteCounter += 3;
    maxVotes += 5;
    console.log(voteCounter)
    console.log(maxVotes)
}

function fourCalc() {
    voteCounter += 4;
    maxVotes += 5;
    console.log(voteCounter)
    console.log(maxVotes)
}

function fiveCalc() {
    voteCounter += 5;
    maxVotes += 5;
    console.log(voteCounter)
    console.log(maxVotes)
}






function score(){
    if (voteCounter >= fourHalf) {
        document.querySelector("#one-full").style.display = "block"
        document.querySelector("#two-full").style.display = "block"
        document.querySelector("#three-full").style.display = "block"
        document.querySelector("#four-full").style.display = "block"
        document.querySelector("#five-full").style.display = "block"
        document.querySelector("#one").style.display = "none"
        document.querySelector("#two").style.display = "none"
        document.querySelector("#three").style.display = "none"
        document.querySelector("#four").style.display = "none"
        document.querySelector("#five").style.display = "none"
        document.querySelector("#one-half").style.display = "none"
        document.querySelector("#two-half").style.display = "none"
        document.querySelector("#three-half").style.display = "none"
        document.querySelector("#four-half").style.display = "none"
        document.querySelector("#five-half").style.display = "none"
        console.log(fourHalf)
    }
    else if (voteCounter >= four) {
        document.querySelector("#one-full").style.display = "block"
        document.querySelector("#two-full").style.display = "block"
        document.querySelector("#three-full").style.display = "block"
        document.querySelector("#four-full").style.display = "block"
        document.querySelector("#five-full").style.display = "none"
        document.querySelector("#one").style.display = "none"
        document.querySelector("#two").style.display = "none"
        document.querySelector("#three").style.display = "none"
        document.querySelector("#four").style.display = "none"
        document.querySelector("#five").style.display = "block"
        document.querySelector("#one-half").style.display = "none"
        document.querySelector("#two-half").style.display = "none"
        document.querySelector("#three-half").style.display = "none"
        document.querySelector("#four-half").style.display = "none"
        document.querySelector("#five-half").style.display = "block"
        console.log("4.5")
    }
    else if (voteCounter >= threeHalf) {
        document.querySelector("#one-full").style.display = "block"
        document.querySelector("#two-full").style.display = "block"
        document.querySelector("#three-full").style.display = "block"
        document.querySelector("#four-full").style.display = "block"
        document.querySelector("#five-full").style.display = "none"
        document.querySelector("#one").style.display = "none"
        document.querySelector("#two").style.display = "none"
        document.querySelector("#three").style.display = "none"
        document.querySelector("#four").style.display = "none"
        document.querySelector("#five").style.display = "block"
        document.querySelector("#one-half").style.display = "none"
        document.querySelector("#two-half").style.display = "none"
        document.querySelector("#three-half").style.display = "none"
        document.querySelector("#four-half").style.display = "none"
        document.querySelector("#five-half").style.display = "none"
        console.log("4")
    }
    else if (voteCounter >= three) {
        document.querySelector("#one-full").style.display = "block"
        document.querySelector("#two-full").style.display = "block"
        document.querySelector("#three-full").style.display = "block"
        document.querySelector("#four-full").style.display = "none"
        document.querySelector("#five-full").style.display = "none"
        document.querySelector("#one").style.display = "none"
        document.querySelector("#two").style.display = "none"
        document.querySelector("#three").style.display = "none"
        document.querySelector("#four").style.display = "block"
        document.querySelector("#five").style.display = "block"
        document.querySelector("#five").style.left = "24px"
        document.querySelector("#one-half").style.display = "none"
        document.querySelector("#two-half").style.display = "none"
        document.querySelector("#three-half").style.display = "none"
        document.querySelector("#four-half").style.display = "block"
        document.querySelector("#five-half").style.display = "none"
        console.log("3.5")
    }
    else if (voteCounter >= twoHalf) {
        document.querySelector("#one-full").style.display = "block"
        document.querySelector("#two-full").style.display = "block"
        document.querySelector("#three-full").style.display = "block"
        document.querySelector("#four-full").style.display = "none"
        document.querySelector("#five-full").style.display = "none"
        document.querySelector("#one").style.display = "none"
        document.querySelector("#two").style.display = "none"
        document.querySelector("#three").style.display = "none"
        document.querySelector("#four").style.display = "block"
        document.querySelector("#five").style.display = "block"
        document.querySelector("#five").style.left = "24px"
        document.querySelector("#one-half").style.display = "none"
        document.querySelector("#two-half").style.display = "none"
        document.querySelector("#three-half").style.display = "none"
        document.querySelector("#four-half").style.display = "none"
        document.querySelector("#five-half").style.display = "none"
        console.log("3")
    }
    else if (voteCounter >= two) {
        document.querySelector("#one-full").style.display = "block"
        document.querySelector("#two-full").style.display = "block"
        document.querySelector("#three-full").style.display = "none"
        document.querySelector("#four-full").style.display = "none"
        document.querySelector("#five-full").style.display = "none"
        document.querySelector("#one").style.display = "none"
        document.querySelector("#two").style.display = "none"
        document.querySelector("#three").style.display = "block"
        document.querySelector("#four").style.display = "block"
        document.querySelector("#four").style.left = "24px"
        document.querySelector("#five").style.display = "block"
        document.querySelector("#five").style.left = "48px"
        document.querySelector("#one-half").style.display = "none"
        document.querySelector("#two-half").style.display = "none"
        document.querySelector("#three-half").style.display = "block"
        document.querySelector("#four-half").style.display = "none"
        document.querySelector("#five-half").style.display = "none"
        console.log("2.5")
    }
    else if (voteCounter >= oneHalf) {
        document.querySelector("#one-full").style.display = "block"
        document.querySelector("#two-full").style.display = "block"
        document.querySelector("#three-full").style.display = "none"
        document.querySelector("#four-full").style.display = "none"
        document.querySelector("#five-full").style.display = "none"
        document.querySelector("#one").style.display = "none"
        document.querySelector("#two").style.display = "none"
        document.querySelector("#three").style.display = "block"
        document.querySelector("#four").style.display = "block"
        document.querySelector("#four").style.left = "24px"
        document.querySelector("#five").style.display = "block"
        document.querySelector("#five").style.left = "48px"
        document.querySelector("#one-half").style.display = "none"
        document.querySelector("#two-half").style.display = "none"
        document.querySelector("#three-half").style.display = "none"
        document.querySelector("#four-half").style.display = "none"
        document.querySelector("#five-half").style.display = "none"
        console.log("2")

    }
    else if (voteCounter >= one) {
        document.querySelector("#one-full").style.display = "block"
        document.querySelector("#two-full").style.display = "none"
        document.querySelector("#three-full").style.display = "none"
        document.querySelector("#four-full").style.display = "none"
        document.querySelector("#five-full").style.display = "none"
        document.querySelector("#one").style.display = "none"
        document.querySelector("#two").style.display = "block"
        document.querySelector("#two").style.left = "24px"
        document.querySelector("#three").style.display = "block"
        document.querySelector("#four").style.display = "block"
        document.querySelector("#four").style.left = "48px"
        document.querySelector("#five").style.display = "block"
        document.querySelector("#five").style.left = "72px"
        document.querySelector("#one-half").style.display = "none"
        document.querySelector("#two-half").style.display = "none"
        document.querySelector("#three-half").style.display = "block"
        document.querySelector("#four-half").style.display = "none"
        document.querySelector("#five-half").style.display = "none"
        console.log("1.5")
    }
    else if (voteCounter >= half) {
        document.querySelector("#one-full").style.display = "block"
        document.querySelector("#two-full").style.display = "none"
        document.querySelector("#three-full").style.display = "none"
        document.querySelector("#four-full").style.display = "none"
        document.querySelector("#five-full").style.display = "none"
        document.querySelector("#one").style.display = "none"
        document.querySelector("#two").style.display = "block"
        document.querySelector("#two").style.left = "24px"
        document.querySelector("#three").style.display = "block"
        document.querySelector("#four").style.display = "block"
        document.querySelector("#four").style.left = "48px"
        document.querySelector("#five").style.display = "block"
        document.querySelector("#five").style.left = "72px"
        document.querySelector("#one-half").style.display = "none"
        document.querySelector("#two-half").style.display = "none"
        document.querySelector("#three-half").style.display = "none"
        document.querySelector("#four-half").style.display = "none"
        document.querySelector("#five-half").style.display = "none"
        console.log("1")
    }
    else if (voteCounter >= zero) {
        document.querySelector("#one-full").style.display = "none"
        document.querySelector("#two-full").style.display = "none"
        document.querySelector("#three-full").style.display = "none"
        document.querySelector("#four-full").style.display = "none"
        document.querySelector("#five-full").style.display = "none"
        document.querySelector("#one").style.display = "block"
        document.querySelector("#two").style.display = "block"
        document.querySelector("#two").style.left = "24px"
        document.querySelector("#three").style.display = "block"
        document.querySelector("#three").style.left = "48px"
        document.querySelector("#four").style.display = "block"
        document.querySelector("#four").style.left = "72px"
        document.querySelector("#five").style.display = "block"
        document.querySelector("#five").style.left = "96px"
        document.querySelector("#one-half").style.display = "block"
        document.querySelector("#two-half").style.display = "none"
        document.querySelector("#three-half").style.display = "none"
        document.querySelector("#four-half").style.display = "none"
        document.querySelector("#five-half").style.display = "none"
        console.log("halv")
    }
    else if (voteCounter < zero) {
        document.querySelector("#one-full").style.display = "none"
        document.querySelector("#two-full").style.display = "none"
        document.querySelector("#three-full").style.display = "none"
        document.querySelector("#four-full").style.display = "none"
        document.querySelector("#five-full").style.display = "none"
        document.querySelector("#one").style.display = "block"
        document.querySelector("#two").style.display = "block"
        document.querySelector("#two").style.left = "24px"
        document.querySelector("#three").style.display = "block"
        document.querySelector("#three").style.left = "48px"
        document.querySelector("#four").style.display = "block"
        document.querySelector("#four").style.left = "72px"
        document.querySelector("#five").style.display = "block"
        document.querySelector("#five").style.left = "96px"
        document.querySelector("#one-half").style.display = "none"
        document.querySelector("#two-half").style.display = "none"
        document.querySelector("#three-half").style.display = "none"
        document.querySelector("#four-half").style.display = "none"
        document.querySelector("#five-half").style.display = "none"
        console.log("noll")
    }
    console.log("test")
}

score();
