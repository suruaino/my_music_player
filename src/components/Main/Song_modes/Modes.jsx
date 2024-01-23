import './styles.css'

const Modes = () => {
    return(
        <div className='song_modes'>   
            <button id='mode'><i class="fa fa-repeat" aria-hidden="true"></i></button>
            <button id='favorites'><i class="fa fa-heart" aria-hidden="true"></i></button>
            <button id='shuffle'><i class="fa-solid fa-shuffle"></i></button>
            <button id='song_list'>
                <div className='bar'></div>
            </button>
        </div>
    )
}

export default Modes