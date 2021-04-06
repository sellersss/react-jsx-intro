const App = () => (
  <div>
    <Person name="James Bond" age="98" hobbies={["shooting", "drinking"]} />
    <Person
      name="Cindy Lou"
      age="10"
      hobbies={["christmas", "tree decorating"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
