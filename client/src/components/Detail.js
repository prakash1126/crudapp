import React from 'react'

const Detail = () => {
    return (
        <div className='container mt-5'>
            <h1 style={{ fontWeight: 400 }}>Welcome Prakash Neupane</h1>
            <div className="card" style={{ width: 500, height: 300 }}>
                <div className='button mt-3'>
                    <div className='image'>
                    <img src='https://www.hpseb.in/irj/go/km/docs/internet/New_Website/Pages/HPSEBL/images/3135715.png' style={{ marginLeft: 10, width: 50, height: 50 }} alt="" />
                    </div>
                    <div ClassName='buttons'>
                    <button className="btn btn-primary mx-2">
                        <i class="fas fa-pen"></i>
                    </button>
                    <button className="btn btn-danger mx-2">
                        <i class="fas fa-trash"></i>
                    </button>
                    </div>
                </div>
                <div className='card-body'>
                    <h3 className='left_view' style={{ fontWeight: 400, fontSize: 20 }}><span style={{ fontWeight: 600, fontSize: 20 }}>First Name:</span>Prakash</h3>
                    <h3 className='left_view' style={{ fontWeight: 400, fontSize: 20 }}><span style={{ fontWeight: 600, fontSize: 20 }}>Last Name:</span>Neupane</h3>
                    <p><i className="fas fa-location-dot"></i><span style={{ marginLeft: 15 }} >Address:</span>Ghattekulo-32</p>
                    <p><i className="fa-solid fa-phone"></i><span style={{ marginLeft: 15 }}>Phone Number: </span>9866332260</p>
                </div>
            </div>
        </div>
    )
}

export default Detail