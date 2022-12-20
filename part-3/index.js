const App = () => (
  <div>
    <Person name="sdajshfsdsdsad" age={18} hobbies={["a", "b", "c"]} />
    <Person name="eed" age={3} hobbies={["d"]} />
    <Person name="gfthh" age={58} hobbies={["e", "f"]} />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
