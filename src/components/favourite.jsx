import './favourite.css'

const Favourite = (props) => {
    const {favourite,goback,deleteFav} = props
    return ( 
        <>
        <button style={{float:'left'}} onClick={goback} > Go back</button>
        <br/>
        <ul className="root">
            {favourite.map(item => 
                <>
                <li key={item.id} className="container">
                   <img src={item.avatar} className="img" />
                    {item.first_name} {item.last_name}
                    <button style={{float:'right'}} className="btn btn-danger" onClick={() => deleteFav(item.id)}>Delete</button>
                </li>    
                <br/>
                </>
            )}
        </ul>
        </>  
     );
}
 
export default Favourite;