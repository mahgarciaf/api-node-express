# Tópicos Importantes
(Questões da prova)

- O que é o Node.js?
		>> Ambiente backend propício para executar requisições do javascript
		>> tem acesso ao browser e arquivos
- Para que serve o NPM? O que é o NPM?
		>> Gerencia os pacotes, dependências, bibliotecas (ex. package.json)
		>> instala e desinstala os pacotes do projeto através do package.json
		>> é no package.json em que está a versão das dependências
		>> npm i -> reinstala os pacotes
		>> composer -> gerenciador
- Para que serve o Nodemon?
		>> Roda de novo os servers
		>> é uma biblioteca
		>> ao rodar o script com o nodemon ele sobe no servidor -> ao alterar e salvar algo no projeto, ele automaticamente roda o servidor novamente
		>> torna o fluxo de desenvolvimento mais produtivo
		>> toda atualização que acontece, ele roda automaticamente o servidor novamente
- O que é uma API?
    >> Interface de comunicação entre aplicações
		>> API -> Aplication Programing Interface
		>> uma interface de comunicação, na qual você não possui acesso à lógica, mas que através de comandos ela te fornece interação com o sistema
		>> API Rest -> rota -> é um tipo de API
		>> manipulação através de recursos lógicos, através de solicitações HTTP onde o método(GET, POST, PUT, PATCH e DELETE) utilizado tem um significado específico.
		>> conceta softwares, sistemas e aplicativos
		>> API Restfull -> get, post, put, delete
		>> normalmente a resposta é um arquivo json
- O que é uma API RESTfull?
    >> Padrão de arquitetura de API, modo de escrever as regras, a maioria dessas APIs utilizam o formato JSON
- Framework
		>> conjunto de ferramentas e recursos que alguém programou e é utiliza conforme a sua necessidade
		>> ex: o scrum é um framework que não é de programação
		>> ex: bootstrap -> conjunto de componentes e interfaces -> os botões já vêm prontos, mas pode ser adaptado; você utiliza conforme sua necessidade, não utilizando de toda a capacidade do framework
		>> não necessariamente faz parte da área de programação
- Para que serve o Framework Express?
    >> Auxilia na construção de APIs de node, um dos mais populares e mais consistentes
		>> é uma biblioteca que nos auxilia na programação das rotas, requisição e resposta
		>> evita que você programe tudo
		>> ajuda com um conjunto de ferramentas para construir uma API Rest
- O que é nodemon?
    >> Biblioteca que ajuda no desenvolvimento e monitora todas as modificações do projeto
- O que é express?
    >> Pacote ligado ao escopo inteiro do projeto
- Para que serve a extenção ThunderClient?
    >> é como se fosse o cliente do projeto
    >> na maioria dos projetos usa-se outro cliente -> Postman
    >> tem também o insomnia
- O que é o Midleware?
		>> forma de organizar uma aplicação com uma sequência de funções específicas para chegar em uma resposta
		>>  pega o dado, cria funções que serão utilizadas,
		>> são funcionalidades que auxiliam para executar (?)
		>> é um padrão de projeto midleware -> muito utilizado em hardware
		>> é um padrão de projeto que executa uma sequência de etapas e o fluxo de execução passa por cada uma de etapa, e essas etapas de execução são os chamados midlewares
- Padrão MVC
		>> organizar o projeto em algumas camadas -> visualização, controle (recebe os dados do usuário, controlar o fluxo - acesso ao banco e repositórios, dar resposta ao usuário, processamento), interface (entrada e saída, contato com o usuário), model (cuida das regras de negócio - ex. nome de usuário com x letras, sem números - regras lógicas que garantem integridade lógica ao sistema)
		>> É a divisão do sistema em camadas, forma de organzizar a aplicação em camadas de responsabilidade
		>>  model view e control

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