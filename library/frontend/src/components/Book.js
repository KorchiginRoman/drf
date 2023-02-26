import React from 'react'
import {Link} from 'react-router-dom'


const BookItem = ({item, deleteBook}) => {
    return (
        <tr>
            <td>
                {item.id}
            </td>
            <td>
                {item.name}
            </td>
            <td>
                {item.author.last_name}
            </td>
            <td>
                {item.series.name}
            </td>
            <td><button onClick={ ()=>deleteBook(item.id)} type='button'>Удалить</button></td>
        </tr>
    )
}


const BookList = ({items, deleteBook}) => {
    return (
        <div>
        <table>
            <th>
                ID
            </th>
            <th>
                Name
            </th>
            <th>
                Author
            </th>
            <th>
                Series
            </th>
            {items.map((item) => <BookItem item={item} deleteBook={deleteBook} />)}
        </table>
        <Link to='/books/create'>Добавить книгу</Link>
        </div>
    )
}
export default BookList