import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './imageGallery.module.css';

const ImageGallery = ({ items, error, handleShowModal }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <ImageGalleryItem
      key={id}
      webformatURL={webformatURL}
      largeImageURL={largeImageURL}
      alt={tags}
      handleShowModal={handleShowModal}
    />
  ));
  return (
    <>
      {/* {loading && <p>...Loading</p>} */}
      {error && <p>Somthing goes wrong. Please try again later.</p>}
      <ul className={styles.ImageGallery}>{elements}</ul>
    </>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleShowModal: PropTypes.func,
};
