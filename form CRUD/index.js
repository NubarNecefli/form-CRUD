const studentform=document.getElementById('studentform');
const nameid=document.getElementById('nameid');
const surnameid=document.getElementById('surnameid');
const ageid=document.getElementById('ageid');
const studentsid=document.getElementById('studentsid');
const submit=document.getElementById('studentform');


submit.addEventListener('submit', function (event) {
    event.preventDefault(); 

    fetch('https://655c2ff2ab37729791aa015f.mockapi.io/university/swp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
     name:nameid.value,
     surname:surnameid.value,
     age:ageid.value,
     studentsId: studentsid.value,
        }),
    })
    .then((response) => response.json()) 
    .then(data =>{
        console.log(
            data
        );
    })
})





    
   