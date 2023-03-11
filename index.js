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
    button.textContent = "delete";
    button.style.fontSize ="medium";
    button.className='delete'+b;
    button.type = "submit";
    date.textContent =  "11/01/2023";
    url.textContent = input_element.value;
    button_row.appendChild(button);
    button_row.dataset.id = b;
    newrow.appendChild(date);
    newrow.appendChild(url);
    newrow.appendChild(button_row);
    table.appendChild(newrow);
    newrow.className ='add'+b;
    
    for(let i =0; i<b;i++){
    const deleteButton = document.getElementsByClassName("delete"+b);
    deleteButton[0].addEventListener("click",delete_click,false);}
    input_element.value = '';
    b++;
}
// let i =1;

//   const deleteButton = document.getElementsByClassName("delete"+b);
//   deleteButton[0].addEventListener("click",delete_click,false);

    function delete_click(e){
      e.preventDefault();
      const id = e.target.parentNode.dataset.id;
      const rowElement = document.querySelector('.add' + id);
      rowElement.parentNode.removeChild(rowElement);
}

    
  