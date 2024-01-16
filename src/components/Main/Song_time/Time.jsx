import './styles.css'

const Time = () => {
    return(
        <div className='play_time'>
            <span className='start'>2:22</span> 
            <input type="range" /> 
            <span className='end'>-3:44</span>
        </div>
    )
}

export default Time