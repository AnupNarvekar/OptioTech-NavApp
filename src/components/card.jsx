
const Card = () => {
    return (

        <div className="card">
            <div className="cardSection upper">
                <div className="address">
                    <div className="source">
                        <div className="blackDot"></div>
                        <h1>Home</h1>
                    </div>
                    <div className="dest">
                        <div className="blackDot"></div>
                        <h1>Destination</h1>
                    </div>
                </div>
                <div className="progress">

                </div>
            </div>

            <div className="cardSection middle">
                <div className="midBox">
                    <h1>100 KM</h1>
                    <h1>total distance </h1>
                </div>
                <div className="midBox">
                    <h1>1h 32m</h1>
                    <h1>Time</h1>
                </div>
                <div className="midBox">
                    <h1>140 KM/h </h1>
                    <h1>Highest speed </h1>
                </div>
            </div>


            <div className="cardSection lower">

                <div className="lowerText text1">
                    <div className="dot"></div>
                    <h1>Total Alerts: 12</h1>
                </div>

                <div className="lowerText text1">
                    <div className="dot"></div>
                    <h1>7.5% poor performance than last trip</h1>
                </div>
                <h1 className="date">17 June 2021,  05:40 pm</h1>

            </div>

        </div>

    )

}

export default Card;