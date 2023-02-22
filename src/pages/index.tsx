import React, { useState } from "react"
import { useForm } from "react-hook-form"

import Formone from "./Formone"
import Formtwo from "./Formtwo"
import Formthree from "./Formthree"

const MAX_STEPS = 3

const IndexPage = () => {
  const [formStep, setFormStep] = useState(0)
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" })

  function completeFormStep() {
    setFormStep(formStep + 1)
  }
  function prevStep() {
    setFormStep(formStep - 1)
  }

  function submitForm(values: any) {
    if (formStep < 3) {
      return completeFormStep()
    }
    window.alert(JSON.stringify(values, null, 2))
  }

  function getFormDetails() {
    console.log(getValues(["username", "address"]))
    console.log(getValues(["username", "address"]).length)
  }

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-green-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">the Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="flex items-center mb-2">
              {formStep > 0 && (
                <button onClick={prevStep} type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 text-gray-400 hover:text-gray-600 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              )}
              {formStep < MAX_STEPS && (
                <p className="text-sm text-gray-700">
                  step {formStep + 1} of {MAX_STEPS}
                </p>
              )}
            </div>
            {formStep >= 0 && (
              <Formone
                formStep={formStep}
                register={register}
                errors={errors}
              />
            )}
            {formStep >= 1 && (
              <Formtwo
                formStep={formStep}
                register={register}
                errors={errors}
              />
            )}
            {formStep >= 2 && (
              <Formthree
                formStep={formStep}
                registerone={register}
                registertwo={register}
                errors={errors}
              />
            )}
            {/* formStep === 3 */}
            {formStep === 3 && (
              <section>
                <h5 className="font-semibold text-3xl mb-8">Summary</h5>
                <h5>{getValues("username")}</h5>
                <h5>{getValues("address")}</h5>
              </section>
            )}
            {/* onSubmit={handleSubmit(submitForm)} */}
            <button
              disabled={!isValid}
              type="submit"
              className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {formStep < 3 ? "Next Step" : "Create Account"}
            </button>
            <button
              type="button"
              onClick={getFormDetails}
              className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Save as Draft
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
