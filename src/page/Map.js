import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
  Image,
} from "@chakra-ui/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PublicIcon from "@mui/icons-material/Public";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import worldIcon from "../image/world.svg";
import locationIcon from "../image/location.svg";
import tripleDot from "../image/tripleDot.svg";
import { db } from "../firebase";
import { collection,addDoc,getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { React, useRef, useState , useEffect } from "react";
import { BottomNavigation } from "reactjs-bottom-navigation";

const center = { lat: 48.8584, lng: 2.2945 };

function Map() {
  let navigate = useNavigate();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();
  const auth = getAuth();
  const [form, setForm]= useState({email: auth.currentUser.email,})
  useEffect(() => {
    console.log("form updated", form);
  }, [form]);



  const handletextChange =(e)=>{
    console.log("handle change",e.target.name,e.target.value)
    setForm({
        ...form,
        [e.target.name]: e.target.value 
         })
    console.log("form", form)


}


const handlePlaceSelected = (place) => {
  // ทำอย่างไรก็ตามเมื่อผู้ใช้เลือกตัวเลือก
  console.log('Selected place:', place);
  setForm({
    ...form,
    start: place.description,
    // และอื่น ๆ ตามที่ต้องการ
  });
};




const handleAddData = async (e) => {
  e.preventDefault()
  

  
  try {
      console.log("Pass")
      const auth = getAuth();
         console.log(form)
      await addDoc(collection(db,"FavP",),form).then((res)=>{
        console.log(res);
     })
      
      
      
  } catch (err) {
      console.error(err);
  }}

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>

      <Box
        p={4}
        m={0}
        bgColor="#FFF1A9"
        shadow="base"
        zIndex="1"
        width="100%"
        height="auto"
      >
        <HStack 
        
        spacing={2} justifyContent="space-between">
          <Box flexGrow={1}>
            <Autocomplete
             
             
            
            >
              <HStack>
                <PublicIcon />
                <Input

                  type="text"
                  name="start"
                  placeholder="ต้นทาง"
                  bgColor={"white"}
                  ref={originRef}
                  onChange={handletextChange}
                  
                />
      

              </HStack>
            </Autocomplete>
          </Box>
        </HStack>
        <Box>
          <MoreVertIcon />
        </Box>
        <HStack spacing={2} justifyContent="space-between">
          <Box flexGrow={1}>
            <Autocomplete>
              <HStack>
                <FmdGoodIcon />
                <Input
                  
                  type="text"
                  name="end"
                  placeholder="ปลายทาง"
                  bgColor={"white"}
                  ref={destiantionRef}
                  onChange={handletextChange}
                />
              </HStack>
            </Autocomplete>
          </Box>
        </HStack>
        <HStack spacing={2} mt={4} justifyContent="space-between">
          <ButtonGroup width="full">
            <Button
            onClick={handleAddData}
            >
              <BookmarkBorderIcon />
            </Button>
            <Button
              type="submit"
              onClick={calculateRoute}
              bgColor="#489ECF"
              textColor={"white"}
              width="full"
            >
              ค้นหาเส้นทาง
            </Button>
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent="space-between">
          <Text>ระยะทาง: {distance} </Text>
          <Text>เวลาที่ใช้: {duration} </Text>
        </HStack>
      </Box>
      <Button
        position="fixed"
        type="submit"
        bottom="4"
        right="4"
        backgroundColor={"#489ECF"}
        color={"white"}
        size="lg"
        onClick={() => navigate("/Favpath")}
      >
        เส้นทางที่บันทึกไว้
      </Button>
    </Flex>
  );
}

export default Map;
