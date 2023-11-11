import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      phoneNumber: "",
      email: "",
      password: "",
      locationService: false,
      microphonePermission: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here (e.g., send data to a server)
  };

  render() {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="w-full max-w-md p-8 rounded-lg font-sarabun">
          <h2 className="text-2xl font-regular mb-4">สมัครสมาชิก</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-regular mb-2"
              >
                ชื่อ
              </label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                className="w-full p-2  border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="surname"
                className="block text-gray-700 text-sm font-regular mb-2"
              >
                นามสกุล
              </label>
              <input
                type="text"
                name="surname"
                value={this.state.surname}
                onChange={this.handleInputChange}
                className="w-full p-2 border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-regular mb-2"
              >
                เบอร์โทรศัพท์
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                className="w-full p-2 border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-regular mb-2"
              >
                อีเมล์
              </label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="w-full p-2 border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-regular mb-2"
              >
                รหัสผ่าน
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="w-full p-2 border bg-white/50 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-regular mb-2">
                <input
                  type="checkbox"
                  name="locationService"
                  checked={this.state.locationService}
                  onChange={this.handleInputChange}
                  className="mr-2"
                />
                อนุญาตให้เข้าถึงที่อยู่ในขณะที่ใช้แอปพลิเคชัน
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-regular mb-2">
                <input
                  type="checkbox"
                  name="microphonePermission"
                  checked={this.state.microphonePermission}
                  onChange={this.handleInputChange}
                  className="mr-2"
                />
                อนุญาตให้เปิดไมโครโฟนในขณะที่ใช้แอปพลิเคชัน
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#489ECF] w-full text-white px-4 py-2 rounded-lg shadow-lg"
              >
                สมัครสมาชิก
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
