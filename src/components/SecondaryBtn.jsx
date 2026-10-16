import './SecondaryBtn.css'

const SecondaryBtn = ( props ) => {
  return (
    <button className="btn btn-secondary">
      {props.btnText}
    </button>
  )
}

export default SecondaryBtn