import React from 'react'
import Spotlight from './Spotlight'
import { PLATFORMS } from '../data/content'

const Platforms: React.FC = () => (
  <Spotlight
    id="platforms"
    eyebrow="Solution Platforms"
    title="Eight flagship platforms, engineered for industrial operations"
    blurb="Every platform is built on the same foundation: real-time telemetry, AI analytics, and dashboards operators actually use."
    items={PLATFORMS}
  />
)

export default Platforms
