const Tweet = (props) => (
  <div>
    <strong>
      @{props.username} - {props.date}
    </strong>
    <p>{props.message}</p>
  </div>
);
