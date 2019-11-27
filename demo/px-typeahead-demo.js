/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-icon-set/px-icon-set.js';
import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import 'px-demo/px-demo-code-editor.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-typeahead" description="Px-typeahead is a Predix UI component similar to a dropdown which shows possible autocompletion options for a given search term based on a list of possible values." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Code Editor -->
      <px-demo-code-editor slot="px-demo-code-editor" props="{{props}}" config="[[chosenConfig]]"></px-demo-code-editor>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">
        <div style="width:250px;">
          <px-typeahead local-candidates="{{props.localCandidates.value}}" disabled="{{props.disabled.value}}" required="{{props.required.value}}" prefetch-url="{{props.prefetchUrl.value}}" prefetch-headers="{{props.prefetchHeaders.value}}" placeholder="[[props.placeholder.value]]">
          </px-typeahead>
        </div>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-typeahead" links-includes="[[linksIncludes]]">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-typeahead"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-typeahead-demo',

  properties: {

    /**
     * @property demoProps
     * @type {Object}
     */
    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    /**
     * @property demoProps
     * @type {Array}
     */
    configs: {
      type: Array,
      value: function(){
        return [
          {
            configName: "Default",
            configReset: true,
            prefetchUrl: '',
            prefetchHeaders: ''
          },
          {
            configName: "Prefetch URL",
            disabled: false,
            localCandidates: '',
            placeholder: "Options from a JSON file",
            prefetchUrl: "https://cors-anywhere.herokuapp.com/https://predix-ui.github.io/px-typeahead/px-typeahead/countries.json",
            prefetchHeaders: {
              "From": "predixdesignsystem@ge.com"
            }
          }
        ];
      }
    }
  },

  /**
   * A reference for `this.props`. Read the documentation there.
   */
  demoProps: {
    placeholder: {
      type: String,
      defaultValue: "Enter your search query",
      inputType: 'text'
    },
    disabled: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },
    required: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },
    localCandidates: {
      type: Array,
      defaultValue: [
         "Alabama",
         "Alaska",
         "American Samoa",
         "Arizona",
         "Arkansas",
         "California",
         "Colorado",
         "Connecticut",
         "Delaware",
         "District Of Columbia",
         "Federated States Of Micronesia",
         "Florida",
         "Georgia",
         "Guam",
         "Hawaii",
         "Idaho",
         "Illinois",
         "Indiana",
         "Iowa",
         "Kansas",
         "Kentucky",
         "Louisiana",
         "Maine",
         "Marshall Islands",
         "Maryland",
         "Massachusetts",
         "Michigan",
         "Minnesota",
         "Mississippi",
         "Missouri",
         "Montana",
         "Nebraska",
         "Nevada",
         "New Hampshire",
         "New Jersey",
         "New Mexico",
         "New York",
         "North Carolina",
         "North Dakota",
         "Northern Mariana Islands",
         "Ohio",
         "Oklahoma",
         "Oregon",
         "Palau",
         "Pennsylvania",
         "Puerto Rico",
         "Rhode Island",
         "South Carolina",
         "South Dakota",
         "Tennessee",
         "Texas",
         "Utah",
         "Vermont",
         "Virgin Islands",
         "Virginia",
         "Washington",
         "West Virginia",
         "Wisconsin",
         "Wyoming"
        ]
    },
    prefetchUrl: {
      type: String,
      defaultValue: "https://cors-anywhere.herokuapp.com/https://predix-ui.github.io/px-typeahead/px-typeahead/countries.json"
    },
    prefetchHeaders: {
      type: Object,
      inputType: 'code:JSON',
      defaultValue: {
        'From': 'predixdesignsystem@ge.com'
      }
    }
  }
});
