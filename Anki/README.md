# 🍅 FocusFlow - Assistente de Produtividade

O **FocusFlow** é um aplicativo mobile baseado na técnica Pomodoro, desenvolvido para ajudar no gerenciamento de tempo e foco. Além de alternar entre ciclos de trabalho e descanso, o app recompensa o usuário com frases motivacionais consumidas de uma API externa a cada pausa.

---

## ✨ Funcionalidades

* **Cronômetro Dinâmico:** Ciclos de foco de 25 minutos e pausas de 5 minutos.
* **Contador de Ciclos:** Rastreamento automático de ciclos completados, com um limite de segurança de 10 ciclos diários para evitar burnout.
* **Recompensas via API:** Consumo da *AdviceSlip API* para exibir conselhos aleatórios em inglês toda vez que um ciclo de foco é concluído.
* **UI Responsiva e Temática:** Mudança automática da cor de fundo (feedback visual) indicando se o usuário está no modo de Foco ou de Pausa.
* **Controles Totais:** Botões para Iniciar, Pausar e Avançar (`->`) o ciclo atual.

---

## 🛠️ Tecnologias e Conceitos Aplicados

Este projeto foi construído com **React Native** e JavaScript, focando em aprofundar os seguintes conceitos:

* **Gerenciamento de Estado:** Uso intensivo do Hook `useState` para controlar o tempo, ciclos e renderização condicional da interface.
* **Manipulação de Tempo:** Controle assíncrono usando `setInterval` e `clearInterval` para garantir a precisão do cronômetro sem vazamentos de memória.
* **Consumo de APIs Externas:** Uso de funções assíncronas (`async/await`) e `fetch` para buscar dados na web.
* **Tratamento de Cache:** Implementação de `Math.random()` nos parâmetros da URL para evitar respostas em cache da API.
* **UX/UI Conditional Rendering:** Ocultação e exibição de botões e mudança de estilos (operador ternário) baseados no estado atual do app.

---

## 🚀 Como rodar o projeto localmente

1. Clone este repositório:
```bash
git clone https://github.com/ReTr0hxh/FocusFlow.git
```

2. Acesse a pasta do projeto:
```bash
cd FocusFlow-App
```

3. Instale as dependências:
```bash
npm install
```

4. Rode o aplicativo:
```bash
npx expo start 
```

---
*Projeto desenvolvido como parte dos estudos de aprimoramento em React Native.*