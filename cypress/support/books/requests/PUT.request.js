/// <reference types='cypress' />

const payloadUpdateBook = require('../payloads/update-book.json')

function updateBook(id) {
    return cy.request({
        method: 'PUT',
        url: `Books/${id}`,
        failOnStatusCode: false,
        body: payloadUpdateBook
    })
}

export { updateBook };
