import '../Rating/Rating.scss'
import starActive from "../../assets/star-active.svg"
import starInactive from "../../assets/star-inactive.svg"

function Rating ({rate}) {
    const starsNumber = 5;

    let stars = [];

    for (var i = 1; i <= starsNumber; i++) {
        // i <= rate 
        if (i <= rate) {
            stars.push(
                <img key={i} className="star__active" src={starActive} alt="Active Star" />
            );
        } else {
        // i > rate 
            stars.push(
                <img key={i} className="star__inactive" src={starInactive} alt="Inactive Star" />
            );
        }
    }
    return (
        <div className='rating'>
            {stars}
        </div>
    )
}

export default Rating