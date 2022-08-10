import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import './App.css'
const App = () => {
  
  const activeMenu = false;

  return (
    <div>
        <Router>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{
                    zIndex: 1000
                }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button type="button" className="text-3xl text-white hover:bg-light-gray p-3 hover:drop-shadow-xl" style={{
                            background: 'blue',
                            borderRadius: '50%'
                        }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {
                    activeMenu ? (
                        <div className="w-72 sidebar dark:bg-secondary-dark-bg bg-white">
                            Sidebar
                        </div>
                    ):
                    (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            Sidebar w-0
                        </div>
                    )
                }

                <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72': 'flex-2'}`
                }>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        Navbar
                    </div>
                </div>

                <div>
                    <Routes>
                        {/* Dashboard */}
                        <Route path='/' element="ECommerce"/>
                        <Route path='/ecommerce' element="ECommerce"/>
                        {/* Pages */}
                        <Route path='/orders' element="ECommerce"/>
                        <Route path='/employees' element="Employes"/>
                        <Route path='/customers' element="Customers"/>
                        {/* Apps */}
                        <Route path='/kanban' element="Kanban"/>
                        <Route path='/editor' element="Editor"/>
                        <Route path='/calendar' element="Calendar"/>
                        <Route path='/customers' element="Customers"/>
                        {/* Charts */}
                        <Route path='/line' element="Line"/>
                        <Route path='/area' element="Line"/>
                        <Route path='/bar' element="Line"/>
                        <Route path='/pie' element="Line"/>
                        <Route path='/financial' element="Line"/>
                        <Route path='/color-mapping' element="Line"/>
                        <Route path='/pyramid' element="Pyramid"/>
                        <Route path='/stacked' element="Stacked"/>
                    </Routes>
                </div>
            </div>
        </Router>
        {/* <h1 className="underline text-3xl">App</h1> */}
    </div>
  )
}

export default App