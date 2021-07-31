import React from 'react';
import SaleImg from '../images/sale-3.png';

function SaleHome() {
    return (
        <section id="sale">
			<div className="row">
				<div className="col-2 sale-img">
					<img src={SaleImg} alt="sale"/>
				</div>
				<div className="col-2 sale-counter">
					<div className="sale-text">
						<h1 className="line1">Exclusive Hot Deal Ends</h1>
						<h1 className="line2">Soon!</h1>
						<p>Who are in extremely love with eco friendly system.</p>
					</div>
					<div className="counter">
						<div className="field">
							<div className="number">23</div>
							<div className="text">Days</div>
						</div>
						<div className="field">
							<div className="number">23</div>
							<div className="text">Hours</div>
						</div>
						<div className="field">
							<div className="number">23</div>
							<div className="text">Mins</div>
						</div>
						<div className="field">
							<div className="number">23</div>
							<div className="text">Secs</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default SaleHome;
