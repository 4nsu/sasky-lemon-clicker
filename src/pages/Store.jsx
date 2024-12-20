import getPurchasableItems from "../utils/getPurchasableItems";
import Header from "../components/Header";
import Item from "../components/Item";

function Store(props) {

    // Muodostetaan renderöitävä tuotelista (taulukko tuotteista).
    // map-funktio käy items.js taulukon alkiot yksitellen läpi,
    // ja suorittaa jokaiselle item-funktion,
    // joka muodostaa alkiosta Item-komponentin renderöinnin.
    const items = getPurchasableItems(props.storeitems).map(item => (
        <Item   key={item.id} 
                item={item} 
                handlePurchase={props.handlePurchase} 
                disabled={props.stats.balance < item.price} />
    ))

    return (
        <div className="container">
            <Header balance={props.stats.balance}>store</Header>
            <div className="scrollbox items">
                {items}
            </div>
        </div>
    )

}

export default Store