// import npm packages
import React from 'react';

// import local files
import 'utils/assets/css/style.css';
// import 'utils/assets/css/bootstrap.min.css';
import 'utils/assets/css/fonts.css';
import 'utils/assets/css/font-awesome.min.css';
import 'utils/assets/js/custom.js';
import DropCaret from 'images/icons/drop-caret.png';
import Info from 'images/icons/info.png';
import Banned from 'images/icons/banned.png';

/* eslint-disable react/prefer-stateless-function */
class EERRComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div
          className={`collapse row ${this.props.isOpen ? 'show' : ''}`}
          id="collapsePannel"
          style={{ padding: '15px', marginTop: '10px' }}
        >
          <div className="shdow_box" style={{ width: '100%' }}>
            <div className="divided-box">
              <div className="child_one selec">
                <span>Business Line</span>
                <select name="" id="">
                  <option value="">all selected (41)</option>
                  <option value="">Type(1)</option>
                  <option value="">Type(2)</option>
                  <option value="">Type(3)</option>
                  <option value="">Type(4)</option>
                  <option value="">Type(5)</option>
                </select>
              </div>
              <div className="child_one selec">
                <span>Industry</span>
                <select name="" id="">
                  <option value="">all selected (41)</option>
                  <option value="">Type(1)</option>
                  <option value="">Type(2)</option>
                  <option value="">Type(3)</option>
                  <option value="">Type(4)</option>
                  <option value="">Type(5)</option>
                </select>
              </div>
              <div className="child_one selec">
                <span>Customers</span>
                <select name="" id="">
                  <option value="">all selected (41)</option>
                  <option value="">Type(1)</option>
                  <option value="">Type(2)</option>
                  <option value="">Type(3)</option>
                  <option value="">Type(4)</option>
                  <option value="">Type(5)</option>
                </select>
              </div>
              <div className="child_one selec">
                <span>company</span>
                <select name="" id="">
                  <option value="">all selected (41)</option>
                  <option value="">Type(1)</option>
                  <option value="">Type(2)</option>
                  <option value="">Type(3)</option>
                  <option value="">Type(4)</option>
                  <option value="">Type(5)</option>
                </select>
              </div>
              <div className="child_one selec">
                <span>result center</span>
                <select name="" id="">
                  <option value="">all selected (41)</option>
                  <option value="">Type(1)</option>
                  <option value="">Type(2)</option>
                  <option value="">Type(3)</option>
                  <option value="">Type(4)</option>
                  <option value="">Type(5)</option>
                </select>
              </div>
              <div className="child_one ">
                <div className="filter_box">
                  <div>
                    <span>account group</span>
                    <div className="selec acnt_arrow">
                      <select name="" id="" className="last-selt">
                        <option value="">all selected (41)</option>
                        <option value="">Type(1)</option>
                        <option value="">Type(2)</option>
                        <option value="">Type(3)</option>
                        <option value="">Type(4)</option>
                        <option value="">Type(5)</option>
                      </select>
                    </div>
                  </div>
                  <div className="flter">
                    <i className="fa fa-filter" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="divided-box bottom_none">
                <div className="child_one selec">
                  <span>Year</span>
                  <select name="" id="">
                    <option value="">Year</option>
                    <option value="">2015</option>
                    <option value="">2016</option>
                    <option value="">2017</option>
                    <option value="">2018</option>
                    <option value="">2019</option>
                  </select>
                </div>
                <div className="child_one selec">
                  <span>month</span>
                  <select name="" id="">
                    <option value="">None selected</option>
                    <option value="">Type(1)</option>
                    <option value="">Type(2)</option>
                    <option value="">Type(3)</option>
                    <option value="">Type(4)</option>
                    <option value="">Type(5)</option>
                  </select>
                </div>
                <div className="child_one selec">
                  <span>executive</span>
                  <select name="" id="">
                    <option value="">None selected</option>
                    <option value="">Type(1)</option>
                    <option value="">Type(2)</option>
                    <option value="">Type(3)</option>
                    <option value="">Type(4)</option>
                    <option value="">Type(5)</option>
                  </select>
                </div>
                <div className="child_one selec">
                  <span>metrics</span>
                  <select name="" id="">
                    <option value="">select</option>
                    <option value="">Type(1)</option>
                    <option value="">Type(2)</option>
                    <option value="">Type(3)</option>
                    <option value="">Type(4)</option>
                    <option value="">Type(5)</option>
                  </select>
                </div>
                <div className="child_one selec">
                  <span>comparison</span>
                  <select name="" id="">
                    <option value="">select</option>
                    <option value="">Type(1)</option>
                    <option value="">Type(2)</option>
                    <option value="">Type(3)</option>
                    <option value="">Type(4)</option>
                    <option value="">Type(5)</option>
                  </select>
                </div>
                <div className="child_one">
                  <div className="save-row">
                    <ul>
                      <li>
                        <input type="checkbox" className="mt_tp-5" />
                      </li>
                      <li>
                        <p className="margin_cap">margins</p>
                      </li>
                      <li>
                        <a href="#" className="gevrate dark_green">
                          Generate
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-floppy-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-sticky-note" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="next-prev-section">
            <ul style={{ float: 'right' }}>
              <li>
                <a href="#">
                  <img
                    src={Banned}
                    style={{
                      width: '30px',
                      marginTop: '-5px',
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-left" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="shdow_box"
          style={{
            marginTop: '60px',
            marginBottom: '20px',
            padding: '0px 0px 0px 0px',
          }}
        >
          <div className="">
            <div className="">
              <div className="tbl_op">
                <table className="table">
                  <thead>
                    <tr>
                      <th />
                      <th>jan-15</th>
                      <th>feb-15</th>
                      <th>mar-15</th>
                      <th>apr-15</th>
                      <th>may-15</th>
                      <th>jun-15</th>
                      <th>jul-15</th>
                      <th>aug-15</th>
                      <th>sep-15</th>
                      <th>oct-15</th>
                      <th>nov-15</th>
                      <th>dec-15</th>
                      <th>total 2015</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="grey">
                      <td>
                        <span className="yellow circle" /> income{' '}
                        <span className="info-tag">
                          <i className="circle-info" />
                        </span>
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>

                    <tr>
                      <td>
                        <span className="green circle" /> D Month / Month-1
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="green circle" /> Month /
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="yellow circle" /> ytd
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="green circle" />
                        ytd /
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="green circle" />D YTD vs
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="green circle" />D YTD / vs
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr className="grey">
                      <td>
                        <span className="yellow circle drop-caert">
                          <img src={DropCaret} alt="" />
                        </span>
                        TOTAL COSTS{' '}
                        <span className="ifo-btn">
                          <img src={Info} alt="" />
                        </span>
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr className="viloet_light">
                      <td>
                        <span className="yellow circle drop-caert">
                          <img src={DropCaret} alt="" />
                        </span>
                        Direct COSTS
                        <span className="ifo-btn">
                          <img src={Info} alt="" />
                        </span>
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="green circle" />
                        Variable costs
                        <span className="ifo-btn">
                          <img src={Info} alt="" />
                        </span>
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="green circle" />
                        HR
                        <span className="ifo-btn">
                          <img src={Info} alt="" />
                        </span>
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr className="light_pink">
                      <td>
                        <span className="yellow circle" />
                        Contribution margin
                        <span className="ifo-btn">
                          <img src={Info} alt="" />
                        </span>
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr className="viloet_light">
                      <td>
                        <span className="green circle" />
                        indirect COSTS
                        <span className="ifo-btn">
                          <img src={Info} alt="" />
                        </span>
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr className="light_pink">
                      <td>
                        <span className="green circle" />
                        Exploitation Margin
                        <span className="ifo-btn">
                          <img src={Info} alt="" />
                        </span>
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>

                      <td className="table-data">35727</td>
                    </tr>
                    <tr className="grey">
                      <td>
                        <span className="green circle" />
                        indirect COSTS
                        <span className="ifo-btn">
                          <img src={Info} alt="" />
                        </span>
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>
                      <td className="table-data">35727</td>
                    </tr>
                    <tr className="light_pink">
                      <td>
                        <span className="green circle" />
                        Exploitation Margin
                        <span className="ifo-btn">
                          <img src={Info} alt="" />
                        </span>
                      </td>
                      <td className="table-data">2817</td>
                      <td className="table-data">2845</td>
                      <td className="table-data">2874</td>
                      <td className="table-data">2902</td>
                      <td className="table-data">2931</td>
                      <td className="table-data">2981</td>
                      <td className="table-data">2990</td>
                      <td className="table-data">3050</td>
                      <td className="table-data">3081</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">3112</td>
                      <td className="table-data">5485</td>
                      <td className="table-data">35727</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EERRComponent;
