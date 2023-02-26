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
            <td>
                {item.series.name}
            </td>
        </tr>
    )
}


const SeriesBookList = ({items}) => {
    let {id} = useParams()
    let filtered_items = items.filter((item) => item.series.id == id)
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
            <th>
                Series
            </th>
            {filtered_items.map((item) => <BooksItem item={item} />)}
        </table>
    )
}
export default SeriesBookList