# 📱 AnkiDroid - Flashcards e Repetição Espaçada

O **AnkiDroid** é um aplicativo mobile construído para otimizar o seu processo de memorização e estudos através da organização em baralhos dinâmicos.

---

## ✨ Funcionalidades

* **Gestão de Baralhos:** Visualização e organização de decks de estudo personalizados com contagem de cartas.
* **Repetição Espaçada:** Estrutura pronta para revisar cartas no momento ideal de fixação na memória.
* **Persistência Local:** Salvamento do seu progresso e dos dados diretamente no dispositivo (via AsyncStorage).
* **UI Responsiva e Limpa:** Interface direta ao ponto, estilizada de forma nativa e focada na experiência do usuário.

---

## 🛠️ Tecnologias e Conceitos Aplicados

Este projeto faz parte do monorepo **Mobile-experiments**, construído com foco em componentização, listas performáticas e persistência de dados.

* **React Native (Expo):** Framework principal para desenvolvimento da interface mobile.
* **Gerenciamento de Estado:** Uso intensivo de `useState` e `useEffect` para controle lógico.
* **Renderização Eficiente:** Utilização de `FlatList` para renderizar múltiplos baralhos sem perda de performance.
* **Armazenamento de Dados:** Aplicação do `AsyncStorage` para manter as informações salvas offline.

---

## 🚀 Como rodar o projeto localmente

1. Clone este repositório:
git clone https://github.com/ReTr0hxh/Mobile-experiments.git

2. Acesse a pasta do projeto:
cd AnkiDroid

3. Instale as dependências:
npm install

4. Rode o aplicativo:
npx expo start

---
*Desenvolvido com dedicação por [ReTr0hxh](https://github.com/ReTr0hxh).*