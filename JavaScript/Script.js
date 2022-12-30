if(window.SimpleSlide) {

new SimpleSlide({
    slide: "quote",
    time: 5000,
  });

new SimpleSlide({
    slide: "portfólio",
    time: 5000,
    nav: true,
})

}

if(window.SimpleAnime) {

new SimpleAnime({});

}

if(window.SimpleForm) {

new SimpleForm({
    form: ".formphp", // Seletor do formulário
    button: "#enviar", // Seletor do botão
    erro: "<div id='form-erro'><h2>Erro no Envio<h2><p>Um erro ocorreu, tente novamente mais tarde, ou envie a mensagem para o E-mail: contato@bikcraft.com.</p></div>", // Mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve entraremos em contato com você.</p></div>", // Mensagem de sucesso
});

}