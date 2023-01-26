import React from 'react'


const BooksItem = ({item}) => {
    return (
        <tr>
            <td>
                {item.id}
            </td>
            <td>
                {item.book_name}
            </td>
            <td>
                {item.author.last_name}
            </td>
        </tr>
    )
}


const BooksList = ({items}) => {
    return (
        <table>
            <th>
                ID
            </th>
            <th>
                Book Name
            </th>
            <th>
                Author
            </th>
            {items.map((item) => <BooksItem item={item} />)}
        </table>
    )
}
export default BooksList