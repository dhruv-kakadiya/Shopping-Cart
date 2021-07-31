import React, {useState} from 'react';
import ItemsListData from '../Data/ItemsList';
import Item from './Item';

function ItemsContainer() {
    const [itemsList, setItemList] = useState(ItemsListData);
    return (
        <>
            <div className="items-container">
				<div className="title">Mens' Wear</div>
				<div className="items">
                    {
                        itemsList.map((item) => {
                            return(
                                <Item key={item.id} {...item}/>
                            )
                        })
                    }
				</div>
			</div>
        </>
    )
}

export default ItemsContainer;
