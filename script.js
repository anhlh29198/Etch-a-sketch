
const container = document.querySelector(".container");
const btn = document.querySelector("button");
const body = document.querySelector("body");
console.log(container);

let size;
let mouse = false;

body.addEventListener("mousedown", () => {
    mouse = true;
});

body.addEventListener("mouseup", () => {
    mouse = false;
});

btn.addEventListener("click", () => {
    gridDelete();
    size = +prompt("Grid size of: ");
    gridCreate(size);
});

function gridCreate(size) {
    for (i = 1; i <= size; i++) {
        const row = document.createElement("div");
        row.classList.add("row", `${i}`);
        for (j = 1; j <= size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell", `${j}`);
            changeColor(cell);

            row.appendChild(cell); 
        }
        container.appendChild(row); 
    }

    // const cellToHover = document.querySelectorAll(".cell");
    // cellToHover.forEach((Node) => {
    //     let color = 255;
        
    //     Node.addEventListener("mousedown", (e) => {
    //         e.target.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    //         color -= 25.5;
    //     });

    //     Node.addEventListener("mouseover", (e) => {
    //         if (mouse) {
    //             e.target.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    //         color -= 25.5;
    //         }
    //         else {return}
    //     });
    // });
};

function gridDelete() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function randomColor() {
    const shade = Math.floor(Math.random() * 100);
    return `rgb(${shade}, ${shade}, ${shade})`;
}

// function darkening() {
//     color -= 25.5;
//     return `rgb(${color}, ${color}, ${color})`;
// }

function changeColor(cell) {
        let color = 255;
        
        cell.addEventListener("mousedown", (e) => {
            e.target.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
            color -= 25.5;
        });

        cell.addEventListener("mouseover", (e) => {
            if (mouse) {
                e.target.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
            color -= 25.5;
            }
            else {return}
        });
}


