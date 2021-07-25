# cypress-api-demo
Simple project to demonstrate Cypress usage for API test automation
---

:computer: API used in this project: [Fake REST API](https://fakerestapi.azurewebsites.net/index.html)

:stop_sign: To build the project you must have [Node.js](https://nodejs.org/en/) installed.

:arrow_right: To install dependencies:
- `npm install`

:arrow_right: To open cypress runner:
- `npx cypress open`

This project have the following structure:
| Folder | Description |
| ------ | ----------- |
| fixtures | Should contain general test data, i'm not using it in this project so it can be ignored, could have used it maintain the payloads |
| integration | Contains test specs, after you open the cypress runner you should be able to run them |
| plugins | Cypress plugins configuration, i'm not using it in this project so it can be ignored |
| support | Contains the requests implementation and also the payloads used for POST and PUT requests |

:arrow_right: Good to know:
- [cypress.json](cypress.json) contains general configuration like baseURL and cypress specific parameters, video is turned off since we're testing API :wink:
