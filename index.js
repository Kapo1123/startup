function setplayer_name(){
    let x= localStorage.getItem('userName') ?? 'Mystery player';

  const playerNameEl = document.querySelector('.player-name');
      playerNameEl.textContent = x;
    } 
    
setplayer_name();
const addbutton = document.getElementsByClassName("form_button");
addbutton[0].addEventListener("click",button_click,false);
let b = 1;

function button_click(e){
    e.preventDefault();
    const input_element = document.getElementsByClassName("input1")[0];
    const table= document.getElementsByClassName("table1")[0];
    const date = document.createElement("td");
    const url = document.createElement("td");
    url.style.textAlign = "center"; 
    const button_row = document.createElement("td");
    const newrow = document.createElement("tr");
    const button = document.createElement("button");
    button.textContent = "delect";
    button.style.fontSize ="10px";
    date.textContent =  "11/01/2023";
    url.textContent = input_element.value;
    button_row.appendChild(button);
    newrow.appendChild(date);
    newrow.appendChild(url);
    newrow.appendChild(button_row);
    table.appendChild(newrow);
    newrow.id ="table"+b;
    b++;
}
// function 
    
  