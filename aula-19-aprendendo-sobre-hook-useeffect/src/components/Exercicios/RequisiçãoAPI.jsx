import React, {useState, useEffect} from "react";

const RequisicaoAPI = () => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchUsers = async ( ) => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                console.log(data)
                setUsers(data)
            } catch (error) {
                console.error('Erro: ', error)
            }
        }

        fetchUsers()
        const fetchPosts = async ( ) => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()
                console.log(data)
                setPosts(data)
            } catch (error) {
                console.error('Erro: ', error)
            }
        }
        fetchPosts()
    }, [])

    return (
        <div>
            <h1>Usuários</h1>
            <ul>
                {users.map(user => (
                    <li>{user.name}</li>
                ))}
            </ul>

            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li>{post.title}</li>
                ))}
            </ul>

        </div>
    )
}

export default RequisicaoAPI