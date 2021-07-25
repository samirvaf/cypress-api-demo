import * as POST from '../../support/books/requests/POST.request'

describe('Add Books', () => {
    it('Can add The Lord of the Rings book', () => {
        POST.addBook().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('The Lord of the Rings')
        })
    })
})
