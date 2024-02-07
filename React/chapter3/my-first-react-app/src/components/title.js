import "./title.css"


export default function Title ({title, subtitle}) {
    return(
        <div className="title-block">
            <h1 className="title">{title}</h1>
            <br></br>
            <h2 className="subheading">{subtitle}</h2>
        </div>
    )
}