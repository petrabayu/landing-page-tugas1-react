import "./MiddleSection.css";

function MiddleSection() {
  return (
    <>
      <div className="middle" id="register">
        <h1 className="form-title">FORM PENDAFTARAN</h1>
        <form id="my-form" action="">
          <div className="form-label">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div className="form-label">
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>

          <div className="form-label">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" />
          </div>

          <div className="form-label">
            <label htmlFor="zip-code">Zip Code</label>
            <input type="number" name="" id="zip-code" />
          </div>

          <div className="form-label checked">
            <input type="checkbox" name="" id="status" />
            <label htmlFor="" id="check">
              Dengan ini saya menyatakan data yang diisi pada form ini adalah
              benar dan telah sesuai
            </label>
          </div>
          <button id="submit-form" className="submit-btn">
            Submit
          </button>
          <div id="warning"></div>
        </form>
      </div>
    </>
  );
}

export default MiddleSection;
