export const SelectComponent = ({ cb }) => {
  return (
    <div className="flex justify-center">
      <select className="form-select appearance-none
      px-3
      flex-1 w-48
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select domain" onChange={(e) => cb(e.target.value)}>
        <option defaultValue={1} value="1">@clevertap.com</option>
        <option value="2">@leanplum.com</option>
      </select>
    </div>
  )
}