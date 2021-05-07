
document.getElementById('submitData').addEventListener('click',submitForm);

function getText(){
    fetch('http://mysite.itvarsity.org/api/fetch/get-data/')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.querySelector('p').innerHTML = data;
    })
}


function getList(){
    fetch('https://mysite.itvarsity.org/api/fetch/get-list/')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
       let outPut = `<h2>Posts</h2>`;
       for(let i = 0 ; i < data.length; i++){
           outPut += `
                     <h4>${data[i][0]}</h4>
                     <span>
                     ${data[i][1]}<br>
                     </span>
                     <span>
                     ${data[i][2]}
                     </span>
                     `;
       }
        document.getElementById('output').innerHTML = outPut;
    })
}

function submitForm(e){
   e.preventDefault();

   form = new FormData(document.querySelector('#myForm'));

   fetch('https://mysite.itvarsity.org/api/fetch/send-data/',{
       method: 'POST',
       headers: {"Accept": "application/json, */*" },
       body: form
   })
   .then(function(response){
       return response.text();
   })
   .then(function(data){
       document.querySelector('p').innerHTML = data;
   })
}