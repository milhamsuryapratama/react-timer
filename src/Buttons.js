import React from 'react'

const Buttons = (props) => {
    const timers = [5, 10, 15, 20, 25]
    return (
        <div>
            {timers.map(timer => {
                return (
                    <button onClick={() => props.handleClick(timer)} className='{timer}' key={timer}>{timer} Seconds</button>

                )
            })}
        </div>
    )
}

export default Buttons
