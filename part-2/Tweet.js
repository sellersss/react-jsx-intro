const Tweet = (props) => {
  return (
    <div
      style={{
        width: "500px",
        backgroundColor: "#242D37",
        color: "#FE4D4C",
        paddingBottom: "40px",
        paddingRight: "40px",
        paddingTop: "10px",
        borderLeft: "10px solid #151B22",
        borderRight: "10px solid #151B22",
        // borderTopLeftRadius: "10px",
        // borderBottomLeftRadius: "10px",
        borderRadius: "10px",
        fontFamily: "-apple-system, BlinkMacSystemFont ",
        letterSpacing: "1px",
        marginBottom: "10px",
      }}
    >
      <p
        style={{
          opacity: "0.6",
          paddingBottom: "0",
          paddingLeft: "20px",
        }}
      >
        <span>{props.name} </span>
        <span
          style={{
            borderBottom: "4px solid #151B22",
            marginBottom: "3px",
            color: "",
          }}
        >
          @{props.username}
        </span>
        <span
          style={{
            opacity: "0.6",
            color: "#FE4D4C",
            paddingLeft: "20px",
          }}
        >
          Posted on {props.date}
        </span>
      </p>
      <p
        style={{
          fontSize: "20px",
          background: "#151B22",
          width: "100%",
          display: "flex",
          padding: "20px",
        }}
      >
        {props.message}
      </p>
    </div>
  );
};
