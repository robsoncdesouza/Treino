function abrirVideo(urlVideo) {
    var video = document.getElementById('meuVideo');
    var fonte = video.querySelector('source');
    
    fonte.src = urlVideo;
    
    video.load(); 
    
    document.getElementById('videoCard').style.display = 'block';
    video.play();
}

function fecharVideo() {
    document.getElementById('videoCard').style.display = 'none';
    var video = document.getElementById('meuVideo');
    video.pause();
}

document.addEventListener('DOMContentLoaded', function() {
    var botoes = document.querySelectorAll('.btn');

    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {
            var url = this.getAttribute('data-url');
            abrirVideo(url);
        });
    });
});