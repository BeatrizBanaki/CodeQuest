import Result1 from './Result2'


export default function Result({ children }) {
  return (
    <div className="w-full h-full bg-gradient-dark p-10 flex items-center justify-center">
      {children}
    </div>
  )
}