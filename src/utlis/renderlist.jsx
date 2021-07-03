import React, {Component} from "react";
import Favourite from "../components/favourite";
import Detailed from "./detail";
import './renderlist.css'

class RenderList extends Component {
    state = {
        newComponent: true,
        itemToPass : {},
        favourite : [],
        showfavourite : false
     }

     handleClick = (item) => {
        this.setState({newComponent:false, itemToPass:item})
     }

     addFav = () => {
         const {favourite,itemToPass} = this.state
        const fav = [...favourite, itemToPass]
        this.setState({favourite:fav, newComponent:true})
     }

     displayList = () => {
        this.setState({newComponent:true, showfavourite:false})
     }

     showFav = () => {
         this.setState({newComponent:false,showfavourite:true})
     }

     deleteFav = (id) => {
         const favourite = [...this.state.favourite]
         const fav = favourite.filter(fav=>{
            return fav.id!==id
         })
         this.setState({favourite: fav})
     }

    render() { 
        const {data,sortingHandler,sorting} = this.props
        const {newComponent,itemToPass,showfavourite, favourite} = this.state
    return ( 
        newComponent ? 
        <>
        <select value={sorting} style={{float:'left'}} onChange={sortingHandler}>
            <option>A-Z</option>
            <option>Z-A</option>
        </select>
        <button style={{float:'right'}} className="btn btn-success" onClick={this.showFav}>Favourite Contacts</button>
        <br/>
        <br/>
        <ul className="root">
            {data.map(item => 
                <>
                <li key={item.id} className="container" onClick={()=>{this.handleClick(item)}} >
                   <img src={item.avatar} className="img" />
                    {item.first_name} {item.last_name}
                </li>    
                <br/>
                </>
            )}
        </ul> 
        </>:showfavourite ? <Favourite favourite={favourite} goback={this.displayList} deleteFav={this.deleteFav} /> 
        : <Detailed details={itemToPass} addFav={this.addFav} goback={this.displayList} />
     );
    }
}
 
export default RenderList;