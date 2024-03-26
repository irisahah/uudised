import { Link } from "react-router-dom"

function Blogs({postitused}) {
    return (
        <div className="blogi-konteiner">
            <h1>Blogi</h1>
            <div>
                {
                    postitused.map((postitus) => {
                        return (
                            <div key={postitus.id}>
                            {postitus.title}
                            <div><Link to={"/post/" + postitus.id} > Loe edasi </Link></div>
                        </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Blogs