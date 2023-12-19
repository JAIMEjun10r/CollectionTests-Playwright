# Plano de Testes

Este projeto foi desenvolvido com o objetivo de realizar testes automatizados utilizando Playwright com Typescript. Foi utilizado mais de um site para os testes. Os principais pontos abordados são: 
Alerts, Datapicker, Autocomplete, Frames e Windows. Também, um desafio que vi em uma entrevista de emprego e decidi realizar utilizando o Playwright, além de dois testes do site https://practice.automationtesting.in.

## Escopo
<b>Alerts:</b> Testes para validar o comportamento e manipulação de alertas.

<b>Datepicker:</b> Verificação da interação e funcionalidades do seletor de datas.

<b>Autocomplete:</b> Teste para garantir o correto funcionamento do recurso de autocompletar. Foi apenas um teste simples

<b>Frames e Windows:</b> Verificação da manipulação de frames e janelas 

<b>Challenge:</b> Implementação de um teste específico para o desafio de uma entrevista que outrora fora em Robot, mas decidi aplicar com Playwright.

<b>Testcases_PA</b>: Dois casos de teste relacionado com contagem de sliders e arrivals.

## Ambiente de testes:
- Windows      10 Pro
- Playwright  1.40.1 com typescript
- Node        20.10.0
  
<b>Utilizei os seguintes sites:</b>

- https://demo.automationtesting.in
- https://phptravels.com/demo
- https://practice.automationtesting.in

## Casos de Teste

### Alerts
  - CT01: Alert with OK
  - CT02: Accepting an alert in a confirm box
  - CT03: Pressing cancel button in a confirm box
 
### Autocomplete
 - CT01: Writing the word Argentina inside the searchbox

### Challenge
- CT01: Prime's challenge

### Datapicker
- CT01: DataPicker enabled
- CT02: DataPicker disabled

### Frame
- CT01: Single Frame

### Testcases_PA
- CT01: Home Page with three Sliders only
- CT02: Home Page with three Arrivals only

### Windows
- CT01: Open New tabbed Windows
- CT02: Open New Separate Window


