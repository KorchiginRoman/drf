import React from 'react'
import { useParams } from 'react-router-dom'

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


const AuthorBookList = ({items}) => {
    let {id} = useParams()
    let filtered_items = items.filter((item) => item.author.id == id)
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
            {filtered_items.map((item) => <BooksItem item={item} />)}
        </table>
    )
}
export default AuthorBookList