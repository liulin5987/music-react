import React, { memo,Fragment } from 'react'

import { footerLinks, footerImages } from '@/common/local-data.js'

import { MRFooter, MRFooterRight, MRFooterLeft } from './style.js'

export default memo(function MRAppFooter() {
  return (
    <MRFooter>
      <div className='wrap-v2 content'>
        <MRFooterRight>
          <div className='policy'>
            {footerLinks.map((item, index) => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link}>
                    {item.title}
                  </a>
                  {index < footerLinks.length - 1 ? (
                    <span className='line'>|</span>
                  ) : (
                    ''
                  )}
                </Fragment>
              )
            })}
          </div>
          <div className='seq'>
            <span className='mr14'>网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a
              href='https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png'
              target='_blank'
              rel='noreferrer'
            >
              浙网文[2021] 1186-054号
            </a>
          </div>
          <div className='seq'>
            <span className='mr14'>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href='mailto:ncm5990@163.com'>ncm5990@163.com</a>
          </div>
          <div className='seq'>
            <a
              href='https://beian.miit.gov.cn/#/Integrated/index'
              className='mr14'
            >
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
            <a
              href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564'
              target='_blank'
              rel='noreferrer'
            >
              浙公网安备 33010902002564号
            </a>
          </div>
        </MRFooterRight>
        <MRFooterLeft>
          {footerImages.map((item) => (
            <div className="item" key={item.title}>
              <a href={item.link} className="link"> </a>
              <span>{item.title}</span>
            </div>
          ))}
        </MRFooterLeft>
      </div>
    </MRFooter>
  )
})
