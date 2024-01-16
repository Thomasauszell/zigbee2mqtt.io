"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[36253],{165567:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-6764a9ef","path":"/devices/TH1320ZB-04.html","title":"","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Unpairing","slug":"unpairing","link":"#unpairing","children":[]},{"level":3,"title":"The following thermostat parameters can be changed through MQTT","slug":"the-following-thermostat-parameters-can-be-changed-through-mqtt","link":"#the-following-thermostat-parameters-can-be-changed-through-mqtt","children":[]},{"level":3,"title":"The following status are reported by the thermostat","slug":"the-following-status-are-reported-by-the-thermostat","link":"#the-following-status-are-reported-by-the-thermostat","children":[]}]}],"git":{"updatedTime":1705438650000},"filePathRelative":"devices/TH1320ZB-04.md"}')},882363:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var a=o(166252);const i=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the two buttons simultaneously for 3 seconds. The wireless icon will blink when searching for the Zigbee network and stay steady when paired to it. Repeat if unsuccessful.</p><h3 id="unpairing" tabindex="-1"><a class="header-anchor" href="#unpairing" aria-hidden="true">#</a> Unpairing</h3><p>Press the two buttons simultaneously for 10 seconds and release. The device will restart. The wireless icon will disappear from the display.</p><h3 id="the-following-thermostat-parameters-can-be-changed-through-mqtt" tabindex="-1"><a class="header-anchor" href="#the-following-thermostat-parameters-can-be-changed-through-mqtt" aria-hidden="true">#</a> The following thermostat parameters can be changed through MQTT</h3><h4 id="occupancy-unoccupancy" tabindex="-1"><a class="header-anchor" href="#occupancy-unoccupancy" aria-hidden="true">#</a> Occupancy / Unoccupancy</h4><p>The thermostat can be instructed to use the occupancy or unoccupancy setpoints by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;thermostat_occupancy&quot;: &quot;OCCUPANCY&quot;}</code> where <code>OCCUPANCY</code> is one of the following values: <code>occupied</code>, <code>unoccupied</code>. The factory default value is <code>occupied</code>.</p><h4 id="floor-control-mode" tabindex="-1"><a class="header-anchor" href="#floor-control-mode" aria-hidden="true">#</a> Floor control mode</h4><p>The sensor used by the thermostat for temperature regulation can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;floor_control_mode&quot;: &quot;SENSOR&quot;}</code> where <code>SENSOR</code> is one of the following values: <code>ambiant</code>, <code>floor</code>. The factory default value is <code>floor</code>.</p><h4 id="ambient-maximum-heating-setpoint" tabindex="-1"><a class="header-anchor" href="#ambient-maximum-heating-setpoint" aria-hidden="true">#</a> Ambient maximum heating setpoint</h4><p>The maximum ambient temperature setpoint of the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;ambiant_max_heat_setpoint&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is the desired value (between 5 and 36 Celsius). This feature is disabled by default.</p><h4 id="floor-minimum-heating-setpoint" tabindex="-1"><a class="header-anchor" href="#floor-minimum-heating-setpoint" aria-hidden="true">#</a> Floor minimum heating setpoint</h4><p>The minimum floor temperature setpoint of the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;floor_min_heat_setpoint&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is the desired value (between 5 and 36 Celsius). This feature is disabled by default.</p><h4 id="floor-maximum-heating-setpoint" tabindex="-1"><a class="header-anchor" href="#floor-maximum-heating-setpoint" aria-hidden="true">#</a> Floor maximum heating setpoint</h4><p>The maximum floor temperature setpoint of the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;floor_max_heat_setpoint&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is the desired value (between 5 and 36 Celsius). This feature is disabled by default.</p><h4 id="floor-temperature-sensor" tabindex="-1"><a class="header-anchor" href="#floor-temperature-sensor" aria-hidden="true">#</a> Floor temperature sensor</h4><p>The floor thermistor temperature sensor value connected to the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;temperature_sensor&quot;: &quot;SENSOR&quot;}</code> where <code>SENSOR</code> is one of the following values: <code>10k</code>, <code>12k</code>. The factory default value is <code>10k</code>.</p><h4 id="display-backlight" tabindex="-1"><a class="header-anchor" href="#display-backlight" aria-hidden="true">#</a> Display backlight</h4><p>The thermostat display can be set to turn on only when a button is pressed or stay on and auto dim by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;backlight_auto_dim&quot;: &quot;BACKLIGHT&quot;}</code> where <code>BACKLIGHT</code> is one of the following values: <code>on demand</code>, <code>sensing</code>. The factory default value is <code>sensing</code>.</p><h4 id="time-to-display" tabindex="-1"><a class="header-anchor" href="#time-to-display" aria-hidden="true">#</a> Time to display</h4><p>The time clock value to display on the thermostat can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;thermostat_time&quot;: &quot;TIME&quot;}</code> where <code>TIME</code> is the number of seconds since 2000-01-01 or empty. The Zigbee gateway local time will be used when publishing an empty value. By default, the time clock is not displayed.</p><h4 id="time-format-displayed" tabindex="-1"><a class="header-anchor" href="#time-format-displayed" aria-hidden="true">#</a> Time format displayed</h4><p>The time clock format on the thermostat display can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;time_format&quot;: &quot;FORMAT&quot;}</code> where <code>FORMAT</code> is one of the following values: <code>12h</code>, <code>24h</code>. The factory default value is <code>24h</code>.</p><h4 id="enable-outdoor-temperature-display" tabindex="-1"><a class="header-anchor" href="#enable-outdoor-temperature-display" aria-hidden="true">#</a> Enable outdoor temperature display</h4><p>The display of outdoor temperature on the thermostat can be enabled / disabled by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;enable_outdoor_temperature&quot;: &quot;ENABLE&quot;}</code> where <code>ENABLE</code> is one of the following values: <code>on</code>, <code>off</code>. <code>on</code> value will set the outdoor temperature refresh timeout to 3 hours. <code>off</code> value will set the outdoor temperature refresh timeout to 30 seconds. When the refresh timeout is expired the thermostat setpoint temperature will be displayed. The outdoor temperature is not displayed by default.</p><h4 id="outdoor-temperature-to-display" tabindex="-1"><a class="header-anchor" href="#outdoor-temperature-to-display" aria-hidden="true">#</a> Outdoor temperature to display</h4><p>The outdoor temperature to display on the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;thermostat_outdoor_temperature&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is between -100 to +100.</p><h3 id="the-following-status-are-reported-by-the-thermostat" tabindex="-1"><a class="header-anchor" href="#the-following-status-are-reported-by-the-thermostat" aria-hidden="true">#</a> The following status are reported by the thermostat</h3><h4 id="groud-fault-circuit-indicator-status-gfci" tabindex="-1"><a class="header-anchor" href="#groud-fault-circuit-indicator-status-gfci" aria-hidden="true">#</a> Groud fault circuit indicator status (GFCi)</h4><p>Turns <code>on</code> when the thermostat GFCi detects a ground fault. The status is reported to the device state as <code>gfci_status</code> every hour or when it changes. <code>gfci_status</code> has one of the following values: <code>on</code>, <code>off</code>. The default value is <code>off</code>.</p><h4 id="floor-limit-status" tabindex="-1"><a class="header-anchor" href="#floor-limit-status" aria-hidden="true">#</a> Floor limit status</h4><p>This status is <code>on</code> when the floor temperature exceeds the maximum floor heating setpoint. It is reported to the device state as <code>floor_limit_status</code> every hour or when it changes. <code>floor_limit_status</code> has one of the following values: <code>on</code>, <code>off</code>. The default value is <code>off</code>.</p>',33),r={},d=(0,o(983744).Z)(r,[["render",function(e,t){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),i,(0,a.kq)(" Notes END: Do not edit below this line ")])}]])}}]);