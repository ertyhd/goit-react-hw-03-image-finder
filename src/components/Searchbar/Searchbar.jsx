import { Component } from 'react';
import styles from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      search: '',
    });
  }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <form className={styles.Searchbar} onSubmit={handleSubmit}>
        <div>
          <label htmlFor=""></label>
          <input
            value={search}
            onChange={handleChange}
            name="search"
            placeholder="Search images"
            required
          />
        </div>
      </form>
    );
  }
}

export default Searchbar;
