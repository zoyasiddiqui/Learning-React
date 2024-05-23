import pfp from './assets/pfp.jpg'

function Card() {

    return(
        // in jsx, class is a reserved keyword, so we use className instead
        <div>
            <div className="card">
                <img className="card-img" src="https://via.placeholder.com/150" alt="placeholder image" />
                <h2 className="card-title">Placeholder</h2>
                <p className="card-text">Description goes here</p>
            </div>
            <div className="card">
                <img className="card-img" src={pfp} alt="profile picture" />
                <h2 className="card-title">Zoya</h2>
                <p className="card-text">My name is Zoya</p>
            </div>
        </div>

        
    );

}

export default Card