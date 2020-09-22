import React, { useState } from "react";
import "./App.css";

import BookingSlots from "./components/BookingSlots";

function RoomBooking() {
  const [adultsCount, setAdultsCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleRoomIncrement = () => {
    const newRoomCount = roomCount + 1;
    setRoomCount(newRoomCount);
    updateAdultCount(newRoomCount);
  };

  const updateAdultCount = (roomCount) => {
    roomCount > adultsCount && setAdultsCount(roomCount);
  };

  const updateRoomCount = (roomCount) => {
    setRoomCount(roomCount);
  };

  //ADULTS INCREMENT
  const handleAdultsIncrement = () => {
    let newAdultCount = adultsCount + 1;
    const totalPersonCount = newAdultCount + childrenCount;
    const requiredRooms = Math.ceil(totalPersonCount / 4);
    if (requiredRooms > roomCount && requiredRooms <= 5) {
      updateRoomCount(requiredRooms);
    }
    if (totalPersonCount <= 20) {
      setAdultsCount(newAdultCount);
    }
  };

  //ADULTS DECREMENT
  const handleAdultsDecrement = () => {
    let newAdultCount = adultsCount - 1;
    const totalPersonCount = newAdultCount + childrenCount;
    const requiredRooms = Math.ceil(totalPersonCount / 4);
    if (requiredRooms < roomCount && requiredRooms <= 5) {
      updateRoomCount(requiredRooms);
    }
    if (totalPersonCount <= 20) {
      setAdultsCount(newAdultCount);
    }
  };

  //ROOM DECREMENT
  const handleRoomDecrement = () => {
    setRoomCount((prevCount) => prevCount - 1);
    setAdultsCount(roomCount);
  };

  //CHILDREN INCREMENT
  const handleChildrenIncrement = () => {
    let newChildCount = childrenCount + 1;
    const totalPersonCount = adultsCount + newChildCount;
    const requiredRooms = Math.ceil(totalPersonCount / 4);
    if (totalPersonCount <= 20) {
      // if (adultsCount > roomCount) {
      updateRoomCount(requiredRooms);
      updateAdultCount(requiredRooms);
      // } else {
      // newChildCount = childrenCount;
      // }
    } else {
      newChildCount = childrenCount;
    }
    setChildrenCount(newChildCount);
  };

  //CHILDREN DECREMENT
  const handleChildrenDecrement = () => {
    let newChildCount = childrenCount - 1;
    const totalPersonCount = adultsCount + newChildCount;
    const requiredRooms = Math.ceil(totalPersonCount / 4);
    if (totalPersonCount <= 20) {
      updateRoomCount(requiredRooms);
      updateAdultCount(requiredRooms);
    } else {
      newChildCount = childrenCount;
    }
    setChildrenCount(newChildCount);
  };

  return (
    <div className=" container mt-5">
      <h3 className="text-success text-center font-weight-light">
        ROOM BOOKING
      </h3>
      <div className=" mt-5">
        <section className="row">
          <div className="col-12">
            <h4 className="text-primary font-weight-lighter">
              <i className="fa fa-users"></i> Choose number of
              <span className="font-weight-bold"> People</span>
            </h4>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <BookingSlots
                  heading="ROOMS"
                  incrementHandler={handleRoomIncrement}
                  decrementHandler={handleRoomDecrement}
                  roomCount={roomCount}
                  icon="fa fa-bed"
                />
                <hr className="p-1" />
                <BookingSlots
                  heading="ADULTS"
                  incrementHandler={handleAdultsIncrement}
                  decrementHandler={handleAdultsDecrement}
                  adultsCount={adultsCount}
                  icon="fa fa-user"
                />
                <hr className="p-1" />
                <BookingSlots
                  heading="CHILDREN"
                  incrementHandler={handleChildrenIncrement}
                  decrementHandler={handleChildrenDecrement}
                  childrenCount={childrenCount}
                  icon="fa fa-child"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default RoomBooking;
