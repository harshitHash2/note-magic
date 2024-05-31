import React from 'react'


const MainCon = () => {

  
  return (
    <>
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                
                <img className="masthead-avatar mb-5" src='https://firebasestorage.googleapis.com/v0/b/chat-app-fe05e.appspot.com/o/user_images%2F1.png?alt=media&token=dd57991c-8f8f-41eb-bf0f-370a95162152' alt="..." />
                
                <h1 className="masthead-heading text-uppercase mb-0">Note Magic</h1>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <p className="masthead-subheading font-weight-light mb-0">Set Up Account - Start Making Notes - Secure Platform</p>
            </div>
        </header>
    </>
  )
}

export default MainCon