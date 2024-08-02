import React from 'react'

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-b from-white to-primaryLight bg-fixed bg-cover h-auto flex-grow pt-header">
      {children}
    </div>
  )
}

export default Background
