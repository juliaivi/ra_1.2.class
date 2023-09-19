import PropTypes from 'prop-types';
import React from 'react';
import Item from '../Item';

class ShopItemClass extends React.Component {
    render() {
        const {item} = this.props; // Из app.js  <ShopItemClass item={item} />, this.props - это item (атрибут)
        return (
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">
                   {item.descriptionFull}
                </div>
                <div className="highlight-window mobile">
                <div className="highlight-overlay">
                </div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                  <div className="price">{`${item.currency}${item.price.toFixed(2)}`}</div>
                  <button>Добавить в корзину</button>
                </div>
            </div>
        )
    }
}

ShopItemClass.propTypes = { // можно объявить, что свойство является экземпляром класса
    item: PropTypes.instanceOf(Item).isRequired, //Вы можете связать любое из вышеперечисленного с `isRequired`, чтобы гарантировать предупреждение .отображается, если свойство не указано.
} // instanceOf проверяет принадлежность к классу Item. true - если  является экземпляром данного класса Item или любого базовоо класса от которого он наследуется

export default ShopItemClass;

