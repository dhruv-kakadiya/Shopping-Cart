import React from 'react'

function Slide({img, name, line1, line2, position}) {
    return (
        <div className={`slide ${position}`}>
			<div className="img">
				<img src={img} alt={name} />
			</div>
			<div className="text">
                <div className="line-1">{line1}</div>
                <div className="line-2">{line2}</div>
				<button type="button" className="text-btn">Shop now</button>
			</div>
		</div>
    )
}

export default Slide;
