import React from 'react'

export default function EventTIme() {
  return (
    <div className="eventtime">
  <div className="container">
    <div className="eventtime__area">
      <div className="eventtime__left">
        <h2>Upcoming Event</h2>
      </div>
      <div className="eventtime__center">
        <ul className="countdown count-down" data-date="Nove 09, 2022 21:14:01">
          <li className="clock-item">
            <span className="count-number days">56</span>
            <p className="count-text">Days</p>
          </li>
          <li className="clock-item">
            <span className="count-number hours">16</span>
            <p className="count-text">Hours</p>
          </li>
          <li className="clock-item">
            <span className="count-number minutes">25</span>
            <p className="count-text">Minutes</p>
          </li>
          <li className="clock-item">
            <span className="count-number seconds">19</span>
            <p className="count-text">Seconds</p>
          </li>
        </ul>
      </div>
      <div className="eventtime__right">
        <a href="#" className="default-btn move-right">
          <span>ALL EVENTS</span>
        </a>
      </div>
    </div>
  </div>
</div>

  )
}
