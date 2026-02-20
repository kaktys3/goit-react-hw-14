import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1440}
    height={1105}
    viewBox="0 0 1440 1105"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Ряд 1 */}
    <rect x="0" y="0" width="345" height="345" rx="8" />
    <rect x="365" y="0" width="345" height="345" rx="8" />
    <rect x="730" y="0" width="345" height="345" rx="8" />
    <rect x="1095" y="0" width="345" height="345" rx="8" />

    {/* Ряд 2 */}
    <rect x="0" y="365" width="345" height="345" rx="8" />
    <rect x="365" y="365" width="345" height="345" rx="8" />
    <rect x="730" y="365" width="345" height="345" rx="8" />
    <rect x="1095" y="365" width="345" height="345" rx="8" />

    {/* Ряд 3 */}
    <rect x="0" y="730" width="345" height="345" rx="8" />
    <rect x="365" y="730" width="345" height="345" rx="8" />
    <rect x="730" y="730" width="345" height="345" rx="8" />
    <rect x="1095" y="730" width="345" height="345" rx="8" />
  </ContentLoader>
)

export default MyLoader
