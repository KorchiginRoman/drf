import React from 'react'

class BookForm extends React.Component {
    constructor(props) {
    super(props)
    this.state = {name: '', author: props.authors[0].id, series: props.series[0].id}
    }

    handleChange(event)
    {
        this.setState(
                {
                    [event.target.name]: event.target.value
                }
            );
    }

    handleSubmit(event) {
        this.props.createBook(this.state.name, this.state.author, this.state.series)
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div className="form-group">
                <label for="name">Наименование произведения</label>
                    <input type="text" className="form-control" name="name" value={this.state.name}
                    onChange={(event)=>this.handleChange(event)} />
                </div>

                <div className="form-group">
                    <label for="author">Автор </label>
                    <select last_name="author" className='form-control' onChange={(event)=>this.handleChange(event)}>
                        {this.props.authors.map((author)=><option value={author.id}>{author.first_name} {author.last_name}</option>)}
                    </select>
                </div>

                <div className="form-group">
                    <label for="series">Серия </label>
                    <select name="series" className='form-control' onChange={(event)=>this.handleChange(event)}>
                        {this.props.series.map((item)=><option value={item.id}>{item.name}</option>)}
                    </select>
                </div>

                    <input type="submit" className="btn btn-primary" value="Сохранить" />
            </form>
        );
    }
}


export default BookForm