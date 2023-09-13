import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} =bookmark;
    console.log(bookmark)
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    
    bookmark: PropTypes.object
}


export default Bookmark;