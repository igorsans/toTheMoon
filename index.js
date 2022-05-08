
$("#btn").click(function (e) {
    e.preventDefault();
    $('#date,#text,#img,#title').remove()
    var data = $('#data').val()
    let key = 'jPARZgxn9D6y8F2Cd2SQ4DEwm35UQRnqV8grHAI8'
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        success: function (resposta) {
            useData(resposta)
        },
        error: function (erro) {
            console.log(erro);
        },

    });

    $(`<div id='date'></div> <div id='text'></div> <div id='title'></div> <div id='img'></div>`).appendTo("#results")
});

function useData(resposta) {    
    $('#date').prepend(`<h2>${resposta.date}</h2>`)
    $('#text').prepend(`<p>${resposta.explanation}</p>`)
    $('#title').prepend(`<h3>${resposta.title}</h3>`)
    $('#img').prepend(`<img src='${resposta.url}'/>`)
}
