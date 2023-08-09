# Tópicos Importantes
(Questões da prova)

- O que é o Node.js?
- Para que serve o NPM?
- Para que serve o Nodemon?
- O que é uma API?
    >> Interface de comunicação entre aplicações
- O que é uma API RESTfull?
    >> Padrão de arquitetura de API, modo de escrever as regras, a maioria dessas APIs utilizam o formato JSON
- Para que serve o Framework Express?
    >> Auxilia na construção de APIs de node, um dos mais populares e mais consistentes
- O que é nodemon?
    >> Biblioteca que ajuda no desenvolvimento e monitora todas as modificações do projeto
- O que é express?
    >> Pacote ligado ao escopo inteiro do projeto
- Para que serve a extenção ThunderClient?
    >> é como se fosse o cliente do projeto
    >> na maioria dos projetos usa-se outro cliente -> Postman
    >> tem também o insomnia

# Comandos

obs -> o local host ta sendo usado apenas com o http
para usar a pasta do projeto do Thunder client -> sttings -> ligar o primeiro icone


### NPM
    >> npm init (cria o package.json com as informações iniciais do projeto)
    >> npm run [nome do script] (roda o comando definido no script do package.json)
        >> "npm run dev"


### GIT

    >> git config --global user.name "Marielle" (configura o usuário)
    >> git config --global user.email "marielle.gfpaulino@gmail.com"
    >> git --list (para verificar o usuário cadastrado e se a url do repositório já foi inicializada / para sair, usar :q)
    >> git init (para inicializar e criar o repositório)
    >> git remote add origin [url do repositório]
    >> git status (mpstra o status atual dos arquivos)
    >> git add . (adiciona os arquivos alterados no stage, repositório local)
    >> git commit -m [texto do commit]
    >> git branch -M main
    >> git push -u origin main (manda os commits locais para o github)
    >> git pull (puxa a versão mais atual do projeto que está no github)
    >> git fetch (verifica se tem novos commits)