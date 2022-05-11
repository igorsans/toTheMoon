$('#data,#par,#btn').hide()
$('#tT').hide().fadeIn(2500, ()=>{
    $('#par').fadeIn(2000, () =>{
        $('#data,#btn').fadeIn(2000)
    })
});

$("#btn").click(function (e) {
    e.preventDefault();
    $('#date,#text,#media,#title').remove()
    const data = $('#data').val()
    const key = 'jPARZgxn9D6y8F2Cd2SQ4DEwm35UQRnqV8grHAI8'
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        success: function (resposta) {
            useData(resposta)
        },
        error: function (erro) {
            console.log(erro);
        },
    });
    $(`<div id='text'></div><div id='date'></div><div id='title'></div> <div id='media'></div>`).appendTo("#results")
});

function useData(resposta) {    
    $('#date').prepend(`<h2>${resposta.date}</h2>`)
    $('#text').prepend(`<p>${resposta.explanation}</p>`)
    $('#title').prepend(`<h3>${resposta.title}</h3>`)
    if(resposta.media_type == "video"){
        $('#media').prepend(`<iframe id='borda' src='${resposta.url}'></iframe><p> Link of original video: <a href="${resposta.url}" target="_Blank">Here<a>`)
    } else if (resposta.media_type == 'image'){
        $('#media').prepend(`<a href="${resposta.url}" target="_Blank"><img id='borda'src='${resposta.url}'/></a><p> Link of original picture: <a href="${resposta.url}" target="_Blank">Here<a>. Provide by: Nasa</p>`)
    }
}