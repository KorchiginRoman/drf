import React from 'react'
import {Link} from 'react-router-dom'

const SeriesItem = ({item}) => {
    return (
        <tr>
            <td>
                <Link to={`series/${item.id}`}>{item.id}</Link>
            </td>
            <td>
                {item.name}
            </td>
            <td>
                {item.publishing_house}
            </td>
        </tr>
    )
}


const SeriesList = ({series}) => {
    return (
        <table>
            <th>
                ID
            </th>
            <th>
                Name
            </th>
            <th>
                Publishing house
            </th>
            {series.map((item) => <SeriesItem item={item} />)}
        </table>
    )
}
export default SeriesList