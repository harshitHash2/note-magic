import React from 'react'

const AboutCon = () => {
  return (
    <>
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
               
                <div class="row">
                    <div class="col-lg-4 ms-auto"><p class="lead">At NoteMagic, we believe that great ideas deserve a great space. Our mission is to provide you with a seamless, intuitive, and powerful note-taking platform that helps you capture, organize, and access your thoughts anytime, anywhere.</p></div>
                    <div class="col-lg-4 me-auto"><p class="lead">NoteMagic was born out of the frustration with existing note-taking solutions. I wanted something that was not just a repository for notes but a dynamic tool that adapts to the way you think and work.</p></div>
                </div>
               
                <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i class="fas fa-download me-2"></i>
                        Free Download!
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutCon