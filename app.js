//selection of all concerned html elements
let averagetime = document.querySelector(".avgrt");
let bestime = document.querySelector(".bestime");
let buttonwords = document.querySelector("small");
let button = document.querySelector(".reactbtn");
let levels = document.querySelectorAll("#easy");
let reload = document.querySelector("i");

//score variables
let buttoncount = 0;
let bestcount = 0;
let countervar = -1;

//level of difficulty
let spped = [1000, 800, 650];
let sppedindex = 0;

//occurs when start button is clicked
function start(){
    button.setAttribute("onclick", "response()");
    button.style.backgroundColor = "#3A434C";
    button.innerText = " ";

    //waits for 1s to give the player an element of surprise
    setTimeout(() => {
        //constantly changes divs position
        let timeID = setInterval(() => {
            button.disabled = false;
            testtoggler = 0;
            button.innerText = "Click me!";
            button.style.marginLeft = `${Math.floor(Math.random() * 91)}%`;
            button.style.marginTop = `${Math.floor(Math.random() * 46)}%`;
            button.style.backgroundColor = "green";
            countervar++;

            if(buttoncount < countervar){
                button.style.backgroundColor = "red";
                button.style.marginLeft = "auto";
                button.setAttribute("onclick", "nofunc()");
                button.style.marginRight = "45%";
                button.style.marginTop = "22%";
                button.style.fontSize = "13px";
                button.innerText = "GAME OVER!!!";

                //ensures reload button can be used only when user loses
                reload.addEventListener("click", function refreshing(){
                    console.log("aworking");
                    buttoncount = 0;
                    countervar = -1;
                    button.setAttribute("onclick", "start()");
                    button.innerText = "START";
                    button.style.marginRight = "45%";
                    button.style.marginTop = "22%";
                    button.style.backgroundColor = "#AAA3AC";
                    averagetime.innerText = "0";
                    reload.removeEventListener("click", refreshing);
                });

                clearInterval(timeID);

            }
        }, spped[sppedindex])
    }, 1000);

}

//when the green buttons are clicked, the code executed takes care of the score count anad best count
function response(){
    button.disabled = true
    buttoncount++;
    if(buttoncount > bestcount || bestcount == 0)
    {
        bestcount++;
    }
    bestime.innerText = `${bestcount}`;
    averagetime.innerText = `${buttoncount}`;
}

//a useless function to add to the "GAME OVER!!!" button
function nofunc(){
    console.log("ain't going anywhere");
}


//button function that control the level of difficulty
function easy(){
    sppedindex = 0;
}

function mid(){
    sppedindex = 1;
}

function hard(){
    sppedindex = 2;
}
