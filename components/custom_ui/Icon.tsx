import React from 'react'

const Icon = ({ fill = 'black' }) => {

  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="20 30 160 155"
      preserveAspectRatio='xMidYMid meet'

    >
      <style type="text/css">
        {`
            .st1 {
                fill: #FF6900 !important;
            }
            .dark .logo0 {
                fill: #FFF !important;
            }
            .logo0 {
                fill: ${fill} !important;
            }
        `}
      </style>
      {/* BrandDrive Logo*/}
      <path className="st1" d="M89.9,80.3V61.4c-0.1-8.2-6.8-14.8-15-14.8h-0.7c-8.2,0-14.9,6.6-15,14.8v61.1C59.3,103.3,71.7,86.3,89.9,80.3z"></path>
      <path className="st1" d="M59.2,123.9v23.2c0.1,8.2,6.8,14.8,15,14.8h0.7c1.6,0,3.2-0.3,4.7-0.8C66.9,153,59.3,139,59.2,123.9z"></path>
      <path className="st1" d="M106.6,83.8c-21.9,0-39.7,17.8-39.7,39.7s17.8,39.7,39.7,39.7s39.7-17.8,39.7-39.7l0,0 C146.4,101.6,128.6,83.8,106.6,83.8z M106.6,141.6c-10,0-18.1-8.1-18.1-18.1c0-10,8.1-18.1,18.1-18.1c10,0,18.1,8.1,18.1,18.1 c0,0,0,0,0,0C124.7,133.5,116.6,141.6,106.6,141.6z"></path>

    </svg>
  )
}

export default Icon
// VJtLj831}9>[