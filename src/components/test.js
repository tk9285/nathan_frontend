export default class Booking extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        date: "",
        time: "",
        service: "",
        bookings: [],
        toggleEdit: false
      };
    }
  
    componentDidMount() {
      this.fetchData();
    }
    fetchData = () => {
      fetch("/bookings")
        .then(res => res.json())
        .then(json => this.setState({ bookings: json }))
        .then(a => console.log(this.state.bookings));
    };
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = async e => {
      e.preventDefault();
      const { name, email, date, time, service } = this.state;
      const data = {
        name,
        email,
        time: `${date}-${time}`,
        service
      };
      await axios
        .post("/bookings", data)
        .then(res => {
          if (res.status === 200) {
            console.log(res);
            this.setState(state => {
              state.bookings.push(res.data);
              state.name = "";
              state.email = "";
              state.date = "";
              state.time = "";
              state.service = "";
              return state;
            });
          }
        })
        .catch(err => console.error(err));
    };
  
    handleEdit = async (event, id) => {
      event.preventDefault();
      const { name, email, date, time, service } = this.state;
      const data = {
        name,
        email,
        time: `${date}-${time}`,
        service
      };
  
      await axios
        .put(`/bookings/${id}`, data)
        .then(res => {
          if (res.status === 200) {
            console.log(res);
            this.setState(state => {
              state.bookings[id] = res.data;
              state.name = "";
              state.email = "";
              state.date = "";
              state.time = "";
              state.service = "";
              return state;
            });
          }
        })
        .catch(err => console.error(err));
    };
    toggleEditForm = id => {
      console.log(id);
      if (this.state.toggleEdit === false) {
        this.setState({ toggleEdit: id });
      } else {
        this.setState({ toggleEdit: false });
      }
    };
  
    handleDelete = async id => {
      await axios.delete(`bookings/${id}`).then(res => this.fetchData());
    };
    showEditForm = id => {
      return this.state.toggleEdit === id ? (
        <div className="booking-form">
          <h3>Edit Appointment</h3>
          <form onSubmit={e => this.handleEdit(e, id)}>
            <label htmlFor="">Name: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
  
            <label htmlFor="">e-mail</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
  
            <label htmlFor="">Date: </label>
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
  
            <label htmlFor="">Time</label>
            <input
              type="time"
              name="time"
              min="06:00"
              max="18:00"
              value={this.state.time}
              onChange={this.handleChange}
            />
  
            <label htmlFor="">Service</label>
            <input
              name="service"
              value={this.state.service}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : null;
    };
    render() {
      return (
        <div>
          <div className="booking-top">
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="booking-form">
              <h3>Book an Appointment</h3>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Name: </label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
  
                <label htmlFor="">e-mail</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
  
                <label htmlFor="">Date: </label>
                <input
                  type="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
  
                <label htmlFor="">Time</label>
                <input
                  type="time"
                  name="time"
                  min="06:00"
                  max="18:00"
                  value={this.state.time}
                  onChange={this.handleChange}
                />
  
                <label htmlFor="">Service</label>
                <input
                  name="service"
                  value={this.state.service}
                  onChange={this.handleChange}
                />
  
                <input type="submit" value="Book Now" />
              </form>
            </div>
          </div>
  
          <div className="bookings">
            {this.state.bookings.map(booking => {
              return (
                <div className="booking" key={booking.id}>
                  <div className="buttons">
                    <button onClick={() => this.handleDelete(booking.id)}>
                      X
                    </button>
                    <button onClick={() => this.toggleEditForm(booking.id)}>
                      Edit
                    </button>
                  </div>
                  {this.showEditForm(booking.id)}
                  <h4>{booking.name}</h4>
                  <p>{booking.email}</p>
                  <p>{booking.time.substring(0, 10)}</p>
                  <p>{booking.time.substring(11, 16)}</p>
                  <p>{booking.service}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
  