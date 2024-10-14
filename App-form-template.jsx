import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Student Management</h1>

      <table className="table table-bordered mb-5">
        <thead>
          <tr >
            <th className='bg-light'>ID</th>
            <th className='bg-light'>Name</th>
            <th className='bg-light'>Gender</th>
            <th className='bg-light'>Section</th>
            <th className='bg-light'>Hobby</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Thomas Jefferson</td>
            <td>Male</td>
            <td>BSIT-3A</td>
            <td>Dota 2</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Steven Adams</td>
            <td>Female</td>
            <td>BSIT-3D</td>
            <td>ML</td>
          </tr>
        </tbody>
      </table>

      <hr className="my-4" />

      <div className="row">
        {/* Add Student Form */}
        <div className="col-md-4">
          <h3>Add Student</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select
                className="form-select"
                id="gender"
                name="gender"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="section" className="form-label">Section</label>
              <input
                type="text"
                className="form-control"
                id="section"
                name="section"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="hobby" className="form-label">Hobby</label>
              <input
                type="text"
                className="form-control"
                id="hobby"
                name="hobby"
              />
            </div>
            <button type="submit" className="btn btn-primary">Add Student</button>
          </form>
        </div>

        {/* Update Student Form */}
        <div className="col-md-4">
          <h3>Update Student</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="updateId" className="form-label">Student ID</label>
              <input
                type="text"
                className="form-control"
                id="updateId"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="updateName" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="updateName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="updateGender" className="form-label">Gender</label>
              <select
                className="form-select"
                id="updateGender"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="updateSection" className="form-label">Section</label>
              <input
                type="text"
                className="form-control"
                id="updateSection"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="updateHobby" className="form-label">Hobby</label>
              <input
                type="text"
                className="form-control"
                id="updateHobby"
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-warning">Update</button>
            </div>
          </form>
        </div>

        {/* Delete Student Form */}
        <div className="col-md-4">
          <h3>Delete Student</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="deleteId" className="form-label">Student ID</label>
              <input
                type="text"
                className="form-control"
                id="deleteId"
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-danger">Delete</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
