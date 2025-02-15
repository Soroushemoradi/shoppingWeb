import React from 'react'

function ContactUs() {
    return (
        <div className="container py-5">
            <div className="col-lg-5 text-center w-100 ">
                <h1 className="mb-4">Contact Us</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your first name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your last name" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control resize" rows="2" cols={2} placeholder="Enter your message"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mt-3">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs