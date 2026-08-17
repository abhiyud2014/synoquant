import React from 'react'
import Spotlight from './Spotlight'
import { VERTICALS } from '../data/content'

const Verticals: React.FC = () => (
  <Spotlight
    id="verticals"
    eyebrow="Capability Verticals"
    title="Twelve disciplines, one delivery team"
    blurb="Deep expertise across AI, data, cloud, and industrial technology — combined and deployed as one integrated capability."
    items={VERTICALS}
  />
)

export default Verticals
