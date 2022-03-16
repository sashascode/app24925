import {Item} from '../Item/Item.js';
import React from 'react';

export const ItemList = ({products}) => {
    return products?.map((product) => <Item key={product.id} product={product} />);    
};