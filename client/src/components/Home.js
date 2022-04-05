import React from 'react'

const Home = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="add_btn mt-2">
                    <button className="btn btn-primary">Add Data</button>
                </div>
                <table class="table mt-5">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name </th>
                            <th scope="col">Address</th>
                            <th scope="col"> Phone Number </th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>98666332260</td>
                            <td className="d-flex justify-content-between">
                                <button className="btn btn-success">
                                <i class="fas fa-eye"></i>
                                </button>
                                <button className="btn btn-primary">
                                <i class="fas fa-pen"></i>
                                </button>
                                <button className = "btn btn-danger">
                                <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;