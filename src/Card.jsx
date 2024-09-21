import profilepic from './assets/wayne.jpg'
import './card.css'

function Card(){
      return(
        <div className="card">
            <img className = "card-image" src = {profilepic} alt="profile pic"  ></img>
            <h2 className='card-title'>Wayne </h2>
            <p  className=' card-text'> Im studying cs. I love React .react is very popular framework . learn it fastly is my goal</p>
        </div>
      )


}

export default Card