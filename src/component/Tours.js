import Card from "./Cards";
function Tours({ tours, removeTour }) {
    return (
        <div>
            <div className="container">
                <h2 className="title">Tour with loveone's</h2>
            </div>
            <div className="cards">{
                tours.map((tour) => {
                    return <Card key={tour.id}{...tour} removeTour={removeTour}></Card>
                })
            }
            </div>

        </div>
    );
}
export default Tours;