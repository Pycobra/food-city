import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { createStructuredSelector} from "reselect"; 
import CollectionOverview from './collection-overview.component';
import withSpinner from '../with-spinner/with-spinner.component';



const mapStateToProps = createStructuredSelector ({
    isLoading: selectIsCollectionFetching
})


// this is done so we can provide mapStateToProps individually to each component directly rather than inside shoppage where its not needed
// const CollectionOverviewContainer =  connect(mapStateToProps)(withSpinner(CollectionOverview));
const CollectionOverviewContainer = compose(connect(mapStateToProps), withSpinner)(CollectionOverview);
export default CollectionOverviewContainer;
