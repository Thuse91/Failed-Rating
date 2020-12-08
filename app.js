let voteCounter = 0;
let maxVotes = 0;


function oneCalc() {
    voteCounter += 1;
    maxVotes += 5;
    console.log(voteCounter)
    console.log(maxVotes)
    this.score();
}

function twoCalc() {
    voteCounter += 2;
    maxVotes += 5;
    console.log(voteCounter)
    console.log(maxVotes)
    this.score();
}

function threeCalc() {
    voteCounter += 3;
    maxVotes += 5;
    console.log(voteCounter)
    console.log(maxVotes)
    this.score();
}

function fourCalc() {
    voteCounter += 4;
    maxVotes += 5;
    console.log(voteCounter)
    console.log(maxVotes)
    this.score();
}

function fiveCalc() {
    voteCounter += 5;
    maxVotes += 5;
    console.log(voteCounter)
    console.log(maxVotes)
    this.score();
}


function wipe() {
    document.querySelector("#one-full").style.display = "none"
    document.querySelector("#two-full").style.display = "none"
    document.querySelector("#three-full").style.display = "none"
    document.querySelector("#four-full").style.display = "none"
    document.querySelector("#five-full").style.display = "none"
    document.querySelector("#one").style.display = "none"
    document.querySelector("#one").style.left = "0px"
    document.querySelector("#two").style.display = "none"
    document.querySelector("#two").style.left = "0px"
    document.querySelector("#three").style.display = "none"
    document.querySelector("#three").style.left = "0px"
    document.querySelector("#four").style.display = "none"
    document.querySelector("#four").style.left = "0px"
    document.querySelector("#five").style.display = "none"
    document.querySelector("#five").style.left = "0px"
    document.querySelector("#one-half").style.display = "none"
    document.querySelector("#two-half").style.display = "none"
    document.querySelector("#three-half").style.display = "none"
    document.querySelector("#four-half").style.display = "none"
    document.querySelector("#five-half").style.display = "none"
}










function score(){
    if (voteCounter >= maxVotes / 100 * 95) {
        this.wipe();
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
        console.log("5")
        console.log(voteCounter)
        console.log(maxVotes)
    }
    else if (voteCounter >= maxVotes / 100 * 85) {
        this.wipe();
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
        console.log(voteCounter)
        console.log(maxVotes)
    }
    else if (voteCounter >= maxVotes / 100 * 75) {
        this.wipe();
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
        console.log(voteCounter)
        console.log(maxVotes)
    }
    else if (voteCounter >= maxVotes / 100 * 65) {
        this.wipe();
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
        console.log(voteCounter)
        console.log(maxVotes)
    }
    else if (voteCounter >= maxVotes / 100 * 55) {
        this.wipe();
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
        console.log(voteCounter)
        console.log(maxVotes)
    }
    else if (voteCounter >= maxVotes / 100 * 45) {
        this.wipe();
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
        console.log(voteCounter)
        console.log(maxVotes)
    }
    else if (voteCounter >= maxVotes / 100 * 35) {
        this.wipe();
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
        console.log(voteCounter)
        console.log(maxVotes)

    }
    else if (voteCounter >= maxVotes / 100 * 25) {
        this.wipe();
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
        console.log(voteCounter)
        console.log(maxVotes)
    }
    else if (voteCounter >= maxVotes / 100 * 15) {
        this.wipe();
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
        console.log(voteCounter)
        console.log(maxVotes)
    }
    else if (voteCounter >= maxVotes / 100 * 5) {
        this.wipe();
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
        console.log(voteCounter)
        console.log(maxVotes)
    }
    else if (voteCounter < maxVotes / 100 * 5) {
        this.wipe();
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
        console.log(voteCounter)
        console.log(maxVotes)
    }
    console.log("test")
}

score();