let socket = io('http://localhost:8080/');

$( '.form').on('submit', function(event){
    event.preventDefault();
    let userName=  $('#userName').val();
    let userLocal=  $('#local').val();
    let userLanguage=  $('#language').val();
    let userComments=  $('#comments').val();
    let magicNumber=Math.floor(Math.random() * 1000);
    if(magicNumber==0){
        magicNumber=Math.floor(Math.random() * 1000);
    }

    let user={
        name:userName,
        location: userLocal,
        language: userLanguage,
        comments: userComments,
        number: magicNumber
    }
    socket.emit('sendUser', user);
});

socket.on('sendAll', function(data){
    let newMessage = `<p class="good">You emmited the following information to the server: { name: ${data.name}, location: ${data.location}, language: ${data.language}, comments: ${data.comments}} <br>  Your lucky number emmited by the server is ${data.number}</p>`;
    $( '.alertBox' ).append( newMessage );

});


