# Conceitos gerais

## HTML
É uma linguagem de marcação que tem as seguintes responsabilidades:
- Conteúdo;
- Semântica (tags);
- Estrutura

## CSS
É uma linguagem de estilos que tem as seguintes responsabilidades:
- Visual;

## Geral
- Call to action (cta) &rarr; botão principal ou botão de ação da página;

## Sobre UX (para Front-end)
- **Affordance** &rarr; é uma forma de medição da facilidade de uso e de quanto é intuitivo (entendimento) os elementos da sua interface para seus usuários e dessa forma identificar onde melhorar

## Dicas profissionais
- O compartilhamento de conhecimento leva à sedimenção do seu aprendizado. Aproveite!!
- Procure utilizar termos em **inglês** no seu código e deixe em **português** o nome dos arquivos HTML
- organize seus arquivos de código em pastas por tipo

## Sobre HTTP/HTTPS
- **Conceito** &rarr; São protocolos, ou seja, padrões de comunicação entre as máquinas dos usuários e os servidores de internet com ênfase em troca de informações de texto
- **Diferença entre eles** &rarr; o HTTP faz a comunicação sem segurança e as trocas de informações podem ser interceptadas mais facilmente. Já o HTTPS conta com uma criptografia nas informações trocadas com chaves conhecidas somente pela origem e pelo destino 
- **Fluxo básico** &rarr; Usuário digita endereço de um site (REQUESIÇÃO) e recebe (RESPOSTA) as informações do site encontrado
- **IP** &rarr; São os endereços reais que são buscados a cada requisição enviada a um servidor. Para facilitar nossa vida, protocolo permite acessar esses endereços pelos endereços de domínio (`www`) que são nomes mais fáceis de lembrar. A conversão de um endereço de domínio para um número de IP é feita com ajuda dos servidores DNS
- **Caminho** ou **Path** ou **Recurso** &rarr; é o acesso de informações mais internas e/ou específicas do servidor após seu endereço principal. Veja no exemplo, que é todo caminho após o `.com`. Ex: `http://facebook.com/marco.bruno.br/posts`
- **Query String** &rarr; Podemos acessar dentro desse caminho escolhido informações mais específicas adicionando uma query string para selecionar ou filtrar as respostas dessa requisição. Veja no ecemplo, todo o caminho colocado após o `posts` que seleciona um determinado post pelo seu id e seleciona apenas sua parte em formato texto. Ex: `http://facebook.com/marco.bruno.br/posts/?id=1&text=true`

## Sobre SSH
- **Conceito** &rarr; É um protocolo mais estreito e seguro com um determinado servidor como se você estivesse trabalhando dentro dele. A segurança da comunicação é feita com uso de chaves públicas, isto é, sua identificação ou credencial junto a esse servidor é feita pela chave gerado em sua máquina e cadastrada no servidor, sem necessidade de usar meios mais frágeis como login e senha





# HTML - Tópicos importantes

## **Tags**
- `<body>` &rarr; parte com conteúdo visível ao usário;
- `<head>` &rarr; parte de configurações e metadados não visível ao usuário;
- `<header>` &rarr; seção do cabeçalho do site
- `<nav>` &rarr; menu de navegação
- `<h1> a <h5>` &rarr; tags HTML para título e é recomendado usar para sites até `<h3>`
- `<a>` &rarr; Link ('a' de âncora) usado para definir a navegação do usuário para um lugar determinado no conteúdo do atributo `href`
- `<div>` &rarr; sem valor semântico e serve apenas para dividir ou separar conteúdos
- `<dl>` &rarr; chamada de description list, que serve para descrever um grupo de informação sobre alguma coisa, agrupando as informações de título com a tag description title `<dt>` e definindo sua descrição com define description `<dd>`

## Boas práticas
- Quando o botão for direcionar o usuário para outra página, pode ser a tag `a` (link) pois relamente se trata de um link para outra página
- Quando o botão servir para qualquer outra função que não um link para outra página, usar a tag `button`
- Para melhorar a acessibilidade e a pesquisa nos motores de busca (SEO), não aplique maiúsculas em textos no HTML. Deixe essa parte visual para o CSS
- Para melhorar SEO utilize a tag `strong` em textos de destaque direto no HTML e com uma classe nessa tag, configure o tipo de destaque no CSS, seja maiúsculas, bold, etc
- Procure implementar espaçamentos sempre para baixo, isto é, no elemento acima aplique `margin-bottom` como um efeito cascata para evitar efeitos colaterais mais sérios




# CSS - Tópicos importantes

## **Reset CSS**
Você construir o seu reset do CSS, mas pode utilizar opções prontas, como por exemplo:
- **Eric Meyer** &rarr; Indicado para maioria dos projetos 
- **Normalize** &rarr; Indicado para grandes projetos

## Herança de atributos com **INHERIT**
- Serve para que seja herdado valores de atributo do pai ou subescreva valores default de browsers

## Uso de **FONTS**
- Normalmente, prefira usar no máximo 3 famílias de fonte, exemplo: 300 (light), 400 (normal) e 700 (bold)
- Usar a tag link no HTML como o caminho das fontes que serão utilizados no site a partir do Google Fonts

## **FLOAT** - Principais regras de posicionamento
- Cria novo contexto (similar a uma nova camada) acima para o elemento com float deixando o espaço livre para outros elementos
- O elemento flutuante nunca irá sobrepor conteúdo de texto dos elementos que ocuparam o espaço vago do contexto anterior
- O tamanho do elemento com float é ajustado de linha inteira para o tamanho do seu conteúdo
- Como o elemento pai ignora o elemento com float, ele acaba perdendo o tamanho de sua altura que era ajustada de acordo com o tamanho desse elemento filho e para resolver precisa usar a propriedade “overflow: hidden” no elemento pai

## **PADDING/MARGIN** com valores resumidos
- Opção 1 &rarr; `padding: <top> <right> <bottom> <left>;`
- Opção 2 &rarr; `margin: <top e bottom> <right e left>;`
- Opção 3 &rarr; `padding: <top> <right e left> <bottom>;`

## Seletores de **tag | id | class** no CSS

### **tag**
- seleciona uma tag direto do HTML por meio do seu próprio nome
- no CSS, o seletor é usado direto pelo nome da tag no HTML
- influencia todas tags do HTML com o mesmo nome
### **id**
- identifica uma tag específica com um nome (id) único que não podem se repetir na página HTML
- facilita a aplicação de atributos e comportamentos específicos para esse elemento no CSS
- o seletor é usado com um sustenido (#) na frente do seu id determinado no HTML
### **class**
- pode ser utilizada mais de uma vez em várias tags;
- facilita mais a manutenção do código do que a utilização do `id`
- o seletor é usado com um ponto (.) na frente do nome da classe determinada no HTML

## propriedade **CLEAR**
- não permite que outros elementos flutuem na mesma linha dele;- força a quebra de sua linha para limpar qualquer elemento que esteja flutuando em determinada de acordo com o atributo
- `clear: right` &rarr; não permite elementos flutuando a sua direita
- `clear: left` &rarr; não permite elementos flutuando a sua esquerda
- `clear: both` &rarr; não permite elementos flutuando de qualquer lado

## Sobre **DISPLAY**
### **inline****
- deixa os elementos na mesma linha
- não permite definir width e height
- os elementos recebem comportamento de palavras (conteúdo)
- exemplos de tags com esse comportamento padrão: `a`
### **block**
- não deixa os elementos na mesma linha
- permite definir width e height
### **inline-block**
- deixa os elementos na mesma linha
- permite definir width e height
- os elementos recebem comportamento de palavras (conteúdo)

## Sobre **POSITION**
### **absolute**
- Cria novo contexto (similar a uma nova camada) acima para o elemento com `position: absolute` deixando o espaço livre abaixo dele ser ocupado por outros elementos
- O tamanho do elemento passa a ser definido pela largura e altura do seu conteúdo
- Trabalha com posicionamento absoluto em relação a página usando atributos do eixo **X** (top e bottom) e do eixo **Y** (left e right)
- Evite usar dois valores do mesmo eixo e procure usar pares de valores de eixos diferentes para o posicionamento correto
- Para centralizar elementos com esse position, posicione com valores dos eixos e depois para compensar as dimensões do elemento a centralizar, retire 50% do seu tamanho

## Sobre **Refatoração**
- Utilizar seletores de classes modificadoras sempre junto com sua respectiva classe principal. Ex: `.buttom-store.-last`
- Para deixar mais claro e performático nosso CSS utilizar o sinal de `**>**` entre os seletores de pais e filhos **diretos**

## Sobre **Valor de especificidade de seletores**
- A hierarquia é que as atribuições dos seletores de baixo subescrevem as atribuições dos seletores de cima com o mesmo valor de especificidade
- Esse valor de especificidade e a soma da força ou peso de cada seletor na linha de seleção
- podemos explicar a força ou peso da seguinte maneira &rarr; `tag = 1, class e pseudoclass = 10 e id = 100`, portanto a força/peso é obtida pela soma das especificidades do seletor. Ex: `nav#navigation-menu .action` tem um valor [(`tag nav` = 1) + (`class navigation-menu` = 10) + (`class action` = 10)] = 21
- Muitos atributos `important!` são usados sem necessidade pela má especificidade de seletores

## Sobre **Background**
- o `background-image` sobrescreve `background-color``
- para backgrounds com gradientes lineares utilize `backgound-image` e set um atributo de `background-color` como padrão no caso de problemas de incompatibilidades entre browsers 



# JAVASCRIPT - Tópicos importantes

## sobre **Workflow**
- criar um arquivo JS com o mesmo nome do compomente da página
- em linhas de comentário, listar a lógica de programação dividindo o desenvolvimento em pequenas tarefas com testes recorrentes até alcançar os objetivos
- carregar a linha de scripts JS como as últimas linhas do `body`

## sobre **Boas Práticas**
- procure usar $ como prefixo de nome de variável quando guardar conteúdo do HTML
- procure usar nome de variável no plural quando tiver uma array (listas de elementos) e no singular para elemento único

## sobre **Características**
- a API do Browser é o meio de campo que possibilita o código JS se ligar ao Browser para modificá-lo por meio de comandos. Ex: `document` na linha de comando do JS é da API do Browser e não do JS
- Evento é qualquer interação do usuário no HTML
- Uma função seguida de abrir e fechar parêntes faz a sua execução, então para controlar a execução de uma função não usar os parênteses junto com seu nome

## sobre **Operações**
- o atalho de soma que utiliza `++` junto a variável funciona atribuindo o valor da variável primeiro, depois somando quando for colocado de pois da variável. Ex: myNum++ e somando a variável primeiro e depois atribuindo a variável quando for colocado antes da variável. Ex: ++myNum
