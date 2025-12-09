import express from "express"
import session from "express-session"
import cookies from "cookie-parser"

const app = express()
const port = 3000
const equipes = [{nome:"RXcoders",nomeCapitao:"RYAN",numero:"33"}]
const jogadores = []



app.use(session({
    secret:"minh4cha43secr7ta6",
    resave: true, 
    saveUninitialized: true, 
    
    cookie:{
        maxAge: 1000 * 60 * 15 
    }    
}))
app.use(express.urlencoded({extended : true}))
app.use(cookies())
app.get("/",verificaLogin,(req,res)=>{
    let ultimoAcesso = req.cookies?.ultimoAcesso
    const data = new Date()
    res.cookie("ultimoAcesso",data.toLocaleString())
    res.setHeader("Content-Type","text/html")
    res.write(`
            
        <html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Projetos para Internet</title>
                    <style>
                    body {
                       background: linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%);
                    }
                        h1 {
                            text-align: center;
                            margin-top: 20px;
                            margin-bottom: 20px;
                        }
                        main {
                            width: 100%;
                            height: 100%;
                            margin: auto;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                        }
                        button{
                            margin-right: 10px;
                        }
                    </style>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">E-sports</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadJogador">Cadastrar jogador</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadEquipe">Cadastrar Equipe</a>
                                </li>
                                 <li class="nav-item">
                                <a class="nav-link" href="/logout">Sair</a>
                                </li>
                            </ul>
                            <div class="conteiner-fluid">
                                <div class="d-flex">
                                    <div class="p-2">
                                        <h4> Ultimo acesso: ${ultimoAcesso || "Primeiro acesso!"} </h4>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </nav>
                    <main>

                    </main>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                </body>
            </html>
        
        `)
        res.end
})
app.get("/cadJogador",verificaLogin,(req,res)=>{
    let html = `<html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Projetos para Internet</title>
                    <style>
                    body {
                       background: linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%);
                    }
                        h1 {
                            text-align: center;
                            margin-top: 20px;
                            margin-bottom: 20px;
                            color:white;
                        }
                        main {
                            width: 100%;
                            height: 100%;
                            margin: auto;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                        }
                             form{
                            width: 70%;
                            heigth:80%;
                            border-radius: 18px;
                           box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                            background-color: rgba(255, 255, 255, 0.2);
                            backdrop-filter: blur(18px);
                            webkit-backdrop-filter: blur(10px);
                            filter: drop-shadow(0 0 10px rgba(0,0,0,0.1));
                            padding: 5px;

                        }

                        button{
                            margin-right: 10px;
                        }
                    </style>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">E-sports</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadJogador">Cadastrar jogador</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadEquipe">Cadastrar Equipe</a>
                                </li>
                                 <li class="nav-item">
                                <a class="nav-link" href="/logout">Sair</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                    <main>
                        <form class="row g-3" method="POST" action="/veriForm">
                        <h1>Cadastrar jogadores</h1>
                            <div class="col-md-6">
                                <label for="text" class="form-label"style="color:white;">Nome</label>
                                <input type="text" class="form-control" id="nome" name="nome">
                            </div>
                            <div class="col-md-6">
                                <label for="text" class="form-label"style="color:white;">Nick in game</label>
                                <input type="text" class="form-control" id="nick" name="nick">
                            </div>
                            <div class="col-12">
                                <label for="text" class="form-label"style="color:white;">Estilo de jogo</label>
                                <input type="text" class="form-control" id="estilo" name="estilo">
                            </div>
                            <div class="col-12">
                                <label for="text" class="form-label"style="color:white;">Patente</label>
                                <input type="text" class="form-control" id="patente" name="patente">
                            </div>
                            <div class="col-md-6">
                                <label for="text" class="form-label"style="color:white;">genero</label>
                                <select class="form-select" id="genero" name="genero">
                                    <option selected disabled value="">Escolha</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="text" class="form-label"style="color:white;">Equipe</label>
                                <select id="equipe" class="form-select" name="equipe">
                                <option selected>Escolha</option>
                                `
                        if(equipes.length != 0){
                                for(let i =0; i<equipes.length;i++){
                                    html+=
                                    `
                                     <option>${equipes[i].nome}</option>
                                    `
                                }
                            html+=`
                            </select>
                            </div>
                             <div class="col-12">
                                <a href="/"><button type="button" class="btn btn-danger">Cancelar</button></a>
                                <button type="submit" class="btn btn-primary">Cadastrar Jogador</button>
                            </div>
                        </form>
                    </main>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                </body>
            </html>
                            `
                        }else{
                            html+=`
                                <div class="col-md-4">
                                <label for="text" class="form-label"style="color:white;">Equipe</label>
                                <select id="equipe" class="form-select" name="equipe">
                                <option selected class="text-danger">Não foi possivel encontrar as esquipes...</option>
                                 </select>
                            </div>
                             <div class="col-12">
                                <a href="/"><button type="button" class="btn btn-danger">Cancelar</button></a>
                                <button type="submit" class="btn btn-primary">Cadastrar Jogador</button>
                            </div>
                        </form>
                    </main>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                </body>
            </html>
                            `
                        }
                        res.write(html)
        
})
app.post("/veriForm",verificaLogin,(req,res)=>{
    let nome = req.body.nome
    let nick = req.body.nick
    let estilo = req.body.estilo
    let patente = req.body.patente
    let genero = req.body.genero
    let equipe = req.body.equipe
    if(nome && nick && estilo && patente && genero && equipe){
        jogadores.push({nome,nick,estilo,patente,genero,equipe})
        res.redirect("/listaJogadores")
    }else{
         let html = `<html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Projetos para Internet</title>
                    <style>
                    body {
                        background: linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%);
                    }
                        h1 {
                            text-align: center;
                            margin-top: 20px;
                            margin-bottom: 20px;
                            color:white;
                        }
                        main {
                            width: 100%;
                            height: 100%;
                            margin: auto;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                        }
                             form{
                            width: 70%;
                            heigth:80%;
                            border-radius: 18px;
                           box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                            background-color: rgba(255, 255, 255, 0.2);
                            backdrop-filter: blur(18px);
                            webkit-backdrop-filter: blur(10px);
                            filter: drop-shadow(0 0 10px rgba(0,0,0,0.1));
                            padding: 5px;

                        }
                        button{
                            margin-right: 10px;
                        }
                    </style>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">E-sports</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadJogador">Cadastrar jogador</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadEquipe">Cadastrar Equipe</a>
                                </li>
                                 <li class="nav-item">
                                <a class="nav-link" href="/logout">Sair</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                    <main>
                        <form class="row g-3" method="POST" action="/veriForm">
                        <h1>Cadastrar jogadores</h1>
                            <div class="col-md-6">
                                <label for="text" class="form-label"style="color:white;">Nome</label>
                                <input type="text" class="form-control" id="nome" name="nome">
                                `
            if(!nome){
                html+=`
                    <span class="text-danger">Preencha o seu nome! campo obrigatorio</span>
                `
            }
            html+=`
                </div>
                <div class="col-md-6">
                                <label for="text" class="form-label"style="color:white;">Nick in game</label>
                                <input type="text" class="form-control" id="nick" name="nick">
            `
            if(!nick){
                 html+=`
                    <span class="text-danger">Preencha o seu nick do jogo! campo obrigatorio</span>
                `
            }
            html+=`
                </div> 
                <div class="col-12">
                                <label for="text" class="form-label"style="color:white;">Estilo de jogo</label>
                                <input type="text" class="form-control" id="estilo" name="estilo">
                `
            if(!estilo){
                  html+=`
                    <span class="text-danger">Preencha o seu estilo de jogo! campo obrigatorio</span>
                `
            }
            html+=`
               </div>
                            <div class="col-12">
                                <label for="text" class="form-label"style="color:white;">Patente</label>
                                <input type="text" class="form-control" id="patente" name="patente"> 
            `
            if(!patente){
                 html+=`
                    <span class="text-danger">Preencha a sua patente! campo obrigatorio</span>
                `
            }
            html+=`
                </div>
                            <div class="col-md-6">
                                <label for="text" class="form-label"style="color:white;">genero</label>
                                <select class="form-select" id="genero" name="genero">
                                    <option selected disabled value="">Escolha</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                </select>
            `
            if(!genero){
                 html+=`
                    <span class="text-danger">Preencha seu genero! campo obrigatorio</span>
                `
            }
            html+=`
                </div>
            <div class="col-md-4">
                                <label for="text" class="form-label"style="color:white;">Equipe</label>
                                <select id="equipe" class="form-select" name="equipe">
                                <option selected>Escolha</option>
            `
             if(equipes.length != 0){
                                for(let i =0; i<equipes.length;i++){
                                    html+=
                                    `
                                     <option>${equipes[i].nome}</option>
                                    `
                                }
                            html+=`
                            </select>
                            `
                            if(!equipe){
                                html+=`
                    <span class="text-danger">Escolha a sua equipe! campo obrigatorio</span>
                `
                            }
                            html+=`</div>`
                        }else{
                            html+=`
                                <div class="col-md-4">
                                <label for="text" class="form-label"style="color:white;">Equipe</label>
                                <select id="equipe" class="form-select" name="equipe">
                                <option selected class="text-danger">Não foi possivel encontrar as esquipes...</option>
                                 </select>
                            </div>
                            `
                        }
                    html+=`
                         <div class="col-12">
                                <a href="/"><button type="button" class="btn btn-danger">Cancelar</button></a>
                                <button type="submit" class="btn btn-primary">Cadastrar Jogador</button>
                            </div>
                        </form>
                    </main>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                </body>
            </html>
                    `
            res.write(html)
    }
})
app.get("/listaJogadores",verificaLogin,(req,res)=>{
    let html = `
          <html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Projetos para Internet</title>
                    <style>
                    body {
                       background: linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%);
                    }
                        h1 {
                            text-align: center;
                            margin-top: 20px;
                            margin-bottom: 20px;
                            color:white;
                        }
                        main {
                            width: 100%;
                            height: 100%;
                            flex-direction: colmun
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                        }
                        button{
                            margin-right: 10px;
                        }
                    </style>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">E-sports</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadJogador">Cadastrar jogador</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadEquipe">Cadastrar Equipe</a>
                                </li>
                                 <li class="nav-item">
                                <a class="nav-link" href="/logout">Sair</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                    <main>
                        <h1>Lista de jogadores</h1>
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Nick</th>
                            <th scope="col">Estilo</th>
                            <th scope="col">Patente</th>
                            <th scope="col">genero</th>
                            <th scope="col">Equipe</th>
                            </tr>
                        </thead>
                        <tbody>
    `
    for(let i=0;i<jogadores.length;i++){
        html+=`
                <tr>
                <th scope="row">${i+1}</th>
                <td>${jogadores[i].nome}</td>
                <td>${jogadores[i].nick}</td>
                <td>${jogadores[i].estilo}</td>
                <td>${jogadores[i].patente}</td>
                <td>${jogadores[i].genero}</td>
                <td>${jogadores[i].equipe}</td>
                </tr>
        `
    }
    html+=`
         </tbody>
         </table>
          <a href="/"><button type="button" class="btn btn-danger">Voltar</button></a>
           <a href="/cadJogador"><button type="button" class="btn btn-primary">Cadastrar mais</button></a>
        </main>
                    
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                </body>
            </html>   
    `
    res.write(html)
})
app.get("/cadEquipe",verificaLogin,(req,res)=>{
    res.write(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Projetos para Internet</title>
                    <style>
                    body {
                       background: linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%);
                    }
                        h1 {
                            text-align: center;
                            margin-top: 20px;
                            margin-bottom: 20px;
                            color:white;
                        }
                        main {
                            width: 100%;
                            height: 100%;
                            margin: auto;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                        }
                        button{
                            margin-right: 10px;
                        }
                        form{
                            width: 70%;
                            heigth:80%;
                            border-radius: 18px;
                            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                            background-color: rgba(255, 255, 255, 0.2);
                            backdrop-filter: blur(18px);
                            webkit-backdrop-filter: blur(10px);
                            filter: drop-shadow(0 0 10px rgba(0,0,0,0.1));
                            padding: 5px;

                        }
                    </style>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">E-sports</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadJogador">Cadastrar jogador</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadEquipe">Cadastrar Equipe</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/logout">Sair</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                    <main>
                        <form class="row g-3" method="POST" action="/veriEquipe">
                        <h1>Cadastrar equipe</h1>
                            <div class="col-md-6">
                                <label for="text" class="form-label"style="color:white;">Nome da equipe</label>
                                <input type="text" class="form-control" id="nome" name="nome">
                            </div>
                            <div class="col-md-6">
                                <label for="text" class="form-label"style="color:white;">Nome do capitão</label>
                                <input type="text" class="form-control" id="nomeCapitao" name="nomeCapitao">
                            </div>
                            <div class="col-12">
                                <label for="text" class="form-label"style="color:white;">Numero de contato</label>
                                <input type="text" class="form-control" id="numero" name="numero">
                            </div>
                           <div class="col-12">
                                <a href="/"><button type="button" class="btn btn-danger">Cancelar</button></a>
                                <button type="submit" class="btn btn-primary">Cadastrar Equipe</button>
                            </div>
                        </form>
                    </main>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                </body>
            </html>    
        `)
})
app.post("/veriEquipe",verificaLogin,(req,res)=>{
    let {nome,nomeCapitao,numero} = req.body
    if(nome && nomeCapitao && numero){
        equipes.push({nome,nomeCapitao,numero})
        res.redirect("/listaEquipe")
    }else{
        let html = `
            <html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Projetos para Internet</title>
                    <style>
                    body {
                        background: linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%);
                    }
                        h1 {
                            text-align: center;
                            margin-top: 20px;
                            margin-bottom: 20px;
                            color:white;
                        }
                        main {
                            width: 100%;
                            height: 100%;
                            margin: auto;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                        }
                        button{
                            margin-right: 10px;
                        }
                            form{
                            width: 70%;
                            heigth:80%;
                            border-radius: 18px;
                            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                            background-color: rgba(255, 255, 255, 0.2);
                            backdrop-filter: blur(18px);
                            webkit-backdrop-filter: blur(10px);
                            filter: drop-shadow(0 0 10px rgba(0,0,0,0.1));
                            padding: 5px;

                        }
                    </style>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">E-sports</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadJogador">Cadastrar jogador</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadEquipe">Cadastrar Equipe</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/logout">Sair</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                    <main>
                        <form class="row g-3" method="POST" action="/veriEquipe">
                        <h1>Cadastrar equipe</h1>
                            <div class="col-md-6">
                                <label for="text" class="form-label"style="color:white;">Nome da equipe</label>
                                <input type="text" class="form-control" id="nome" name="nome">
        `
        if(!nome){
            html+=`
                <span class="text-danger"> Digite o nome da equipe! Campo obrigatorio!</span> 
            `
        }
        html+=`
            </div>
                            <div class="col-md-6">
                                <label for="text" class="form-label"style="color:white;">Nome do capitão</label>
                                <input type="text" class="form-control" id="nomeCapitao" name="nomeCapitao">
        `
        if(!nomeCapitao){
            html+=`
                 <span class="text-danger"> Digite o nome do capitão da equipe! Campo obrigatorio!</span> 
            `
        }
        html+=`
                   </div>
                            <div class="col-12">
                                <label for="text" class="form-label"style="color:white;">Numero de contato</label>
                                <input type="text" class="form-control" id="numero" name="numero">  
        `
        if(!numero){
             html+=`
                 <span class="text-danger"> Digite o numero do responsavel da equipe! Campo obrigatorio!</span> 
            `
        }
        html+=`
                    </div>
                           <div class="col-12">
                                <a href="/"><button type="button" class="btn btn-danger">Cancelar</button></a>
                                <button type="submit" class="btn btn-primary">Cadastrar Equipe</button>
                            </div>
                        </form>
                    </main>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                </body>
            </html>    
        `
        res.write(html)
    }
})
app.get("/listaEquipe",verificaLogin,(req,res)=>{
    let html =`
         <html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Projetos para Internet</title>
                    <style>
                    body {
                       background: linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%);
                    }
                        h1 {
                            text-align: center;
                            margin-top: 20px;
                            margin-bottom: 20px;
                            color:white;
                        }
                        main {
                            width: 100%;
                            height: 100%;
                          flex-direction: colmun
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                        }
                        button{
                            margin-right: 10px;
                        }
                    </style>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">E-sports</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadJogador">Cadastrar jogador</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/cadEquipe">Cadastrar Equipe</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                    <main>
                        <h1>Lista de Equipes</h1>
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome da equipe</th>
                            <th scope="col">Nome do capitão</th>
                            <th scope="col">Contaro</th>
                            </tr>
                        </thead>
                        <tbody>

    `
    for(let i=0;i<equipes.length;i++){
        html+=`
                <tr>
                <th scope="row">${i+1}</th>
                <td>${equipes[i].nome}</td>
                <td>${equipes[i].nomeCapitao}</td>
                <td>${equipes[i].numero}</td>
                </tr>
        `
    }
    html+=`
         </tbody>
         </table>
          <a href="/"><button type="button" class="btn btn-danger">Voltar</button></a>
           <a href="/cadEquipe"><button type="button" class="btn btn-primary">Cadastrar mais</button></a>
        </main>
                    
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                </body>
            </html>   
    `
    res.write(html)
})
app.get("/login",(req, res) => {
    res.send(`
        <html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Projetos para Internet</title>
                    <style>
                    body {
                       background: linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%);
                    }
                        h1 {
                            text-align: center;
                            color:white;
                        }
                        main {
                            width: 100%;
                            height: 100vh;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                        }
                        form{
                            width: 100%;
                            max-width: 400px;
                            padding: 20px;
                            border-radius: 10px;
                            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                            background-color: rgba(255, 255, 255, 0.2);
                            backdrop-filter: blur(18px);
                            webkit-backdrop-filter: blur(10px);
                            filter: drop-shadow(0 0 10px rgba(0,0,0,0.1));
                        }
                        button{
                            margin-right: 10px;
                        }
                        input{
                            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                        }
                    </style>
                </head>
                <body>
                    <main>
                        <div class="row">
                            <i class="bi bi-person-circle" style="font-size: 5rem; display: flex; justify-content: center;color:white"></i>
                            <h1>Login</h1>
                        </div>
                        <form method='POST'>
                            <div class="mb-3">
                                <div class="row">
                                    <i class="bi bi-envelope-fill" style="font-size: 1.5rem; margin-right: 10px;color:white"></i>
                                    <label for="email" class="form-label"style="color:white;">Email</label>
                                </div>
                                <input type="text" class="form-control" id="email" " name="email">
                            </div>
                            <div class="mb-3">
                                <div class="row">
                                    <i class="bi bi-lock-fill" style="font-size: 1.5rem; margin-right: 10px;color:white"></i>
                                    <label for="senha" class="form-label" style="color:white;">Senha</label>
                                </div>
                                <input type="password" class="form-control" id="senha" name="senha">
                            </div>
                            <div class="row-md-3 align-items-end justify-content-end d-flex">
                                <button type="submit" class="btn btn-primary">Entrar</button>
                            </div>
                            
                        </form>
                    </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        </body>
    </html>

        `)
})
app.post("/login",(req,res)=>{
    const {email,senha} = req.body
    if(email == "admin" && senha == "admin"){
        req.session.dadosLogin={
            logado:true,
            nomeUser: "Administrador"
        }
        res.redirect("/")
    }else{
       res.write(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Projetos para Internet</title>
                    <style>
                    body {
                       background: linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%);
                    }
                        h1 {
                            text-align: center;
                            color: white;
                        }
                        main {
                            width: 100%;
                            height: 100vh;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                        }
                        form{
                            width: 100%;
                            max-width: 400px;
                            padding: 20px;
                            border-radius: 10px;
                            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                            background-color: rgba(255, 255, 255, 0.2);
                            backdrop-filter: blur(18px);
                            webkit-backdrop-filter: blur(10px);
                            filter: drop-shadow(0 0 10px rgba(0,0,0,0.1));
                        }
                        button{
                            margin-right: 10px;
                        }
                        input{
                            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                        }
                        .text{
                            color: #ff3d3dff;
                        }
                    </style>
                </head>
                <body>
                    <main>
                        <div class="row">
                            <i class="bi bi-person-circle" style="font-size: 5rem; display: flex; justify-content: center;color:white"></i>
                            <h1>Login</h1>
                        </div>
                        <form method='POST' action="/login">
                            <div class="mb-3">
                                <div class="row">
                                    <i class="bi bi-envelope-fill" style="font-size: 1.5rem; margin-right: 10px;color:white"></i>
                                    <label for="email" class="form-label"style="color:white;">Email</label>
                                </div>
                                <input type="text" class="form-control" id="email" name="email">
                            </div>
                            <div class="mb-3">
                                <div class="row">
                                    <i class="bi bi-lock-fill" style="font-size: 1.5rem; margin-right: 10px;color:white"></i>
                                    <label for="senha" class="form-label"style="color:white;">Senha</label>
                                </div>
                                <input type="password" class="form-control" id="senha" name="senha">
                            </div>
                            <div class="row-md-3 align-items-end justify-content-end d-flex">
                                <button type="submit" class="btn btn-primary">Entrar</button>
                            </div>
                             <div>
                                <span class="text">Usuario ou senha incorretos!</span>
                            </div>
                        </form>
                    </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        </body>
    </html>
        `)
    }
})
function verificaLogin(req,res,proximo){
    if(req.session?.dadosLogin?.logado){
        proximo()
    }else{
        res.redirect("/login")
    }
}
app.get("/logout", (req,res) =>{
    req.session.destroy()
    res.redirect("/login")
})
app.listen(port,()=>{
    console.log("Serivodr online na porta: 3000")
})