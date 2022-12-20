const App = () => (
  <div>
    <Tweet username="u1" message="m1" date={new Date().toDateString()} />
    <Tweet username="u2" message="m2" date={new Date().toDateString()} />
    <Tweet username="u3" message="m3" date={new Date().toDateString()} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
