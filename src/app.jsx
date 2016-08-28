import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import Api from 'api.coffee'
import Mixin from 'mixin'

import { Router, Route, browserHistory } from 'react-router'
import Parallax from 'parallax/parallax'
import Gallery from 'gallery/gallery'
import Clock from 'clock/clock'
import Slogan from 'slogan/slogan'
import Info from 'info/info'
import Footer from 'footer/footer'
import Header from 'header/header'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="parallax">
        <Parallax
          id="header"
          style={{
            zIndex: 5
          }}
          baseStyle={{
            backgroundImage: 'url(https://lh3.googleusercontent.com/lYia1wKV4UGmVpzUFjuMhZVJ_F9Y0DMzlX_8eKUqFx35w0U-GrBbxtvy6kgk9XHFuQ9aOnzGqkWahyDcPGGZKYoL1BtL99y-3o-2CMVN_Z9ygXCXrna5f7YhnjDuj0N0EnTwXb73xD3V1cSk1PT7Wq193LhHKLL2aTmdON1mxISpOsxAMBefHWVfIWNH9LBixL2CU_rUNDrqVRAS78pgBjfRSLa4-LpZ4sTAuipzQ1dVp36GLylYuZbsv-VKTuVm0A4XQgcXZxP1SXrOaPJzpHs60I37tl-w-d-fqO8bREHJSbIinDBPI0L7liFUkZSAFI9f08n0EK86B-cnzFy7YH8FIWPpCHfFBnEzBtoqcLkZXhqE_WwEN5Qc4kHTrc3D_aKPpfnsjx1aaQY7ACnQVfTlSqBDS3FeLr7J4iE4BHaLJowPekuNLSiRGKGiSwqjbhASTRc3ZwOk7AaqJH9KX0PjoULMGTE-lenVUeTxTe_qJjhvYKn0V-JxbIW5uvTtCDaq4UwR9yhZ3DCMWYSLs8hhHduYcO5ig3dd03BvHKPXJ8eJgvVOMd524yOVJDFoulOXTPPvn3Lw_UykSqu6CvbHiNCkUGafY8T4cXkUa4NF-IGeiA=w1030-h772-no)'
          }}
        >
          <Header />
        </Parallax>
        <Parallax
          id="clock"
          style={{
            zIndex: 3
          }}
          layers={[
            {
              position: 'back',
              style: {
                backgroundImage: 'url(https://lh3.googleusercontent.com/seZxpi0Nvw4aMjIXVugHqAwW2hjZs1RWJyNexxdAITAMdDLtG20WTpZtN3jqTUiMXXl3J5L9_6mrIOCZCfpAZE9KDCrxD4hXk5ylOCtoyjPjEPa6DQvjImjyrQ7lxRKDkOZdcI9NH4J0Tgwgm2pzfPJgXxVL6PO90zz_ZESERjCGAbKeVKP4ojRyYDuigbVD4MF3M1qPH_KjZ8bRyWN2Ozp23oZlezGTSGQx2CPBhdAzBs7l2vFEeoL-UC_Sf1-chqMVfaaTCq5saDJrgheKEql2hjoDLofeUYbfaj6yJ-Y89pLOV5aBAzG3dmHEceEzFulNSSWIPUYuSY4MgxtyBdQJb_quA3hMqpeg8Z4iQvL0ZqRosiHHEXs4baOLO-_sBxBPIXgvAw_TZcf-ZcWBPdnpS__g3LmsbmGCJMop8p_2hjnT3LYTcKuZ1itYuxmDmRx0KJ6sgwAWsr9SMXbyPHaZy3eeKNU0WZih_qL-HKq_d5y-c16uo4-TrwW3UnH-Jt5J1YWpsFK1RA3OGXwzCzj6xYe91Kregi_kvScnRkqsabVO6pkp8tRilSqhPi-fObp_CwrVs_NQtk-oN7YQjb6gi2mma8L-um8y9z4isC1qrb3CLg=w702-h936-no)'
              }
            }
          ]}
        >
          <Clock />
        </Parallax>
        <Parallax
          id="info"
          style={{
            zIndex: 4
          }}
        >
          <Info></Info>
        </Parallax>
        <Parallax
          id="slogan-1"
          style={{
            zIndex: 3
          }}
          layers={[
            {
              position: 'back',
              style: {
                backgroundImage: 'url(https://lh3.googleusercontent.com/69iroAANhwiD1jKZ6Be9grohbNj2xsBiVDMxBiuQkLcwkDoIQHs60puIFHs-z2JgE3QvGK5QGQRfrOYj_t1ioO-8n-n2LLQjvXBH9UyCJkZJL-R8i8y6f5tfxcc573qcBTtAA6HDUdHRaKvb7HKtt-IaVAO-I1cQOMQ52AEjbwUAx_hr5u_i6VS1R6MeA0zqBGbNuV5qdvA1wadOP1bIUFAv3z4IbfeiplxzoFJPcZBmTLuhXdnwdEli0lVbrFPak9N823U31gST5nFFJozlbjeAOetLoigValGGiJuevi6bxLdXmDknfb0N1faaWbDUjJvBQUTqK0OythR63tB85ghTjrJR-0pCu9yQsxScYTeLao57S0V5btZITqwhvHRUvvu2t6fCH6uEVNmpuYtbqJT8DYbwVuyGbIXXYP2502WElONkp9N9qTkZkhGdgpuX-9s6ZMkfx__w6NKr4f-fQag12PTqMG99MP_eST_cNvjd5KHV4pjjWcC3XF-tlFb7KPhrNo6Q2cqPJGwehKOup99Ygro0fv7VJitx_GgwtvUmhYupV37tTin8OFt30cnpuUfAlL3bZFgwilJLzs4sg4rnc3oSMSwSeaPWq3yrduc7dRlZtA=w1596-h1198-no)'

              }
            }
          ]}
        >
          <Slogan>Life's a climb. But the view is great.</Slogan>
        </Parallax>
        <Parallax
          id="footer"
          style={{
            zIndex: 4
          }}
        >
          <Footer></Footer>
        </Parallax>
      </div>
    )
  }
}


$(document).ready( () => {
  window.$ = $
  window.React = React
  window.ReactDOM = ReactDOM
  window.api = new Api('https://italk-pro.herokuapp.com', 'api/v1')
  window.Mixin = Mixin

  window.api.ping().then(() => console.info('Server connected.'), () => console.error('Server not found.'))

  ReactDOM.render((
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
      <Route path="/clock" component={ Clock }></Route>
      <Route path="/gallery" component={ Gallery } />
    </Router>
  ), document.getElementById('main-container'))
})
