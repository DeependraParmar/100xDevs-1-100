
const layout = ({children}: {children: React.ReactNode }) => {
  return (
    <div>
      <div className="p-4 text-center">20% off for next few days</div>
      {children}
    </div>
  )
}

export default layout
