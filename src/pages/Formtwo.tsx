import React from "react"

const Formtwo = props => {
  return (
    <section className={props.formStep === 1 ? "block" : "hidden"}>
      <h2 className="font-semibold text-3xl mb-8">Billing Information</h2>
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        className="text-input"
        {...props.register("address", {
          required: "*Please enter your address",
        })}
      />
      {props.errors.address && (
        <p className="text-red-600 text-sm mt-2">
          {props.errors.address.message}
        </p>
      )}
    </section>
  )
}

export default Formtwo
