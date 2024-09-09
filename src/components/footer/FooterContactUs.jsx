import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { contactUs } from './FooterData'

function FooterContactUs() {
  return (
      <div>
          <h4 className="mt-3 mb-5 ms-4">contact Us</h4>
          {contactUs.map(({ icon, text }) => <React.Fragment key={text}>
              <div className="d-flex mb-3">
                  <FontAwesomeIcon icon={icon} className="mt-1" />
                  <p className="ms-2">{text}</p>
              </div>
          </React.Fragment>)}
      </div>
  )
}

export default FooterContactUs