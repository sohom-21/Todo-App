import PropTypes from 'prop-types';
export function Tabs(props) {
  const { todos, tabs, setTabs } = props;
  const tabOptions = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      { tabOptions.map((tab, tabIndex) => {
        const numberOfTodos = () => {
          if(tab === "All"){
            return ( todos.length)
          }
          else if(tab === 'Open'){
            return ( todos.filter((todo) => todo.completed === false).length )
          }
          else if(tab === 'Completed'){
            return ( todos.filter((todo) => todo.completed === true).length )
          }
        } 
        return (
          <button key={tabIndex} className="tab-button">
            <h4>{tab}<span>({numberOfTodos()})</span></h4>
          </button>
        );
      })}
    </nav>
  );
}

Tabs.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      // include other required todo properties here
    })
  ).isRequired
};