

function SearchEvent(){
    return(
        <section className="event-section">
        <div className="event-search-box">
            
            <div className="event-small-title">
                <p className="text-1">FIND YOUR NEXT EVENT</p>
                <p className="text-2">Search conferences, seminars, workshops, webinars and university programmes</p>
            </div>

      <div className="search-row">

        <div className="form-group">
            <label className="key-word">Keyword</label>
            <br />
            <input type="text" placeholder="Event, theme, organiser or keyword" className="keyword-btn" />
        </div>

        
        
            <div className="form-group">
            <label>Event type</label>
            <br />
            <select>
                <option>All types</option>
                <option>General University Event</option>
                <option>International Conference</option>
                <option>Conference</option>
                <option>Symposium</option>
                <option>Seminar</option>
                <option>Workshop</option>
                <option>Webinar</option>
                <option>Training / Professional Development</option>
                <option>Orientation</option>
                <option>Special University Programme</option>
            </select>
        </div>

        <div className="form-group">
            <label>Delivery</label>
            <br />
            <select>
                <option>All modes</option>
                <option>Online</option>
                <option>Physical</option>
                <option>Hybrid</option>
            </select>
        </div>

         <div className="form-group">
            <label>When</label>
            <br />
            <select>
                <option>Upcoming</option>
                <option>All published</option>
                <option>Past events</option>
            </select>
        </div>

        <div className="form-group">
            <label>Category</label>
            <br />
            <select>
                <option>All categories</option>
                <option>Career Development</option>
                <option>Conference</option>
                <option>Digital Orientation</option>
                <option>Entrepreneurship</option>
                <option>Research</option>
                <option>Seminar</option>
                <option>Staff Development</option>
                <option>Student Orientation</option>
                <option>Technical Training</option>
                <option>Workshop</option>
            </select>
        </div>

        </div>


        <div className="search-button">
            <div className="date-group">
            <label>From date</label>
            <br />
            <input
            type="date"
            onClick={(e) => e.target.showPicker && e.target.showPicker()}
            />
        </div>

        <div className="date-group">
            <label>To date</label>
            <br />
            <input
           type="date"
           onClick={(e) => e.target.showPicker && e.target.showPicker()}
          />
        </div>

        <button className="search-btn">Search Events</button>  
        </div>

        </div>





        <div className="event-statistics">

        <div className="event-five">
            <strong>5</strong>
            <p>UPCOMING EVENTS</p>
        </div>

        <div className="event-four">
            <strong>4</strong>
            <p>ACADEMIC EVENTS</p>
        </div>

        <div className="event-zero">
            <strong>0</strong>
            <p>PARTICIPANT REGISTRATIONS</p>
        </div>

        <div className="event-two">
            <strong>2</strong>
            <p>COUNTRIES REPRESENTED</p>
        </div>

        </div>

        

        </section>
    )

    
}
export default SearchEvent