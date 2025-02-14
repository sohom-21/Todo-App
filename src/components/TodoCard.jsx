// In src/components/TodoCard.jsx:
import PropTypes from 'prop-types';
export function TodoCard(props) {
         const { todo } = props;
         return (
                  <div className="card todo-item">
                           <p>{todo.input}</p>
                           <div className="todo-buttons"></div>
                           <button disabled={todo.completed}>
                                    <h6>Done</h6>
                           </button>
                           <button>
                                    <h6>Delete</h6>
                           </button>
                  </div>
         );
}

TodoCard.propTypes = {
  todo: PropTypes.shape({
    input: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired, 
  }).isRequired 
};