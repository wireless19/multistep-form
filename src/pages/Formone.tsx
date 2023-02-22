import React from "react"

const Formone = props => {
  return (
    <section className={props.formStep === 0 ? "block" : "hidden"}>
      <h2 className="font-semibold text-3xl mb-8">Personal Information</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        className="text-input"
        {...props.register("username", {
          required: "*Please enter your username",
        })}
      />
      {props.errors.username && (
        <p className="text-red-600 text-sm mt-2">
          {props.errors.username.message}
        </p>
      )}
    </section>
  )
}

export default Formone
