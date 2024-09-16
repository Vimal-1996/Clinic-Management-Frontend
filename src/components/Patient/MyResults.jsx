import React, { useEffect, useState } from 'react'
import { getMedicines } from './Apicalls'

const MyResults = ({ data1 }) => {
  const [medicines, setMedicines] = useState([])


  useEffect(() => {
    getMedicines(data1)
      .then((datas) => { setMedicines(datas.medicines.medicines); })
  }, [])

  useEffect(() => {
    console.log(medicines)
  }, [medicines])

  return (
    <div className="row">
      <div className="col-sm-12">
        <h2>My Results</h2>
        <div className="row mt-3">
          <div className='container-fluid '>
            <div className="row">
              {
                <div className="col-sm-12">
                  <div class="card">
                    <div class="card-body">

                      {
                        medicines.map((element) => {
                          return (
                            <h4>{element}</h4>
                          )

                        })
                      }
                    </div>
                  </div>
                </div>

              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default MyResults