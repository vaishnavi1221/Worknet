import React, { useEffect, useState } from 'react'
import './WorkerPage.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import axios from "axios";
import { Container } from '@mui/material';

function WorkerPage() {
  const type_of_workers = [
    { label: 'Plumber' },
    { label: 'Painter' },
    { label: 'Electrician' },
    { label: 'Carpenter' },
    { label: 'Children caring' },
    { label: 'Animal care' },
    { label: 'gardener' }
  ]
  const locations = [
    { label: 'Porur' },
    { label: 'Perambur' },
    { label: 'Avadi' },
    { label: 'Kattupakkam' },
    { label: 'Iyyappanthangal' },
    { label: 'Kundrathur' }
  ]

  const [filter, setFilter] = useState({
    location: "",
    type: ""
  });
  let [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
    refresh();
  };

  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    let aggLoc = (filter.location.length > 0) ? filter.location : "null";
    let aggType = (filter.type.length > 0) ? filter.type : "null";
    const response = await axios.get(`http://localhost:6969/worker/work/${aggType}/location/${aggLoc}`);
    data = response.data;
    setData(data);
    console.log("==>s", data);
  }

  return (
    <div className='worker_page'>
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <h3>Search for a Worker...</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item sm={4} md={4} lg={4}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <div>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={type_of_workers}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField {...params} name="type" onChange={handleChange} value={filter.location} label="Type of Worker" />
                        )}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={4} md={4} lg={4}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <div>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={locations}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField {...params} name="location" onChange={handleChange} value={filter.location} label="Locations" />
                        )}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={10} lg={10} md={10}>
            <div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Type of worker</th>
                  <th>Location</th>
                  <th>Mobile Number</th>
                </tr>
                {
                  data.map((sWorker) => (
                    <tr>
                      <td>{ sWorker.name }</td>
                      <td>{ sWorker.type_of_worker }</td>
                      <td>{ sWorker.location }</td>
                      <td>{ sWorker.mobile_number }</td>
                    </tr>
                  ))
                }
              </table>
            </div>
          </Grid>
        </Grid>
      </Container>
        
    </div>
  );
}

export default WorkerPage