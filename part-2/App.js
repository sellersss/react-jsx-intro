const App = () => {
  return (
    <div>
      <Tweet
        name="Sellers Crisp"
        username="CrispSellers"
        date={new Date().toDateString()}
        message="Hello world. This is my first post!"
      />
      <Tweet
        name="James Bond"
        username="mi6_007"
        date={new Date().toDateString()}
        message="Bond, James Bond. Shaken, not stirred."
      />
      <Tweet
        name="Wanda M."
        username="VISIONisMINE"
        date={new Date().toDateString()}
        message="But what is grief, if not love persevering?"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
