import { useHttp } from "../../hooks/http.hook";
import { useState, useEffect } from "react";
import '../AdminPanel/adminPanel.css';

const RemoveArticle = () => {
    const {request} = useHttp();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        request("http://localhost:3001/blog").then(onPostsLoaded);
    }, []);

    const onPostsLoaded = (list) => {
        setPosts(list);
    }

    const deletePost = (id) => {
        const confirmed = window.confirm('Вы действительно хотите удалить статью?');

        if (confirmed) {
            request(`http://localhost:3001/blog/${id}`, "DELETE")
                .then(alert('Статья успешно удалена'));
        }
    }

    const renderItems = (arr) => {
        const result = arr.map(element => {
            return(
                <li key={element.id} className="list-group-item">
                    <img
                        src={element.image}
                        alt={element.name}
                        width="50"
                        height="50"
                        className='delete-post'
                    />
                    <span className="post-name">{element.name}</span>
                    <button
                        type='button'
                        className='btn-close delete-button'
                        onClick={() => deletePost(element.id)}
                    >Удалить</button>
                </li>
            )
        });

        return result;
    }

    const elements = renderItems(posts);

    return(
        <ul>
            {elements}
        </ul>
    )
}

export default RemoveArticle;