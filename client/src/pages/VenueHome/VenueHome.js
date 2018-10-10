// import React, { Component } from 'react';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Header from "../../components/Header"
// import Nav from "../../components/Nav";
// import Main from "../../components/Main";
// import Shows from "../../components/Shows";
// import Avatar from '@material-ui/core/Avatar';
// import API from "../../utils/API";


// import "./VenueHome.css";

// const styles = {

//     column: {
//         position: "fixed"
//     }


// }

// class VenueHome extends Component {

//     state = {
//         bands: [],
//         name: "",
//         description: "",
//         statistics: ""
//       };
    
//       componentDidMount() {
//         this.loadBands();
//       }
    
//       loadBands = () => {
//         API.getBands()
//           .then(res =>
//             this.setState({ bands: res.data, name: "", description: "", statistics: "" })
//           )
//           .catch(err => console.log(err));
//       };

//     render() {

//         return (
//             <div>
//                 <Header />
//                 <Grid container direction="row" justify="center" alignItems="flex-start" spacing={24} style={{ marginTop: "5%" }}>
//                     <Nav className = {styles.column}/>
//                     <Main />
//                     <Shows className = {styles.column}/>
//                 </Grid>
//             </div>
//         )
//     }

// }

// export default VenueHome;