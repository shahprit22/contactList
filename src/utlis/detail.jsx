import './detail.css'

const Detailed = (props) => {
    console.log(props)
    const {details,addFav,goback} = props
    return ( 
        <div className="detailcard">
            <br/>
            <img src={details.avatar} />
            <h2>{details.first_name} {details.last_name}</h2>
            <button onClick={addFav} className="btn btn-success">Add to Favourite</button>
            <button onClick={goback} className="btn btn-secondary">Go to List</button>
        </div>
     );
}
 
export default Detailed;