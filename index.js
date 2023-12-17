// import express from "express";
// import { dirname } from "path"
// import { fileURLToPath } from "url";
// import bodyParser from "body-parser";

// const app = express();
// const port = 3000;

// const __dirname = dirname(fileURLToPath(import.meta.url));

// app.get("/", (req, res) => {
//     //Step 1 - Make the get route work and render the index.ejs file.
//     res.sendFile(`${__dirname}/public/index.html`)
// })

// app.listen(port,() => {console.log(`Server Running on port ${port}`)})


    
let i = 0
$(".icing,.candle").click(function printMousePos(event) {
    $(".first-candle").css("visibility","hidden")
    let x = event.clientX
    let y =  event.clientY
    let clickCoordinate = `X: ${x}, Y: ${y}`;
    console.log(clickCoordinate);
    candles = {}
    candles[`candle${i}`] = `<div class="candle ${"birthday" + i}"><div class="flame"></div></div>`
    console.log(candles[`candle${i}`]);
    $(".cake").append(candles[`candle${i}`])
    let leftPosition = x - 419
    let topPosition = y - 253
    $(`.birthday${i}`).css({ "left": leftPosition+"px", "top": topPosition+"px"})
    console.log(`.birthday${i}`);
    if (i < 15) {
        $(".age").html(`<h2 class='age'> You are ${i+1} years old; You are still a child</h2> `)
        i++
    }
    else if (i >=15 && i <30) {
        $(".age").html(`<h2 class='age'> You are ${i+1} years old; You are in your prime</h2> `)
        i++
    }
    else if (i >= 30 && i<40  ) {
        $(".age").html(`<h2 class='age'> You are ${i+1} years old; Enjoy the time</h2> `)
        i++
    }

    else if (i>= 40 && i <= 60){
    $(".age").html(`<h2 class='age'> You are ${i+1} years old; 2nd half </h2>`)
    i++
}
    

    else{
        $(".age").html(`<h2 class='age'> You are ${i+1} years old; Thank God for Life </h2>`)
        i++
    }
})
    

$("button").click(function reset() {

    
    
})