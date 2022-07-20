//Abrir Menu Lateral//

function abrirMenuLateral(){
    var a = document.getElementById('menuLateral');
    a.style.transition = '.5s';
    a.style.display = 'block';
    a.style.left = '0px';
    var b = document.getElementById('espacoBtnFecharMenuLateral');
    b.style.display = 'block';
    var c = document.getElementById('btnFecharMenuLateral');
    c.style.display = 'block';
    var a4 = document.getElementById('rodapeControleTar2');
    var a5 = document.getElementById('rodape');
    var a6 = document.getElementById('tituloRodape');
    var a7 = document.getElementById('paragrafoRodape');
    var a8 = document.getElementById('controleTar');
    var a9 = document.getElementById('rodapeControleTar');
    var a10 = document.getElementById('controleTarCorpo');
    var a11 = document.getElementById('quadrosBusca');
    var a12 = document.getElementById('dropdownMenuTipoDeCobranca');
    var a13 = document.getElementById('controleTarCorpo2');
    var a14 = document.getElementById('controleTar2');
    var a15 = document.getElementById('body');
    
    a4.style.filter = 'blur(10px)';
    a5.style.filter = 'blur(10px)';
    a6.style.filter = 'blur(10px)';
    a7.style.filter = 'blur(10px)';
    a8.style.filter = 'blur(10px)';
    a9.style.filter = 'blur(20px)';
    a10.style.filter = 'blur(10px)';
    a11.style.filter = 'blur(10px)';
    a12.style.filter = 'blur(10px)';
    a13.style.filter = 'blur(10px)';
    a14.style.filter = 'blur(10px)';
    a15.style.overflow = 'hidden';
}

function fecharMenuLateral(){
    var a = document.getElementById('menuLateral');
    a.style.transition = '.5s';
    a.style.display = 'none';
    a.style.left = '-260px';
    var b = document.getElementById('espacoBtnFecharMenuLateral');
    b.style.display = 'none';
    var c = document.getElementById('btnFecharMenuLateral');
    c.style.display = 'none';
    var a4 = document.getElementById('rodapeControleTar2');
    var a5 = document.getElementById('rodape');
    var a6 = document.getElementById('tituloRodape');
    var a7 = document.getElementById('paragrafoRodape');
    var a8 = document.getElementById('controleTar');
    var a9 = document.getElementById('rodapeControleTar');
    var a10 = document.getElementById('controleTarCorpo');
    var a11 = document.getElementById('quadrosBusca');
    var a12 = document.getElementById('dropdownMenuTipoDeCobranca');
    var a13 = document.getElementById('controleTarCorpo2');
    var a14 = document.getElementById('controleTar2');
    var a15 = document.getElementById('body');
    
    a4.style.filter = 'blur(0px)';
    a5.style.filter = 'blur(0px)';
    a6.style.filter = 'blur(0px)';
    a7.style.filter = 'blur(0px)';
    a8.style.filter = 'blur(0px)';
    a9.style.filter = 'blur(0px)';
    a10.style.filter = 'blur(0px)';
    a11.style.filter = 'blur(0px)';
    a12.style.filter = 'blur(0px)';
    a13.style.filter = 'blur(0px)';
    a14.style.filter = 'blur(0px)';
    a15.style.overflow = 'auto';
}

//Mudar Cor do Botão fechar menu lateral//

function mudarCorFecharMenuLateral(){
    var a = document.getElementById('btnFecharMenuLateral');
    a.style.transition = '.5s';
    a.style.color = 'white';
}

function voltarCorFecharMenuLateral(){
    var a = document.getElementById('btnFecharMenuLateral');
    a.style.transition = '1s';
    a.style.color = 'rgb(153, 17, 17)';
}


var a = document.getElementById('btnCancelar');

function EditarClick(){
    a.style.display = 'flex';
}

function CancelarSumir(){
    a.style.display = 'none';
}

//Input CPF/CNPJ//

function clicarCPF(){
    var a = document.getElementById('inputCPF');    
    a.style.borderColor = 'orange';
    a.style.borderRadius = '0px';
}

function sairCPF(){
    var a = document.getElementById('inputCPF');    
    a.style.borderColor = 'gray';
    a.style.borderRadius = '5px';
}



//Input Tipo de Cobranca//

function aparecerDropdownTipoDeCobranca(){
    var b = document.getElementById('dropdownMenuTipoDeCobranca');
    b.style.display = 'block';
    var d = document.getElementById('tipoDeCobranca');
    d.style.backgroundColor = 'rgb(231, 231, 231)';
    d.style.borderRadius = '0px';
}

function sumirDropdownTipoDeCobranca(){
    var c = document.getElementById('dropdownMenuTipoDeCobranca')
    c.style.display = 'none';
    var d = document.getElementById('tipoDeCobranca');
    d.style.backgroundColor = 'white';
    d.style.borderRadius = '5px';
}

function permanecerDropdownTipoDeCobranca(){
    var b = document.getElementById('dropdownMenuTipoDeCobranca');
    b.style.display = 'block';
    var d = document.getElementById('tipoDeCobranca');
    d.style.borderRadius = '0px';
    d.style.borderBottomColor = 'orange';
    d.style.backgroundColor = 'rgb(231, 231, 231)';
}

function sairDropdownTipoDeCobranca(){
    var c = document.getElementById('dropdownMenuTipoDeCobranca')
    c.style.display = 'none';
    var d = document.getElementById('tipoDeCobranca');
    d.style.borderRadius = '5px';
    d.style.borderBottomColor = 'gray';
    d.style.backgroundColor = 'white';
}

function todos(){
    var a = document.getElementById('TipoDeCobrancaMarcado');
    a.innerText = 'Todos';
    var c = document.getElementById('dropdownMenuTipoDeCobranca')
    c.style.display = 'none';
}

function contaCorrente(){
    var a = document.getElementById('TipoDeCobrancaMarcado');
    a.innerText = 'Conta Corrente';
    var c = document.getElementById('dropdownMenuTipoDeCobranca')
    c.style.display = 'none';
}

function boleto(){
    var a = document.getElementById('TipoDeCobrancaMarcado');
    a.innerText = 'Boleto';
    var c = document.getElementById('dropdownMenuTipoDeCobranca')
    c.style.display = 'none';
}


//Input Agencia//

function aparecerDropdownAgencia(){
    var b = document.getElementById('dropdownMenuAgencia');
    b.style.display = 'block';
    var d = document.getElementById('agencia');
    d.style.backgroundColor = 'rgb(231, 231, 231)';
    d.style.borderRadius = '0px';
}

function sumirDropdownAgencia(){
    var c = document.getElementById('dropdownMenuAgencia')
    c.style.display = 'none';
    var d = document.getElementById('agencia');
    d.style.backgroundColor = 'white';
    d.style.borderRadius = '5px';
}

function permanecerDropdownAgencia(){
    var b = document.getElementById('dropdownMenuAgencia');
    b.style.display = 'block';
    var d = document.getElementById('agencia');
    d.style.borderRadius = '0px';
    d.style.borderBottomColor = 'orange';
    d.style.backgroundColor = 'rgb(231, 231, 231)';
}

function sairDropdownAgencia(){
    var c = document.getElementById('dropdownMenuAgencia')
    c.style.display = 'none';
    var d = document.getElementById('agencia');
    d.style.borderRadius = '5px';
    d.style.borderBottomColor = 'gray';
    d.style.backgroundColor = 'white';
}

function todosAgencia(){
    var a = document.getElementById('agenciaMarcado');
    a.innerText = 'Todos';
    var c = document.getElementById('dropdownMenuAgencia')
    c.style.display = 'none';
}

function direcaoGeral(){
    var a = document.getElementById('agenciaMarcado');
    a.innerText = '1 - Direção Geral';
    var c = document.getElementById('dropdownMenuAgencia')
    c.style.display = 'none';
}

function alagoGrande(){
    var a = document.getElementById('agenciaMarcado');
    a.innerText = '2 - Alagoa Grande';
    var c = document.getElementById('dropdownMenuAgencia')
    c.style.display = 'none';
}

function morroDoChapeu(){
    var a = document.getElementById('agenciaMarcado');
    a.innerText = '3 - Morro do Chapeu';
    var c = document.getElementById('dropdownMenuAgencia')
    c.style.display = 'none';
}

function angicos(){
    var a = document.getElementById('agenciaMarcado');
    a.innerText = '4 - Angicos';
    var c = document.getElementById('dropdownMenuAgencia')
    c.style.display = 'none';
}

function aracajuCentro(){
    var a = document.getElementById('agenciaMarcado');
    a.innerText = '5 - Aracaju Centro';
    var c = document.getElementById('dropdownMenuAgencia')
    c.style.display = 'none';
}

//Input Conta//

function clicarConta(){
    var a = document.getElementById('inputConta');    
    a.style.borderColor = 'orange';
    a.style.borderRadius = '0px';
}

function sairConta(){
    var a = document.getElementById('inputConta');    
    a.style.borderColor = 'gray';
    a.style.borderRadius = '5px';
}

//Input DV//

function clicarDV(){
    var a = document.getElementById('inputDV');    
    a.style.borderColor = 'orange';
    a.style.borderRadius = '0px';
}

function sairDV(){
    var a = document.getElementById('inputDV');    
    a.style.borderColor = 'gray';
    a.style.borderRadius = '5px';
}

//Input Status//

function aparecerDropdownStatus(){
    var b = document.getElementById('dropdownMenuStatus');
    b.style.display = 'block';
    var d = document.getElementById('status');
    d.style.backgroundColor = 'rgb(231, 231, 231)';
    d.style.borderRadius = '0px';
}

function sumirDropdownStatus(){
    var c = document.getElementById('dropdownMenuStatus')
    c.style.display = 'none';
    var d = document.getElementById('status');
    d.style.backgroundColor = 'white';
    d.style.borderRadius = '5px';
}

function permanecerDropdownStatus(){
    var b = document.getElementById('dropdownMenuStatus');
    b.style.display = 'block';
    var d = document.getElementById('status');
    d.style.borderRadius = '0px';
    d.style.borderBottomColor = 'orange';
    d.style.backgroundColor = 'rgb(231, 231, 231)';
}

function sairDropdownStatus(){
    var c = document.getElementById('dropdownMenuStatus')
    c.style.display = 'none';
    var d = document.getElementById('status');
    d.style.borderRadius = '5px';
    d.style.borderBottomColor = 'gray';
    d.style.backgroundColor = 'white';
}

function todosStatus(){
    var a = document.getElementById('statusMarcado');
    a.innerText = 'Todos';
    var c = document.getElementById('dropdownMenuStatus')
    c.style.display = 'none';
}

function naoPaga(){
    var a = document.getElementById('statusMarcado');
    a.innerText = 'Não Paga';
    var c = document.getElementById('dropdownMenuStatus')
    c.style.display = 'none';
}

function aguardandoPagamento(){
    var a = document.getElementById('statusMarcado');
    a.innerText = 'Aguardando Pagamento';
    var c = document.getElementById('dropdownMenuStatus')
    c.style.display = 'none';
}

function estornada(){
    var a = document.getElementById('statusMarcado');
    a.innerText = 'Estornada';
    var c = document.getElementById('dropdownMenuStatus')
    c.style.display = 'none';
}

function suspensa(){
    var a = document.getElementById('statusMarcado');
    a.innerText = 'Suspensa';
    var c = document.getElementById('dropdownMenuStatus')
    c.style.display = 'none';
}

function paga(){
    var a = document.getElementById('statusMarcado');
    a.innerText = 'Paga';
    var c = document.getElementById('dropdownMenuStatus')
    c.style.display = 'none';
}

function cancelada(){
    var a = document.getElementById('statusMarcado');
    a.innerText = 'Cancelada';
    var c = document.getElementById('dropdownMenuStatus')
    c.style.display = 'none';
}

function reativada(){
    var a = document.getElementById('statusMarcado');
    a.innerText = 'Reativada';
    var c = document.getElementById('dropdownMenuStatus')
    c.style.display = 'none';
}

//Input Tipo de Data//

function aparecerDropdownTipoDeData(){
    var b = document.getElementById('dropdownMenuTipoDeData');
    b.style.display = 'block';
    var d = document.getElementById('tipoDeData');
    d.style.backgroundColor = 'rgb(231, 231, 231)';
    d.style.borderRadius = '0px';
}

function sumirDropdownTipoDeData(){
    var c = document.getElementById('dropdownMenuTipoDeData')
    c.style.display = 'none';
    var d = document.getElementById('tipoDeData');
    d.style.backgroundColor = 'white';
    d.style.borderRadius = '5px';
}

function permanecerDropdownTipoDeData(){
    var b = document.getElementById('dropdownMenuTipoDeData');
    b.style.display = 'block';
    var d = document.getElementById('tipoDeData');
    d.style.borderRadius = '0px';
    d.style.borderBottomColor = 'orange';
    d.style.backgroundColor = 'rgb(231, 231, 231)';
}

function sairDropdownTipoDeData(){
    var c = document.getElementById('dropdownMenuTipoDeData')
    c.style.display = 'none';
    var d = document.getElementById('tipoDeData');
    d.style.borderRadius = '5px';
    d.style.borderBottomColor = 'gray';
    d.style.backgroundColor = 'white';
}

function dataDeLancamento(){
    var a = document.getElementById('tipoDeDataMarcado');
    a.innerText = 'Todos';
    var c = document.getElementById('dropdownMenuTipoDeData')
    c.style.display = 'none';
}

function dataDeVencimento(){
    var a = document.getElementById('tipoDeDataMarcado');
    a.innerText = 'Não Paga';
    var c = document.getElementById('dropdownMenuTipoDeData')
    c.style.display = 'none';
}

function dataDePagamento(){
    var a = document.getElementById('tipoDeDataMarcado');
    a.innerText = 'Aguardando Pagamento';
    var c = document.getElementById('dropdownMenuTipoDeData')
    c.style.display = 'none';
}

function dataDeEstorno(){
    var a = document.getElementById('tipoDeDataMarcado');
    a.innerText = 'Estornada';
    var c = document.getElementById('dropdownMenuTipoDeData')
    c.style.display = 'none';
}


//Função de mostrar resultado da pesquisa//

function mostrarDivResultadoConsulta(){
    var a1 = document.getElementById('cabecalho');
    var a2 = document.getElementById('rodapeCabecalho');
    var a3 = document.getElementById('bnbLogo');
    var a4 = document.getElementById('titulo');
    var a5 = document.getElementById('rodape');
    var a6 = document.getElementById('tituloRodape');
    var a7 = document.getElementById('paragrafoRodape');
    var a8 = document.getElementById('controleTar');
    var a9 = document.getElementById('rodapeControleTar');
    var a10 = document.getElementById('controleTarCorpo');
    var a11 = document.getElementById('quadrosBusca');
    var a12 = document.getElementById('dropdownMenuTipoDeCobranca');
    var a13 = document.getElementById('controleTarCorpo2');
    var a14 = document.getElementById('controleTar2');
    var a15 = document.getElementById('body');
    var divResultado = document.getElementById('divResultadoConsulta');

    a1.style.filter = 'blur(10px)';
    a2.style.filter = 'blur(10px)';
    a3.style.filter = 'blur(10px)';
    a4.style.filter = 'blur(10px)';
    a5.style.filter = 'blur(10px)';
    a6.style.filter = 'blur(10px)';
    a7.style.filter = 'blur(10px)';
    a8.style.filter = 'blur(10px)';
    a9.style.filter = 'blur(10px)';
    a10.style.filter = 'blur(10px)';
    a11.style.filter = 'blur(10px)';
    a12.style.filter = 'blur(10px)';
    a13.style.filter = 'blur(10px)';
    a14.style.filter = 'blur(10px)';
    a15.style.overflow = 'hidden';
    divResultado.style.display = 'block';
}

function fecharDivResultadoConsultaSemRetorno(){
    var a1 = document.getElementById('cabecalho');
    var a2 = document.getElementById('rodapeCabecalho');
    var a3 = document.getElementById('bnbLogo');
    var a4 = document.getElementById('titulo');
    var a5 = document.getElementById('rodape');
    var a6 = document.getElementById('tituloRodape');
    var a7 = document.getElementById('paragrafoRodape');
    var a8 = document.getElementById('controleTar');
    var a9 = document.getElementById('rodapeControleTar');
    var a10 = document.getElementById('controleTarCorpo');
    var a11 = document.getElementById('quadrosBusca');
    var a12 = document.getElementById('dropdownMenuTipoDeCobranca');
    var a13 = document.getElementById('controleTarCorpo2');
    var a14 = document.getElementById('controleTar2');
    var a15 = document.getElementById('body');
    var divResultado = document.getElementById('divResultadoConsulta');

    a1.style.filter = 'blur(0px)';
    a2.style.filter = 'blur(0px)';
    a3.style.filter = 'blur(0px)';
    a4.style.filter = 'blur(0px)';
    a5.style.filter = 'blur(0px)';
    a6.style.filter = 'blur(0px)';
    a7.style.filter = 'blur(0px)';
    a8.style.filter = 'blur(0px)';
    a9.style.filter = 'blur(0px)';
    a10.style.filter = 'blur(0px)';
    a11.style.filter = 'blur(0px)';
    a12.style.filter = 'blur(0px)';
    a13.style.filter = 'blur(0px)';
    a14.style.filter = 'blur(0px)';
    a15.style.overflow = 'auto';
    divResultado.style.display = 'none';
}

//Função de cadastrar tarifas//

function clicarCadastroTarifa(){
    var a1 = document.getElementById('cabecalho');
    var a2 = document.getElementById('rodapeCabecalho');
    var a3 = document.getElementById('bnbLogo');
    var a4 = document.getElementById('titulo');
    var a5 = document.getElementById('rodape');
    var a6 = document.getElementById('tituloRodape');
    var a7 = document.getElementById('paragrafoRodape');
    var a8 = document.getElementById('controleTar');
    var a9 = document.getElementById('rodapeControleTar');
    var a10 = document.getElementById('controleTarCorpo');
    var a11 = document.getElementById('quadrosBusca');
    var a12 = document.getElementById('dropdownMenuTipoDeCobranca');
    var a13 = document.getElementById('controleTarCorpo2');
    var a14 = document.getElementById('controleTar2');
    var a15 = document.getElementById('body');
    var divResultado = document.getElementById('divResultadoCadastrarCobranca');

    a1.style.filter = 'blur(10px)';
    a2.style.filter = 'blur(10px)';
    a3.style.filter = 'blur(10px)';
    a4.style.filter = 'blur(10px)';
    a5.style.filter = 'blur(10px)';
    a6.style.filter = 'blur(10px)';
    a7.style.filter = 'blur(10px)';
    a8.style.filter = 'blur(10px)';
    a9.style.filter = 'blur(10px)';
    a10.style.filter = 'blur(10px)';
    a11.style.filter = 'blur(10px)';
    a12.style.filter = 'blur(10px)';
    a13.style.filter = 'blur(10px)';
    a14.style.filter = 'blur(10px)';
    a15.style.overflow = 'hidden';
    divResultado.style.display = 'block';
}

function fecharDivCadastrarTarifa(){
    var a1 = document.getElementById('cabecalho');
    var a2 = document.getElementById('rodapeCabecalho');
    var a3 = document.getElementById('bnbLogo');
    var a4 = document.getElementById('titulo');
    var a5 = document.getElementById('rodape');
    var a6 = document.getElementById('tituloRodape');
    var a7 = document.getElementById('paragrafoRodape');
    var a8 = document.getElementById('controleTar');
    var a9 = document.getElementById('rodapeControleTar');
    var a10 = document.getElementById('controleTarCorpo');
    var a11 = document.getElementById('quadrosBusca');
    var a12 = document.getElementById('dropdownMenuTipoDeCobranca');
    var a13 = document.getElementById('controleTarCorpo2');
    var a14 = document.getElementById('controleTar2');
    var a15 = document.getElementById('body');
    var divResultado = document.getElementById('divResultadoCadastrarCobranca');

    a1.style.filter = 'blur(0px)';
    a2.style.filter = 'blur(0px)';
    a3.style.filter = 'blur(0px)';
    a4.style.filter = 'blur(0px)';
    a5.style.filter = 'blur(0px)';
    a6.style.filter = 'blur(0px)';
    a7.style.filter = 'blur(0px)';
    a8.style.filter = 'blur(0px)';
    a9.style.filter = 'blur(0px)';
    a10.style.filter = 'blur(0px)';
    a11.style.filter = 'blur(0px)';
    a12.style.filter = 'blur(0px)';
    a13.style.filter = 'blur(0px)';
    a14.style.filter = 'blur(0px)';
    a15.style.overflow = 'auto';
    divResultado.style.display = 'none';
}