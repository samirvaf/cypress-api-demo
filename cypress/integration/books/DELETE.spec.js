import * as DELETE from '../../support/books/requests/DELETE.request'
import * as GET from '../../support/books/requests/GET.request'
import * as POST from '../../support/books/requests/POST.request'

describe('Delete Books', () => {
    it('Can delete a book given an valid index', () => {
        GET.allBooks().then((allBooks) => {
            DELETE.deleteBook(allBooks.body[0].id).should((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })

    it('Can create and delete a book', () => {
        POST.addBook().then((addedBook) => {
            expect(addedBook.status).to.eq(200)
            DELETE.deleteBook(addedBook.body.id).should((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
})
