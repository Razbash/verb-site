import { useState } from "react";
import { useHttp } from '../../hooks/http.hook';
import JoditEditor from "jodit-react";
import '../AdminPanel/adminPanel.css';

const AddArticle = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const {request} = useHttp();

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    const handleImage = (event) => {
        setImage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const date = new Date();

        const newArticle = {
            name,
            date,
            category,
            image,
            content
        }

        request("http://localhost:3001/blog", "POST", JSON.stringify(newArticle))
            .then(alert('Статья успешно добавлена'))

        setName('');
        setContent('');
        setCategory('');
        setImage('');
    }

    return(
        <>
            <h3 className="">Добавить новую статью</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label">Название</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    onChange={handleName}
                    value={name}
                    required
                />

                <label htmlFor="category" className="form-label">Категория</label>
                <input
                    type="text"
                    name="category"
                    id="category"
                    className="form-control"
                    onChange={handleCategory}
                    value={category}
                    required
                />

                <label htmlFor="image" className="form-label">Изображение</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    className="form-control"
                    onChange={handleImage}
                    value={image}
                    required
                />

                <label htmlFor="content" className="form-label">Содержание</label>
                <JoditEditor
                    value={content}
                    onChange={setContent}
                />


                <button type="submit" className="btn btn-primary">Создать</button>
            </form>
        </>
    );
}

export default AddArticle;