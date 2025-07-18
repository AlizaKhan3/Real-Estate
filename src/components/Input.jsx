// const Input = ({type, ...props}) => {
//   return (
//       <input className="py-2 px-4 w-full rounded-md border focus:outline-none" type={type} {...props} /> 
//   )
// }

// export default Input


const Input = ({ type, ...props }) => {
    return (
        <input className="py-3 px-4 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type={type}
            {...props}
        />
    )
}

export default Input

