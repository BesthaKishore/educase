import "./index.css"

const BlogList = (props) => {
    const {eachDetails,ShowContentItems,isShowContent} = props
    const {urlToImage,autho,title,description,content,urlLink} = eachDetails

    const onClickSeeMore = () => {
        ShowContentItems(isShowContent)
    }

    const contentItems = isShowContent ? content : content.slice(0,100)
    const BtnText = isShowContent ? "Hide Content..." : "See more Content..."

    return(
    
    <li className="ListItems">
        <img src= {urlToImage} alt={title} className="ListImage"/>
        <div className="ListItemContainer">
            <h1 className="ListHeading">{title}</h1>
            <p className="ListPara">{description}</p>
        <div className="ItemsContainerList">
            <p className="author">{autho}</p>
            <button type="button" className="seeallbtns" onClick={onClickSeeMore}>See More</button>
        </div>
        <p className="ListParas">{contentItems}<span><button type="button" className="seeallbtns kishore" onClick={onClickSeeMore}>{BtnText}</button></span></p>
        <a href={urlLink} className="anchor" target="blank">
        <button type="button" className="ShowMore">MORE DETAILS</button>
        </a>
        </div>
        </li>
        
)
}

export default BlogList