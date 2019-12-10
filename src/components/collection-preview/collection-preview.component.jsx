import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.style.scss'
const PreviewCollection = ({title,items}) => {
    return (
        <div className="collection-preview">
             <h1 className="title">{title.toUpperCase()}</h1>
             <div className="preview">
                {
                    items.filter((item,idx)=>idx<4).map(({id, ...otherItemProprs}) => (
                        // <div key={item.di}>{item.name}</div>
                        <CollectionItem key={id} {...otherItemProprs} />
                    ))
                }
             </div>
        </div>
    );
};

export default PreviewCollection;