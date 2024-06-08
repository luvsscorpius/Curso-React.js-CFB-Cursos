import React, {useState, useEffect} from "react";

const BlogPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fecthPosts = async () => {
        try {
            const response = await fetch('http://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            console.error('Erro ao buscar os posts', error)
        }
        }
        fecthPosts()
    },[]) // Passa uma matriz vazia para garantir que o efeito seja executado apenas uma vez, apos a renderização inicial 
    
    return (
        <div>
            <h2>Lista de Posts do Blog</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogPosts