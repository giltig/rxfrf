import React from 'react'
import match, {changeRoute} from 'shared/utils/routing'

import './About.css'

const Page1 = (props) => {
  return <div>
            The door is closing...
         </div>
}

const Page2 = (props) => {
  return <div>
            Beware of door closing!
         </div>
}

const About = (props) => {
  return  <div className='about-container'> 
            <div className='about-nav'>
              <ul>
                <li>
                  <button onClick={() => changeRoute('/about/page/1') }>
                    Page 1
                  </button>
                </li>
                <li>
                  <button onClick={() => changeRoute('/about/page/2') }>
                    Page 2
                  </button>
                </li>
              </ul>
            </div>
            <div className='about-content'>
              { // params get injected into props
                props.pageId == 1 && // == on purpose since it is a string from url
                <h3>Special heading for page 1, will not show for default route</h3>} 
              {
                // match multiple routes
              }             
              { match(['/about', '/about/page/1'], <Page1 />) }
              { match('/about/page/2', <Page2 />) }
            </div>
          </div>
}

export default About