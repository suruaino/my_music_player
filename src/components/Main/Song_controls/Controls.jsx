import './styles.css'

const Controls = () => {
    return(
        <div className='controlbx'>
            <button id='previous'><i class="fa fa-backward" aria-hidden="true"></i></button>
            <button id='play'><i class="fa fa-play-circle" aria-hidden="true"></i></button>
            <button id='next'><i class="fa fa-forward" aria-hidden="true"></i></button>
        </div>
    )
}

export default Controls