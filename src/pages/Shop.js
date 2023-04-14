import React from 'react';
import styled from 'styled-components';
import SHOP_DATA from '../shop.data.js';
import Collections from '../components/Collections';

const Shoppage = styled.div`

`;
class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <Shoppage>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <Collections key={id} {...otherCollectionProps} />
                    ))
                }
            </Shoppage>
        );
    }
}

export default Shop;
