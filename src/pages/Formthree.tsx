import React from "react"

const Formthree = props => {
  return (
    <section className={props.formStep === 2 ? "block" : "hidden"}>
      <h2 className="font-semibold text-3xl mb-8">Legal Information</h2>
      <div className="block mt-6">
        <input
          name="toc"
          className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
          type="checkbox"
          {...props.registerone("toc", {
            required: true,
          })}
        />
        <span>
          I accept the{" "}
          <a className="text-blue-400 underline" href="/">
            Terms and Conditions
          </a>
          .
        </span>
      </div>
      <div className="block mt-6">
        <input
          name="pp"
          className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
          type="checkbox"
          {...props.registertwo("pp", {
            required: true,
          })}
        />
        <span>
          I accept the{" "}
          <a className="text-blue-400 underline" href="/">
            Privacy Policy
          </a>
          .
        </span>
      </div>
    </section>
  )
}

export default Formthree
