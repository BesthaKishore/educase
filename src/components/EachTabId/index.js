import "./index.css"

const EachTabId = props => {
    const {eachId,isActive,upDateActiveTabId} = props
    const {appId,displayText}=eachId
    
    const buttonText = isActive ? "eachButtons" : "eachButton"

    const onClickBtn = () => {
        upDateActiveTabId(appId)
    }
    return(
    <li className="listItems">
        <button type="button" className={buttonText} onClick={onClickBtn}>{displayText}</button>
    </li>
    )
}

export default EachTabId