import './styles.css'

const Details = () => {
    return(
        <div className='song_details'>
            <img src='https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400' alt='Song Image' />
            <div className="title">
                <h3 className='title'>Song Title</h3>
                <p className='artist'>Artist</p>
            </div>
        </div>
    )
}

export default Details