import { useState } from "react";

export default function Terms() {
  const [checked, setChecked] = useState(false);
  function onSubmit() {
    if (checked === false) {
      alert("You need to check the box first");
    } else {
      alert("Thanks for agreeing, enjoy your stay here");
      setChecked(false);
    }

    return false;
  }
  return (
    <div>
      <h2>Terms of Use</h2>
      <p>
        Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse vitae libero pharetra, dictum velit non, mollis ante.
        Phasellus non erat leo. In non justo et risus iaculis vehicula. Praesent
        nec dui et libero
      </p>
      <div>
        <form onSubmit={onSubmit}>
          <input
            name="acceptTerms"
            type="checkbox"
            onClick={() => setChecked(true)}
          />
          <label>Accept Terms & Conditions</label>
          <br></br>
          <button type="submit">OK</button>
        </form>
      </div>
    </div>
  );
}
