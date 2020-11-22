var xhr = new XMLHttpRequest();

xhr.open("GET", 'https://api.github.com/users/botomniac');
xhr.send(null);

xhr.onreadystatechange = function (){
    if (xhr.readyState === 4){ //4 variavel q significa resposta
        console.log(JSON.parse(xhr.responseText));
    }
}


