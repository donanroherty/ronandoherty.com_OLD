import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconStyle = styled.svg``

export const icons = {
  github: `M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z`,
  info: `M512 42.667c-260.267 0-469.333 209.067-469.333 469.333s209.067 469.333 469.333 469.333 469.333-209.067 469.333-469.333-209.067-469.333-469.333-469.333zM512 896c-213.333 0-384-170.667-384-384s170.667-384 384-384c213.333 0 384 170.667 384 384s-170.667 384-384 384z M512 469.333c-25.6 0-42.667 17.067-42.667 42.667v170.667c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-170.667c0-25.6-17.067-42.667-42.667-42.667z M482.133 311.467c-8.533 8.533-12.8 17.067-12.8 29.867s4.267 21.333 12.8 29.867c8.533 8.533 17.067 12.8 29.867 12.8s21.333-4.267 29.867-12.8c8.533-8.533 12.8-17.067 12.8-29.867s-4.267-21.333-12.8-29.867c-17.067-17.067-42.667-17.067-59.733 0z`,
  linkedIn: `M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z M64 384h192v576h-192v-576z M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z`,
  search: `M406 598c106 0 192-86 192-192s-86-192-192-192-192 86-192 192 86 192 192 192zM662 598l212 212-64 64-212-212v-34l-12-12c-48 42-112 66-180 66-154 0-278-122-278-276s124-278 278-278 276 124 276 278c0 68-24 132-66 180l12 12h34z`,
  warning: `M512 92.774l429.102 855.226h-858.206l429.104-855.226zM512 0c-22.070 0-44.14 14.882-60.884 44.648l-437.074 871.112c-33.486 59.532-5 108.24 63.304 108.24h869.308c68.3 0 96.792-48.708 63.3-108.24h0.002l-437.074-871.112c-16.742-29.766-38.812-44.648-60.882-44.648v0z M576 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z M512 704c-35.346 0-64-28.654-64-64v-192c0-35.346 28.654-64 64-64s64 28.654 64 64v192c0 35.346-28.654 64-64 64z`,
}

const Icon = props => {
  return (
    <IconStyle width={props.size} height={props.size} viewBox="0 0 1024 1024">
      <path d={icons[props.icon]} />
    </IconStyle>
  )
}

Icon.defaultProps = {
  icon: 'warning',
  size: 30,
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
}

export default Icon
