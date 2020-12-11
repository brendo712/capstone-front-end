import React, { Component } from 'react'
import NewTripForm from '../NewTripForm'
import TripList from '../TripList'
import EditTripModal from '../EditTripModal'

export default class ItineraryContainer extends Component{
  constructor(props) {
    super(props)

    this.state = {
      trips: [],
      idOfTripToEdit: -1

    }
  }

  componentDidMount() {
    this.getTrips()
  }

  getTrips = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/trips/"
      const tripsResponse = await fetch(url, {
        credentials: 'include'
      })
      const tripsJson = await tripsResponse.json()
      this.setState({
        trips: tripsJson.data
      })

    } catch(err) {
      console.log("Error getting trip data.", err)
    }
  }


  deleteTrip = async (idOfTripToDelete) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/trips/" + idOfTripToDelete
      const deleteTripResponse = await fetch(url, {
        credentials: 'include',
        method: 'DELETE'
      })
      const deleteTripJson = await deleteTripResponse.json()
      console.log("deleteTripJson", deleteTripJson)

      if(deleteTripResponse.status === 200) {
        this.getTrips()
      }
    } catch(err) {
      console.log("Error deleting trip", err)
    }
  }

  createTrip = async (tripToAdd) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/trips/"
      const createTripResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tripToAdd)
      })
      const createTripJson = await createTripResponse.json()

      if(createTripResponse.status === 201 || createTripResponse.status === 200){
        this.setState({
          trips: [...this.state.trips, createTripJson.data]
        })
      }
    } catch(err) {
      console.log("Error adding trip", err)
    }
  }

  editTrip = (idOfTripToEdit) => {
    console.log("You are trying to edit trip with id: ", idOfTripToEdit)
    this.setState({
      idOfTripToEdit: idOfTripToEdit
    })
  }

  updateTrip = async (updateTripInfo) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/trips/" + this.state.idOfTripToEdit
      const updateTripResponse = await fetch(url, {
        credentials: 'include',
        method: 'PUT',
        body: JSON.stringify(updateTripInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("updateTripResponse", updateTripResponse)
      const updateTripJson = await updateTripResponse.json()
      console.log("updateTripJson", updateTripJson)

      if(updateTripResponse.status === 200) {
        const trips = this.state.trips
        const indexOfTripBeingUpdated = trips.findIndex(trip => trip.id === this.state.idOfTripToEdit)
        trips[indexOfTripBeingUpdated] = updateTripJson.data
        this.setState({
          trips:trips,
          idOfTripToEdit: -1
        })
      }
    } catch(err) {
      console.log("Error updating trip info", err)
    }
  }

  closeModal = () => {
    this.setState({
      idOfTripToEdit: -1
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2> Trips</h2>
        <NewTripForm createTrip={this.createTrip} />
        <TripList
          trips={this.state.trips}
          deleteTrip={this.deleteTrip}
          editTrip={this.editTrip}
        />
        {
          this.state.idOfTripToEdit !== -1
          &&
          <EditTripModal
            key={this.state.idOfTripToEdit}
            tripToEdit={this.state.trips.find((trip) => trip.id === this.state.idOfTripToEdit)}
            updateTrip={this.updateTrip}
            closeModal={this.closeModal}
          />
        }
      </React.Fragment>
    )
  }
}
