const days=['Lunes', 'Martes', 'Miercoles', 'Jueves', 'VIernes', 'Sabado','DOmingo'];
const title= document.getElementById('DOM');
const lista=document.getElementById('dias');
const select=document.getElementById('diasselect');

/*const itemList=document.createElement('LI');
itemList.textContent='lunes';
console.log(itemList);

lista.appendChild(itemList);

title.innerHTML = '<span>DOM</span>';*/

const fragment = document.createDocumentFragment();

/*for(const day of days){
    const itemList=document.createElement('LI');
    itemList.textContent=day;
    fragment.appendChild(itemList);
}
lista.appendChild(fragment);
console.log(fragment);
*/
/*
for(const day of days){
    lista.innerHTML+=`<li>${day}</li>`;
    console.log(day);
}*/

for(const day of days){
    const selectItem=document.createElement('OPTION');
    selectItem.setAttribute('value', day.toLowerCase());
    selectItem.textContent=day;
    fragment.appendChild(selectItem);
}
select.appendChild(fragment);