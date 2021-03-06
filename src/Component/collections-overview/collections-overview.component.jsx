import React from 'react'
import "./collections-overview-styles.scss"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../preview/preview-collections'
import { selectCollectionsForPreview } from '../../Redux/shop/shop.selector'


const CollectionsOverview = ({collections})=> (
    <div className="collections-overview">
        {collections.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)