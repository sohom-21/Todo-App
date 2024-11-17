import PropTypes from 'prop-types';
export function Header(props) {
         const { todos } =props
         const todolength = todos.length

         const isTaskplural = todolength === 1 ? "" : "s"
         return (
                  <header>
                           <h1 className="text-gradient">Todo App</h1>
                           <h2 className="text-gradient">You have {todolength} open task{isTaskplural}</h2>
                  </header>
         )
}

Header.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      // include other required todo properties here
    })
  ).isRequired
};