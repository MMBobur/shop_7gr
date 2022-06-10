import  React,{useState} from "react";
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Img1 from "../../assets/img/blog-01_720x539.webp"
import Img2 from "../../assets/img/blog-02_720x539.webp"
import Img3 from "../../assets/img/blog-03_720x539.jpg"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import "./style.css"
export default function MultiActionAreaCard() {
	const [data1,setData1] = useState([
		{
			img:Img1,
			tittle:"Black Friday Guide: Best Sales & Discount Codes",
			dec:"by fashe-theme Admin on Dec 28,2017",
			op:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit..."
		},
		{
			img:Img2,
			tittle:"The White Sneakers Nearly Every Fashion Girls Own",
			dec:"by fashe-theme Admin on Dec 28,2017",
			op:"Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et..."
		},
		{
			img:Img3,
			tittle:"New York SS 2018 Street Style: By Annina Mislin",
			dec:"by fashe-theme Admin on Dec 28,2017",
			op:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit..."
		}
	])
	const [data2,setData2] = useState([
		{
			tittle:"Free Delivery Worldwide",
			dec:"Mirum est notare quam littera gothica",
		},
		{
			tittle:"T30 Days Return",
			dec:"Simply return it within 30 days for an exchange.",
		},
		{
			tittle:"Store Opening",
			dec:"Shop open from Monday to Sunday",
		}
	])
	return (
		<>
		<Container>
			<Typography sx={{fontWeight:"600",fontSize:"30px",textAlign:"center"}}>OUR BLOG</Typography>
			<Box sx={{ flexGrow: 1,marginTop:"40px" }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={"center"}>
        {data1.map((val, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 366,borderRadius:"0px",boxShadow:"none",overflow:"hidden" }}>
      <CardActionArea >
		<Box sx={{overflow:"hidden" }}>

        <CardMedia
          component="img"
          height="251"
          image={val.img}
          alt="green iguana"
		  className="CardImg"
/>
</Box>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {val.tittle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {val.dec}
          </Typography>
		  <Typography variant="body2" color="text.secondary" sx={{marginTop:"15px"}}>
			{val.op}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
	<Typography sx={{fontWeight:"600",fontSize:"30px",textAlign:"center",marginTop:"100px"}}>@ FOLLOW US ON INSTAGRAM</Typography>
	<Box sx={{ flexGrow: 1,marginTop:"40px" }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={"center"}>
        {data2.map((val, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 366,borderRadius:"0px",boxShadow:"none" }}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"18px",color:"#555",textAlign:"center"}}>
            {val.tittle}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:"center"}}>
          {val.dec}
          </Typography>
			
        </CardContent>
      </CardActionArea>
    </Card>
	<Divider orientation="vertical" flexItem>
</Divider>
          </Grid>
        ))}
      </Grid>
    </Box>
			</Container>

		</>
	);
}
