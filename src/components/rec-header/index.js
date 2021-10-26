import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { RecHeaderWrapper } from './style'

const MRRecHeader = memo(function(props) {
  const { title, sorts } = props
  return (
    <RecHeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            sorts.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </RecHeaderWrapper>
  )
})

MRRecHeader.propTypes = {
  title: PropTypes.string.isRequired,
  sorts: PropTypes.array
}

MRRecHeader.defaultProps = {
  sorts: []
}

export default MRRecHeader