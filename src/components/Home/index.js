import { Component } from "react";

import Header from "../Header"
import BlogList from "../BlogList"
import EachTabId from "../EachTabId"

import { HiMiniNewspaper } from "react-icons/hi2";
import { VscBell } from "react-icons/vsc";
import { IoSearch,IoTimeOutline  } from "react-icons/io5";
import { RiMenuAddFill } from "react-icons/ri";

import "./index.css"

const AppEachIdDetails = [
    {appId:"ALL", displayText:"All"},
    {appId:"SPORTS", displayText:"Sports"},
    {appId:"POLITICS", displayText:"Politics"},
    {appId:"BUSINESS", displayText:"Business"},
    {appId:"HEALTH", displayText:"Health"},
    {appId:"TRAVEL", displayText:"Travel"},
    {appId:"SCIENCE", displayText:"Science"}
]


class Home extends Component{

state = {
    listItems:[],
    activeTabId : AppEachIdDetails[0].appId,
    searchResultInput:'',
    isShowContent:false,
    
    }

componentDidMount(){
    this.getApiItems()
}

getApiItems = async () => {
    const ApiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c3068680d6e14abfaa27a959a8d5e74a`
    // const ApiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c3068680d6e14abfaa27a959a8d5e74a`
    const option = {
        method:"GET"
    }

    const response = await fetch(ApiUrl,option)
    const fetchData = await response.json()
    const upDate = fetchData.articles.map((each) => ({
        autho: each.author,
        content: each.content,
        description:each.description,
        urlLink: each.url,
        urlToImage:each.urlToImage,
        id: each.source.id,
        title:each.title
    }))
    this.setState({listItems:upDate})
}

upDateActiveTabId = (TabId) => {
    this.setState({activeTabId: TabId})
}

getTrendingContainer = () => {
    return(
        <>
        <div className="LeastItemContainer">
            <h1 className="leastHeading">Trending</h1>
            <button type="button" className="seeallbtn">See all</button>
        </div>
        <div className="TrendingCardContainer">
            <img src="https://static01.nyt.com/images/2022/05/02/us/politics/02dc-moskva-1/merlin_205512990_6ffa49a7-4e07-4612-a274-56bcc9532185-videoSixteenByNine3000.jpg" alt="Russia" className="TrendingImage"/>
            <p className="RussianPara">Europe</p>
            <h1 className="RussinaHeading">Russina warship: Moskva sinks in Black sea</h1>
            <div className="RussinaContainer">
                <div className="RussinaCardContainer">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.k4dFEfHd0NRPyOWxA6eeIAHaFj&pid=Api&P=0&h=220" alt="BBCNEWS" className="BBCNewsName"/>
                    <p className="newsName">BBC NEWS</p>
                    <div className="timeAndDate">
                        <IoTimeOutline size={20} color="#bfbfbf"/>
                        <p className="Time">4h ago</p>
                    </div>
                </div>
                <p className="Times">...</p>
            </div>
        </div>
        </>
    )
}

getLatestItemContainer = () => {
    const {listItems,activeTabId,searchResultInput,isShowContent} = this.state
    const serachResult = listItems.filter(each => each.title.toLowerCase().includes(searchResultInput.toLowerCase()))
    return(
        <>
        <div className="LeastItemContainer">
            <h1 className="leastHeading">Latest</h1>
            <button type="button" className="seeallbtn">See all</button>
        </div>
        <ul className="LatestUnOrder">
            {AppEachIdDetails.map(each => (
                <EachTabId key={each.appId} eachId={each} isActive = {activeTabId === each.appId} upDateActiveTabId = {this.upDateActiveTabId}/>
            ))}
        </ul>
        <ul className="EachItems">
        {serachResult.map(each => (
            <BlogList key={each.title}  eachDetails = {each} isShowContent={isShowContent} ShowContentItems = {this.ShowContentItems}/>
        ))}
        </ul>
        </>
    )
}

onChangeSerachInput = event => {
    this.setState({searchResultInput:event.target.value})
}

ShowContentItems = () => {
    this.setState(preState => ({isShowContent: !preState.isShowContent}))
}


    render(){
        const {searchResultInput} = this.state
        return(
            <div className="HomeBgContainer">
                <div className="HomeLogoContainer">
                    <h1 className="HomeLogoHeading">Ka<span><HiMiniNewspaper /></span>ar</h1>
                    <div className="BellContianer"><VscBell fontSize={28}/></div>
                </div>
                <div className="HomeContainer">
                <div className="HomeCardContainer">
                        <div className="searchInputItemsContainer">
                            <div className="serachthing">
                            <IoSearch fontSize={25}/>
                            <input type="search" className="serach" placeholder="Search" onChange={this.onChangeSerachInput} value={searchResultInput}/>
                            </div>
                            <RiMenuAddFill fontSize={36}/>
                        </div>
                        <div className="latestContainer">{this.getTrendingContainer()}</div>
                        <div className="latestContainer">{this.getLatestItemContainer()}</div>
                    </div>
                </div>
                    <Header/>
                </div>
        )
    }
}

export default Home