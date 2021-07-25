import * as PUT from '../../support/books/requests/PUT.request'
import * as GET from '../../support/books/requests/GET.request'
import * as POST from '../../support/books/requests/POST.request'

describe('Update Books', () => {
    it('Can update existing book', () => {
        GET.allBooks().then((allBooks) => {
            expect(allBooks.status).to.eq(200)
            expect(allBooks.body[0].title).to.not.be.eq('Harry Potter')
            PUT.updateBook(allBooks.body[0].id).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.title).to.eq('Harry Potter')
            })
        })
    })

    it('Can update book after creation', () => {
        POST.addBook().then((addedBook) => {
            expect(addedBook.status).to.eq(200)
            expect(addedBook.body.title).to.eq('The Lord of the Rings')
            PUT.updateBook(addedBook.body.id).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.title).to.eq('Harry Potter')
            })
        })
    })
})
