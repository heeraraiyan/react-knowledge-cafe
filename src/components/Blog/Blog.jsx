
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAdBookmark,handleReadingTime}) => {
    // console.log(blog)
    const {title,cover,author_img,reading,author,posted,hashtags} = blog;
    return (
        <div>
            
            <img className='w-full mt-20' src={cover} alt="" />
            <div className='flex justify-between mt-2'>
                <div className='flex'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-2'>
                    <h5>{author}</h5>
                    <p>{posted}</p>
                </div>
                </div>
                <div>
                    <span>{reading} min read</span>
                    <button onClick={handleAdBookmark}><FaBookmark></FaBookmark></button>
                </div>
            </div>

            <h2 className='text-4xl'>{title}</h2>
            <div className='mt-4 mb-10'>
                {
                    hashtags.map((hash,idx)=> <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </div>
            <div>
                <button onClick={()=>handleReadingTime(reading)}>mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAdBookmark :PropTypes.func
    
}

export default Blog;

