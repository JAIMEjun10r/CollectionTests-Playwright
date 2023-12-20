# Test Plan

This project was developed with the aim of conducting automated testing using Playwright with Typescript. More than one website was used for the tests. The main points covered are: Alerts, Datepicker, Autocomplete, Frames, and Windows. Additionally, a challenge that I saw in a job interview and decided to tackle using Playwright, along with two tests from the website https://practice.automationtesting.in. 

## Scope
<b>Alerts:</b> Tests to validate the behavior and handling of alerts.

<b>Datepicker:</b> Verification of interaction and functionalities of the date picker. 

<b>Autocomplete:</b> Test to ensure the proper functioning of the autocomplete feature. It was just a simple test.

<b>Frames e Windows:</b> Verification of handling frames and windows.  

<b>Challenge:</b> Implementation of a specific test for a challenge from an interview job that was previously done in Robot Framework, but I decided to implement using Playwright

<b>Testcases_PA</b>: Two test cases related to slider counting and arrivals. Dois casos de teste relacionado com contagem de sliders e arrivals.

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


