import "./PrimaryBtn.css";

const PrimaryBtn = (props) => {
  return (
    <button className="btn btn-primary" type="button">
      {props.btnText}
    </button>
  )
}

export default PrimaryBtn