import * as GET from '../../support/books/requests/GET.request'

describe('Get Books', () => {
    it('Can return a list of all books', () => {
        GET.allBooks().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})
