
# principio SOLID -

SOLID - CONCEITO: Single responsability | Liskov Substitution Principle | Dependency Inversion
O termo SOLID é um acrônimo para cinco postulados de design, destinados a facilitar a compreensão, o desenvolvimento e a manutenção de software.

**Single responsability Principle:**
cada arquivo tem uma unica responsabilidade
   SoC: Separation of Concerns (Separação de preocupações) é um principio de engenharia de software, que visa separar preocupações, ou seja, modularizar aplicação de forma que cada módulo esteja focado em resolver apenas um único problema.
Dependency Inversion
  Permite que as responsabilidades sejam separadas. Um exemplo disso no arquivo appointments.routes, as rotas não
precisam se preocupar como os dados são, nem com o repositorio e nem com a regra de negócio. Ele deve ter apenas a
funcionalidade receber uma requisição e retornar uma resposta
 - no projeto separamos o que é regra de negócio das coisas que é transformação de dados
 - tudo que é transformação de dados(tudo o que recebemos de dados de uma forma e precisamos transformar em outra, pq é assim que a aplicação precisa que seja feito, a gente deixa na rota)
 - tudo o que é regra de negócio a gente coloca dentro do service (a gente executa esse service na rota)

**Liskov Substitution Principle:**
  É responsabilidade da camada de domínio definir quais metodos e retornos o repositorio dentro da camada de infra(typeorm) vai ter. Isso é feito criando uma interface dentro de um diretorio Repository que fica dentro da camada de dominio. Resumindo,isso garante que as camadas de infra que tem integrações com outras bibliotecas possam ser substituídas, porém é necessario definir um conjunto de regras

**Dependency Inversion (usado no constructor):**
  Permite que todos os services diferentes que estejam usando o repositório de appointments estejam utilizando
o mesmo repositório;



# DTO -
Objeto de Transferência de Dados, é um padrão de projeto de software usado para transferir dados entre subsistemas de um software. DTOs são frequentemente usados em conjunção com objetos de acesso a dados para obter dados de um banco de dados


# DDD - Domain driven design
É uma metodologia que se refere a estrutura/arquitetura do projeto. Nem todos os conceitos dessa metodologia são aplicáveis para todas as aplicações

Domínio: Área de conhecimento daquele módulo/arquivo

* Camada/pasta de Infra:
Ferramentas que escolhemos para se relacionar com a camada de domínio/aplicação
Só colocamos coisas na camada de infra que um dia podem mudar

* Estrutura do projeto:
Que é compartilhado entre mais de um módulo fica no diretorio shared

# Singleton
Singleton é um padrão de projeto de software. Este padrão garante a existência de apenas uma instância de uma classe, mantendo um ponto global de acesso ao seu objeto.









# Injeção de dependencia
O padrão de injeção de dependência visa remover dependências desnecessárias entre as classes ou torná-las mais suaves e ter um design de software que seja fácil de manter e evoluir.
Injeção de Dependência, que é na verdade uma das formas de se fazer a inversão de controle e assim, garantir um baixo acoplamento em uma cadeia de classes.

# Controller
O controller se comunica apenas com a Rota e com o Service

# Service
O service é responsável pelo:
 * Recebimento das informações
 * Tratativa de erros/excessões
 * Acesso ao repositório
 * Acesso à entidade/models

# Entity/model
É um arquivo usado para descrever/ser modelo de uma funcionalidade. Sempre que se referir a esta funcionalidade é usado esse arquivo como referencia. Ex: agendamento.
O arquivo de model é lido no momento que geramos uma migration para criação da tabela no banco. Isso é possivel usando o typeorm com o auxilio de decorators.


# Repository
Tem um repositorio para cada model/interface
Vai ser responsavel pelas operações/persistencia com o banco de dados


# MongoDB
É um banco não-relacional
É recomendável ser usado quando você tem uma larga escala de dados(muitos dados entrando/sendo alterados) e
pouco relacionamento entre esses dados
**Obs:**
- Não tem migrations. Conforme vc vai usando o banco, ele vai se adaptando.
- [Ponto negativo] Quando a gente tem uma larga escala de dados e se por algum motivo a gente precisar mudar esses dados a gente vai ter que fazer uma migração meio que manual

**Dados que normalmente são salvos dentro do mongoDB**
status do progresso de um video,
notificações,
são mais dados brutos que não tem relacionamentos
