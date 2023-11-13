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
  Select,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  LoadScript,
  TravelMode,
  maps,
  map, 
} from '@react-google-maps/api'

import { useRef, useState } from 'react'

const center = {lat: 13.76, lng: 100.52}

function Map() {
  let navigate = useNavigate()
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef() 

   if (!isLoaded) {
    return <SkeletonText />
  }
    
function calculateAndDisplayRoute(directionsService, directionsRenderer){
  const SelectMode = document.getElementById("mode").value
  const google = window.google

  directionsService.routes({
    origin: document.getElementById("from").value,
    destination: document.getElementById("to").value,
    travelMode: google.maps.TravelMode[SelectMode]
  })
  .then((Response) => {
    directionsRenderer.setDirections(Response);
  })
  .catch((e) => window.alert("Direction requst fail"))
}
  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const google = window.google
    const directionsRenderer = new google.maps.DirectionsRenderer()
    const directionsService = new google.maps.DirectionsService()
    const map = new google.maps.map(document.getElementById("map"),{
      zoom: 14,
      center: {lat: 13.76, lng: 100.52},
    });

    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
      calculateAndDisplayRoute(directionsService, directionsRenderer)
    });
    
  
    /* const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    }) */
    /* setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text) */
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
    
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        //minW='container.md'
        zIndex='1'
        width = '100%'
        height = 'auto'
      >
        <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type='text' placeholder='Origin' id='from' ref={originRef} />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                id='to'
                ref={destiantionRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Select id='mode' placeholder='TravelMode'>
              <option value='DRIVING'>Driving</option>
              <option value='WALKING'>Walking</option>
              <option value='BICYCLING'>Bicycling</option>
              <option value='TRANSIT'>Transit</option>
            </Select>
            <div id='map'></div>
            <Button colorScheme='green' type='submit' onClick={calculateAndDisplayRoute}>
              GO
            </Button>
            <Button colorScheme='pink' type='submit' onClick={()=>navigate('/path')}>
              Favourite
            </Button>
           
          </ButtonGroup>
        </HStack>
        <HStack></HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          
        </HStack>
      </Box>
    </Flex>
  )
}

export default Map