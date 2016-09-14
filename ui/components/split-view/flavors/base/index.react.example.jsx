/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import _ from 'lodash';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';

/*
Structure
-----
Container
Page Header
Sort Header
Unordered List
 - Tiles
*/

const results = [{
  'objectName': 'Riley Shultz',
  'leadScore': '99',
  'company': 'Biotech, Inc.',
  'status': 'Nurturing'
}, {
  'objectName': 'Jason A. - VP of Sales',
  'leadScore': '92',
  'company': 'Case Management Solutions - San Francisco',
  'status': 'Contacted'
}];

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Row = props =>
  <tr className={ className('slds-split-view__item', props.className) } role="row" key={ props.key }>
    <th scope="row" role="gridcell" className="slds-grow slds-has-flexi-truncate">
      <div className="slds-grid slds-wrap">
        <span className="slds-grow slds-truncate slds-split-view__row-heading" title={ props.name || 'Object Name' }>
          <a href="javascript:void(0);">{ props.name || 'Object Name' }</a>
        </span>
        <span className="slds-flex-none slds-truncate slds-col--bump-left" title={ props.colTwo || 'Column 2' }>{ props.colTwo || 'Column 2' }</span>
      </div>
      <div className="slds-grid slds-wrap">
        <span className="slds-grow slds-truncate" title={ props.colThree || 'Column 3' }>{ props.colThree || 'Column 3' }</span>
        <span className="slds-flex-none slds-truncate slds-col--bump-left" title={ props.colFour || 'Column 4' }>{ props.colFour || 'Column 4' }</span>
      </div>
    </th>
    <td role="gridcell" className="slds-flex-none slds-p-left--medium">
      <ButtonIcon
        className="slds-button--icon-border-inverse slds-button--icon-x-small"
        symbol="down"
        aria-haspopup="true"
        assistiveText="More options"
      />
    </td>
  </tr>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <div className="demo-only" style={{ width: '20rem' }}>
    <div className="slds-split-view slds-grid slds-grid--vertical">

      <div className="slds-split-view__header" role="banner">
        <div className="slds-grid">
          <div className="slds-media slds-media--center">
            <div className="slds-media__figure">
              <div className="slds-icon_container slds-icon-standard-lead">
                <SvgIcon className="slds-icon" sprite="standard" symbol="lead" />
                <span className="slds-assistive-text">Lead</span>
              </div>
            </div>
            <div className="slds-media__body">
              <button className="slds-button slds-m-right--small slds-grid slds-truncate" aria-haspopup="true">
                <div className="slds-grid slds-grid--vertical-align-center slds-truncate">
                  <h1 className="slds-page-header__title slds-truncate" title="My Leads">My Leads</h1>
                  <SvgIcon className="slds-button__icon slds-button__icon--right slds-no-flex" sprite="utility" symbol="down" assistiveText="Down" />
                </div>
              </button>
            </div>
          </div>
          <div className="slds-col--bump-left">
            <ButtonIcon
              className="slds-button--icon slds-button--icon-border-inverse"
              aria-haspopup="true"
              symbol="down"
            />
          </div>
        </div>
        <div className="slds-grid">
          <p className="slds-text-title">42 items &bull; Updated just now</p>
          <ButtonIcon
            className="slds-button--icon-inverse slds-button--icon-x-small slds-col--bump-left"
            symbol="refresh"
            assistiveText="Refresh Results"
          />
        </div>
      </div>
      <table className="slds-table--fixed-layout" role="grid">
        <thead>
          <tr>
            <th scope="col">Lead Score</th>
            <th scope="col">Filter</th>
          </tr>
        </thead>
        <tbody>
          { _.times(results.length, i =>
            <Row
              key={ i }
              name={ results[i].objectName }
              colTwo={ results[i].leadScore }
              colThree={ results[i].company }
              colFour={ results[i].status }
            />
          )}
        </tbody>
      </table>
    </div>
  </div>
);
