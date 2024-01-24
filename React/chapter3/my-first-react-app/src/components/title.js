export default function Title ({title, subtitle}) {
    return(
        <>
            <h1 className="title">{title}</h1>
            <br></br>
            <h2 className="subheading">{subtitle}</h2>
        </>
    )
}