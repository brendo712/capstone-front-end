import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

export default function TripList(props) {

  const trips = props.trips.map(trip => {
    return (
      <Card key={trip.id} color={"red"}>
        <Image src={trip.image} size='small' wrapped ui={false} />
        <Card.Content textAlign={"center"}>
          <Card.Header>
            {trip.title}
          </Card.Header>
          <Card.Meta>
            {trip.trip_length} days
          </Card.Meta>
          <Card.Description>
            created by {trip.author.username}
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign={"center"}>
          <Button
            basic color='red'
            onClick={ ()=> props.deleteTrip(trip.id) }
          >
            Delete {trip.title}
          </Button>
          <Button
            basic color='green'
            onClick={ ()=> props.editTrip(trip.id) }
          >
            Edit {trip.title}
          </Button>
        </Card.Content>
      </Card>

    )
  })

  return (
    <Card.Group centered={true}>
      {trips}
    </Card.Group>
  )
}
