import React, { Component } from 'react'

export default class Footer extends Component {
  constructor (props) {
    super(props)
  }


  render () {
    return (
      <footer>
        <div className="row contact">
          <div className="large-6 columns">
            <a href="mailto:eric@kinyeung.com">
              eric@kinyeung.com
            </a>
          </div>
          <div className="large-6 columns">
            <a href="tel:+85267049679">
              +852 67049679
            </a>
          </div>
        </div>
        <div className="row">
          <div className="large-8 centered columns">
            <ul className="social clearfix">
              <li>
                <a href="https://hk.linkedin.com/in/kin-yeung-chan-a990b099" className="icon">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/EricChan7" className="icon">
                  <i className="fa fa-github-square"></i>
                </a>
              </li>
              <li>
                <a href="https://bitbucket.org/ericchanky" className="icon">
                  <i className="fa fa-bitbucket-square"></i>
                </a>
              </li>
              <li>
                <a href="" className="icon">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2016 KinYeung. All right reserved.
        </div>
      </footer>
    )
  }
}
