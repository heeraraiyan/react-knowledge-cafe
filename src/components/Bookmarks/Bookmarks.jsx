import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 text-center">
            <div>
                <h2>reading time:{readingTime}</h2>
            </div>
            <h2 className="text-4xl">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes = {
    
    bookmarks:PropTypes.array
}

export default Bookmarks;