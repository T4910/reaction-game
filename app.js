let averagetime = document.querySelector(".avgrt");
let bestime = document.querySelector(".bestime");
let buttonwords = document.querySelector("small");
let button = document.querySelector(".reactbtn");
let levels = document.querySelectorAll("#easy");
let reload = document.querySelector("i");
let buttoncount = 0;
let bestcount = 0;
let countervar = -1;
let allowrefresh = "canplaythrough";

let spped = [1000, 800, 650];
let sppedindex = 0;

function start(){
    button.setAttribute("onclick", "response()");
    button.style.backgroundColor = "#3A434C";
    button.innerText = " ";

    setTimeout(() => {

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
                // allowrefresh = "click";

            }
        }, spped[sppedindex])
    }, 1000);

}


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

function nofunc(){
    console.log("ain't going anywhere");
}

function easy(){
    sppedindex = 0;
}

function mid(){
    sppedindex = 1;
}

function hard(){
    sppedindex = 2;
}
