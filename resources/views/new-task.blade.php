<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/new-task.css">
    <title>Document</title>
</head>
<body>
    <div class="container d-flex justify-content-center">
        <col class="row">
            <div class="col-lg-9">
                <div for=post class="quadro" action="{{route('task.store')}}" enctype="multipart/form-data">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="titulo">
                                    <h1>Adicione uma nova tarefa</h1>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="name">
                                        <h2>Tarefa:</h2>
                                    <input type="text">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="description">
                                    <h2>Descricão:</h2>
                                    <textarea></textarea>
                                </div>
                            </div>

                            <div class="col-12 d-flex justify-content-center">
                                <div class="butto">
                                    <input type="submit" value="Salvar">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="buttons1">
        <div class="espaco-button1">
            <div class="quadro-button1">
                <a href="http://127.0.0.1:8000/"><div class="button1">
                <h2><</h2>
                </div></a>
            </div>
        </div>
    </div>
</body>
</html>