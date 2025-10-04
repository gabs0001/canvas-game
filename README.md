## 🎮 Canvas Game

Um jogo básico de tiro em 2D desenvolvido usando **HTML5 Canvas**, **CSS** e **JavaScript** puro. O objetivo é atirar nos inimigos que se movem aleatoriamente, acumulando a maior pontuação possível antes de ser atingido.

-----

## 🚀 Funcionalidades Principais

  * **Mecânica de Tiro Precisa:** Projéteis são disparados com base nas coordenadas exatas do clique do mouse (**clientX** e **clientY**).
  * **Geração de Inimigos Dinâmica:** Inimigos gerados aleatoriamente em diferentes direções, velocidades e tamanhos para um desafio constante.
  * **Sistema de Pontuação:** Pontos são concedidos a cada acerto, incentivando a precisão e a agilidade.
  * **Animações:** Efeitos visuais para o disparo dos projéteis e para a colisão com os inimigos.
  * **Game Over:** O jogo é encerrado se o *player* for atingido por um inimigo.

-----

## 💻 Tecnologias Utilizadas

Este projeto foi construído com foco em **JavaScript** para manipulação do **Canvas API** e lógica de jogo.

  * **HTML5** (com elemento `<canvas>`)
  * **CSS3** (para estilização básica e *layout*)
  * **JavaScript (ES6+)** (Lógica do Jogo, Animações e Interação)

-----

## 💡 Como Jogar

1.  **O Player:** Você é o círculo no centro da tela.
2.  **Mire e Atire:** Clique em qualquer lugar da tela para disparar um projétil naquela direção.
3.  **Pontuação:** Acerte os inimigos para ganhar pontos.
4.  **Sobreviva:** Evite que os inimigos atinjam o seu círculo.

-----

## 🛠️ Primeiros Passos

Este projeto não requer dependências externas ou *build tools*, apenas um navegador web moderno.

### 📥 Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd canvas-game
    ```
3.  **Abra o arquivo `index.html`** no seu navegador (clique duas vezes ou arraste para a janela do navegador).

### ⚙️ Estrutura do Código

Alguns dos principais arquivos de lógica do jogo estão no diretório `js/`:

  * `index.js`: Lógica principal do jogo, *game loop* e gerenciamento de estados.
  * `Player.js`: Classe para o objeto principal (*player*).
  * `Projectile.js`: Classe para o disparo dos tiros.
  * `Enemy.js`: Classe para os objetos inimigos.

-----

## 🧠 Desenvolvimento e Refatoração

O núcleo deste projeto foi desenvolvido através de um treinamento em vídeo, totalmente em inglês. As seguintes **implementações e refatorações** foram realizadas por conta própria:
* Refatoração da estrutura lógica do projeto, criando uma divisão de responsabilidades e eliminando redundância de código
* Pequenos ajustes nas animações para gerar um efeito mais suave
