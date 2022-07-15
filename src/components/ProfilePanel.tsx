import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import profileImage from '../images/profile.jpg'

import PanelImage from './PanelImage'

const PanelProfile = () => {
  return (
    <Panel title='Profile'>
      <PanelImage url={profileImage}></PanelImage>
      <div>
        I’m Wachirawit Wacharak. You can call me Ice. I’m working as Software
        Engineer at KBTG in Bangkok. Although, My main skill is web development
        both frontend and backend, I’m still interested in art and others. You
        can see below.
      </div>
      <button>Next</button>
    </Panel>
  )
}

export default PanelProfile
