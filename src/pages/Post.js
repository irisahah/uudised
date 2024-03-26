import { useParams } from "react-router-dom";

function Post({postitused}) {
    const {postId} = useParams()

    const postitus = postitused.find(post => post.id === postId)

    return (
        <h1>{postitus.title} </h1>,
        <div>{postitus.content}</div>
    )
}

export default Post;