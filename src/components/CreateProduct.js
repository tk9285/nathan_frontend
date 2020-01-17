import React, { Component } from "react";
import axios from "axios";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      img_url: "",
      price:"",
      submit: false
    };
  }
  onSubmit = async e => {
    e.preventDefault();
    // console.log("state", this.state);
    const {name, price, description, img_url} = this.state
    const data = {
        name,
        price,
        description,
        img_url
    }
    console.log(data)
    await axios.post(`http://localhost:3000/products`, data)
    .then(res => {
      console.log(res);
    //   this.props.addSportStories(res.data);
      this.setState({
        submit: true
      });
      
      window.location.reload();
    });
  };
//   onSubmit = async e => {
//     e.preventDefault();
//     // console.log("state", this.state);
//     const {name, price, description, img_url} = this.state
//     const data = {
//         id,
//         name,
//         price,
//         description,
//         img_url
//     }
//     console.log(data)
//     await axios.put(`http://localhost:3000/products/${id}`, data)
//     .then(res => {
//       console.log(res);
//     //   this.props.addSportStories(res.data);
//       this.setState({
//         submit: true
//       });
      
//       window.location.reload();
//     });
//   };
//   onSubmit = async e => {
//     e.preventDefault();
//     // console.log("state", this.state);
//     const {id, name, price, description, img_url} = this.state
//     const data = {
//         id,
//         name,
//         price,
//         description,
//         img_url
//     }
//     console.log(data)
//     await axios.destroy(`http://localhost:3000/products/${id}`, data)
//     .then(res => {
//       console.log(res);
//     //   this.props.addSportStories(res.data);
//       this.setState({
//         submit: true
//       });
      
//       window.location.reload();
//     });
//   };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div id="createPost" className="Home" style={{marginBottom: '10%'}}>
        <div className="Story createPost" style={{ height: "40vh", width: '30%', margin: '0 auto', border: '1px solid black'}}>
          <div className="Headline" style={{ backgroundColor: "#b0c4de", width: '70%', margin: '0 auto' }}>
            <h3 style={{marginLeft: '20%', marginTop: '10%', marginBottom: '10%'}}> CREATE A POST</h3>
          </div>
          <div className="form" style={{ height: "20vh"}}>
            <div className="formContent" style={{marginLeft:'20%'}}>
              <form className="formStyle" onSubmit={(e) => this.onSubmit(e)}>
                {this.state.submit && (
                  <div className="row">
                    <b className="success"> Post Submitted Succefully</b>
                  </div>
                )}
                <div className="row">
                  <label className="label"> Title: </label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    value={this.state.name}
                    onChange={e => this.changeHandler(e)}
                    required
                    style={{marginLeft:'17%'}}
                  />
                </div>
                <div className="row">
                  <label className="label"> Description: </label>
                  <input
                    name="description"
                    type="text"
                    className="input"
                    value={this.state.description}
                    onChange={e => this.changeHandler(e)}
                    required
                    style={{marginLeft:'2%'}}

                  />
                </div>
                <div className="row">
                  <label className="label"> Image URL: </label>
                  <input
                    name="img_url"
                    type="text"
                    className="input"
                    value={this.state.img_url}
                    onChange={e => this.changeHandler(e)}
                    required
                    style={{marginLeft:'3.9%'}}

                  />
                </div>

                <div className="row">
                  <label className="label"> Price: </label>
                  <input
                    name="price"
                    type="text"
                    className="input"
                    value={this.state.price}
                    onChange={e => this.changeHandler(e)}
                    required
                    style={{marginLeft:'15.8%'}}

                  />
                </div>


                <div className="btnrow">
                    <input 
                    type="submit"
                    value="submit"
                    style={{marginLeft:'25%',marginTop: '15%', border: '1px solid black'}}

                    />
                  
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default CreatePost;
